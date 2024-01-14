import { ReactNode, createContext, useEffect, useState } from "react";
import { useWalletClient, useAccount } from "wagmi";
import { WalletClient, Address } from "viem";
import { ethers } from "ethers";
import { bundler, paymaster } from "@/config";
import {
  ECDSAOwnershipValidationModule,
  DEFAULT_ECDSA_OWNERSHIP_MODULE,
} from "@biconomy/modules";
import {
  BiconomySmartAccountV2,
  DEFAULT_ENTRYPOINT_ADDRESS,
} from "@biconomy/account";
import { ChainId } from "@biconomy/core-types";

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
      const module = await ECDSAOwnershipValidationModule.create({
        signer: signer || undefined,
        moduleAddress: DEFAULT_ECDSA_OWNERSHIP_MODULE,
      });
      const biconomySmartAccount = await BiconomySmartAccountV2.create({
        chainId: ChainId.POLYGON_MUMBAI,
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
