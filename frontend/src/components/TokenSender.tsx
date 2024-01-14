import React, { useState, useContext } from "react";
import { BiconomySmartAccountV2 } from "@biconomy/account";
import { PaymasterMode } from "@biconomy/paymaster";

import { erc20ABI } from "wagmi";
import { encodeFunctionData, parseUnits } from "viem";

import tokens from "@/constants";
import { SmartWalletContext } from "@/context/smart-wallet";

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

  const { smartAccount, smartAccountAddress } = useContext(SmartWalletContext);

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
      if (smartAccount) {
        await buildUserOp(smartAccount as BiconomySmartAccountV2);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!smartAccountAddress) return <div>No smart wallet connected</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Token Sender</h1>
      <p className="mb-4">Smart Wallet Address: {smartAccountAddress}</p>
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
