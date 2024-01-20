import { ReactNode, createContext, useEffect, useState } from "react";
import { useWalletClient, useAccount } from "wagmi";
import { WalletClient, Address, Chain } from "viem";

import {
  LightSmartContractAccount,
  getDefaultLightAccountFactoryAddress,
} from "@alchemy/aa-accounts";
import { AlchemyProvider } from "@alchemy/aa-alchemy";
import { WalletClientSigner, type SmartAccountSigner } from "@alchemy/aa-core";

type SmartWalletContextProps = {
  ownerAddress: Address | null;
  smartAccountAddress: Address | null;
  smartAccount: AlchemyProvider | null;
};
const ENTRYPOINT_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";

const getAlchemyURL = (chainId: number) => {
  switch (chainId) {
    case 80001:
      return `https://polygon-mumbai.g.alchemy.com/v2/${
        import.meta.env.VITE_ALCHEMY_ID_MUMBAI
      }`;
    default:
      return `https://eth-sepolia.g.alchemy.com/v2/${
        import.meta.env.VITE_ALCHEMY_ID_SEPOLIA
      }`;
  }
};

export const SmartWalletContext = createContext<SmartWalletContextProps>({
  ownerAddress: null,
  smartAccountAddress: null,
  smartAccount: null,
});

export const SmartWalletProvider = ({ children }: { children: ReactNode }) => {
  const [ownerAddress, setOwnerAddress] = useState<Address | null>(null);
  const [smartAccountAddress, setSmartAccountAddress] =
    useState<Address | null>(null);
  const [smartAccount, setSmartAccount] = useState<AlchemyProvider | null>(
    null
  );
  const { data: walletClient } = useWalletClient();
  const { isConnected, isDisconnected } = useAccount();

  useEffect(() => {
    const connectSmartWallet = async (walletClient: WalletClient) => {
      if (!walletClient) throw new Error("Wallet client not found");
      const signer: SmartAccountSigner = new WalletClientSigner(
        walletClient,
        "json-rpc" // signerType
      );
      if (!signer) return;

      const chainId = walletClient.chain?.id || 11155111;

      try {
        const provider = new AlchemyProvider({
          rpcUrl: getAlchemyURL(chainId),
          chain: walletClient.chain,
          entryPointAddress: ENTRYPOINT_ADDRESS,
          opts: {
            txMaxRetries: 10,
            txRetryIntervalMs: 2_000,
            txRetryMulitplier: 1.5,
          },
        }).connect((rpcClient) => {
          return new LightSmartContractAccount({
            rpcClient,
            owner: signer,
            chain: walletClient.chain,
            factoryAddress: getDefaultLightAccountFactoryAddress(
              walletClient.chain as Chain
            ),
          });
        });

        const address = await provider.getAddress();
        provider.withAlchemyGasManager({
          policyId: import.meta.env.VITE_ALCHEMY_GAS_MANAGER_POLICY_ID,
        });
        console.log("🚀 ~ connectSmartWal ~ address:", address);
        setSmartAccountAddress(address as Address | null);
        setSmartAccount(provider);
        setOwnerAddress(walletClient.account?.address || null);
      } catch (error) {
        console.error(error);
      }
    };

    const disconnectSmartWallet = async () => {
      setOwnerAddress(null);
      setSmartAccountAddress(null);
      setSmartAccount(null);
    };

    if (isConnected && walletClient?.account?.address) {
      connectSmartWallet(walletClient);
    }
    if (isDisconnected) {
      disconnectSmartWallet();
    }
  }, [walletClient, isConnected, isDisconnected]);

  return (
    <SmartWalletContext.Provider
      value={{
        ownerAddress,
        smartAccountAddress,
        smartAccount,
      }}
    >
      {children}
    </SmartWalletContext.Provider>
  );
};
