import { ReactNode, createContext, useEffect, useState } from "react";
import { useWalletClient, useAccount } from "wagmi";
import { WalletClient, Address } from "viem";
import { ethers } from "ethers";
import {
  ECDSAOwnershipValidationModule,
  DEFAULT_ECDSA_OWNERSHIP_MODULE,
} from "@biconomy/modules";
import {
  BiconomySmartAccountV2,
  DEFAULT_ENTRYPOINT_ADDRESS,
} from "@biconomy/account";
import { IBundler, Bundler } from "@biconomy/bundler";
import { IPaymaster, BiconomyPaymaster } from "@biconomy/paymaster";

type SmartWalletContextProps = {
  ownerAddress: Address | null;
  smartAccountAddress: Address | null;
  smartAccount: BiconomySmartAccountV2 | null;
};

const walletClientToSigner = (walletClient: WalletClient) => {
  const { account, chain, transport } = walletClient;
  const network = {
    chainId: chain?.id || 80001,
    name: chain?.name || "polygonMumbai",
    ensAddress: chain?.contracts?.ensRegistry?.address || "",
  };
  const provider = new ethers.providers.Web3Provider(transport, network);
  const signer = account ? provider.getSigner(account.address) : null;
  return signer;
};

const getBiconomyApiKey = (chainId: number) => {
  switch (chainId) {
    case 11155111:
      return import.meta.env.VITE_BICONOMY_API_KEY_SEPOLIA;
    case 137:
      return import.meta.env.VITE_BICONOMY_API_KEY_POLYGON;
    default:
      return import.meta.env.VITE_BICONOMY_API_KEY_MUMBAI;
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
  const [smartAccount, setSmartAccount] =
    useState<BiconomySmartAccountV2 | null>(null);
  const { data: walletClient } = useWalletClient();
  const { isConnected, isDisconnected } = useAccount();

  useEffect(() => {
    const connectSmartWallet = async (walletClient: WalletClient) => {
      const signer = walletClientToSigner(walletClient);
      if (!signer) return;

      const chainId = walletClient.chain?.id || 80001;

      try {
        const module = await ECDSAOwnershipValidationModule.create({
          signer: signer || undefined,
          moduleAddress: DEFAULT_ECDSA_OWNERSHIP_MODULE,
        });

        const bundler: IBundler = new Bundler({
          bundlerUrl: `https://bundler.biconomy.io/api/v2/${chainId}/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44`,
          chainId,
          entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
        });

        const paymaster: IPaymaster = new BiconomyPaymaster({
          paymasterUrl: `https://paymaster.biconomy.io/api/v1/${chainId}/${getBiconomyApiKey(
            chainId
          )}`,
        });

        const biconomySmartAccount = await BiconomySmartAccountV2.create({
          chainId,
          bundler,
          paymaster,
          entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
          defaultValidationModule: module,
          activeValidationModule: module,
        });
        const address = await biconomySmartAccount.getAccountAddress();
        setSmartAccountAddress(address as Address | null);
        setSmartAccount(biconomySmartAccount);
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
