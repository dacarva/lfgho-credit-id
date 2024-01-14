import React, { useState } from "react";
import { ChainId } from "@biconomy/core-types";
import { ethers } from "ethers";
import { IBundler, Bundler } from "@biconomy/bundler";
import {
  BiconomySmartAccountV2,
  DEFAULT_ENTRYPOINT_ADDRESS,
} from "@biconomy/account";
import {
  IPaymaster,
  BiconomyPaymaster,
  PaymasterMode,
} from "@biconomy/paymaster";
import {
  ECDSAOwnershipValidationModule,
  DEFAULT_ECDSA_OWNERSHIP_MODULE,
} from "@biconomy/modules";

import { useWalletClient, erc20ABI } from "wagmi";
import { WalletClient, encodeFunctionData, parseUnits } from "viem";

import tokens from "../constants";

const bundler: IBundler = new Bundler({
  bundlerUrl:
    "https://bundler.biconomy.io/api/v2/80001/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44",
  chainId: ChainId.POLYGON_MUMBAI,
  entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
});

const paymaster: IPaymaster = new BiconomyPaymaster({
  paymasterUrl: `https://paymaster.biconomy.io/api/v1/80001/${
    import.meta.env.VITE_BICONOMY_API_KEY
  }`,
});

const walletClientToSigner = (walletClient: WalletClient) => {
  const { account, chain, transport } = walletClient;
  const network = {
    chainId: chain?.id || 1,
    name: chain?.name || "mainnet",
    ensAddress: chain?.contracts?.ensRegistry?.address || "",
  };
  const provider = new ethers.providers.Web3Provider(transport, network);
  const signer = account ? provider.getSigner(account.address) : null;
  return signer;
};

const buildUserOp = async (smartAccount: BiconomySmartAccountV2) => {
  const receiver = import.meta.env.VITE_RECEIVER_WALLET;
  try {
    const functionData = encodeFunctionData({
      abi: erc20ABI,
      functionName: "transfer",
      args: [receiver, parseUnits("10", 6)],
    });
    const transaction = { to: tokens[80001].USDC, data: functionData };
    const userOp = await smartAccount.buildUserOp([transaction], {
      paymasterServiceData: { mode: PaymasterMode.SPONSORED },
    });
    const userOpResponse = await smartAccount.sendUserOp(userOp);

    const transactionDetails = await userOpResponse.wait();

    console.log("Transaction Details:", transactionDetails);
    console.log(
      "Transaction Hash:",
      transactionDetails.receipt.transactionHash
    );
  } catch (error) {
    console.error(error);
  }
};

const TokenSender = () => {
  const [destinationAddress, setDestinationAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [smartWalletAddress, setSmartWalletAddress] = useState("");
  const { data: walletClient } = useWalletClient();

  const handleDestinationAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDestinationAddress(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSendTokens = () => {
    // Logic to send tokens
  };

  const handleConsoleLogData = () => {
    console.log("Destination Address:", destinationAddress);
    console.log("Amount:", amount);
  };

  const handleConnectSmartWallet = async () => {
    console.log("Connect Smart Wallet");
    try {
      const signer = walletClient ? walletClientToSigner(walletClient) : null;

      if (signer) {
        const module = await ECDSAOwnershipValidationModule.create({
          signer,
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
        setSmartWalletAddress(address);
        await buildUserOp(biconomySmartAccount);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Token Sender</h1>
      <p className="mb-4">Smart Wallet Address: {smartWalletAddress}</p>
      <form>
        <div className="mb-4">
          <label htmlFor="destinationAddress" className="block mb-2">
            Destination Address:
          </label>
          <input
            type="text"
            id="destinationAddress"
            value={destinationAddress}
            onChange={handleDestinationAddressChange}
            className="border border-gray-300 px-2 py-1 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2">
            Amount:
          </label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="border border-gray-300 px-2 py-1 rounded"
          />
        </div>
        <button
          type="button"
          onClick={handleSendTokens}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Send Tokens
        </button>
        <button
          type="button"
          onClick={handleConsoleLogData}
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
        >
          Console Log Data
        </button>
        <button
          type="button"
          onClick={handleConnectSmartWallet}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Test Account Abstraction
        </button>
      </form>
    </div>
  );
};

export default TokenSender;
