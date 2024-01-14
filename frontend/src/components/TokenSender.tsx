import React, { useState, useContext, useEffect } from "react";
import { BiconomySmartAccountV2 } from "@biconomy/account";
import { PaymasterMode } from "@biconomy/paymaster";
import { erc20ABI } from "wagmi";
import { fetchToken } from "@wagmi/core";
import { Address, encodeFunctionData, parseUnits } from "viem";
import toast from "react-hot-toast";

import { tokens, SPONSOR_FEE } from "@/constants";
import { SmartWalletContext } from "@/context/smart-wallet";
import { getTokenBalance } from "@/services";

const buildUserOp = async (
  smartAccount: BiconomySmartAccountV2,
  destinationAddress: Address,
  amount: string
) => {
  try {
    const functionData = encodeFunctionData({
      abi: erc20ABI,
      functionName: "transfer",
      args: [
        destinationAddress || import.meta.env.VITE_RECEIVER_WALLET,
        parseUnits(amount, 6),
      ],
    });

    if (!smartAccount.chainId) throw new Error("Chain ID not found");
    const transaction = {
      to: tokens[smartAccount.chainId as keyof typeof tokens].USDC,
      data: functionData,
    };

    const repayToSponsorTxData = encodeFunctionData({
      abi: erc20ABI,
      functionName: "transfer",
      args: [import.meta.env.VITE_SPONSOR_WALLET, parseUnits(SPONSOR_FEE, 6)],
    });

    const repayToSponsorTx = {
      to: tokens[smartAccount.chainId as keyof typeof tokens].USDC,
      data: repayToSponsorTxData,
    };

    const userOp = await smartAccount.buildUserOp(
      [transaction, repayToSponsorTx],
      {
        paymasterServiceData: { mode: PaymasterMode.SPONSORED },
      }
    );
    const userOpResponse = await smartAccount.sendUserOp(userOp);

    const transactionDetails = await userOpResponse.wait();

    console.log("Transaction Details:", transactionDetails);
    console.log(
      "Transaction Hash:",
      transactionDetails.receipt.transactionHash
    );
    return transactionDetails;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const TokenSender = () => {
  const { smartAccount, smartAccountAddress } = useContext(SmartWalletContext);

  const [destinationAddress, setDestinationAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [tokenBalance, setTokenBalance] = useState("");

  useEffect(() => {
    if (!smartAccount || !smartAccountAddress) return;

    const fetchTokenBalance = async () => {
      try {
        const tokenAddress = tokens[smartAccount.chainId as keyof typeof tokens]
          .USDC as Address;
        //TODO: set the default token from USDC
        const tokenBalance = await getTokenBalance(
          tokenAddress,
          smartAccountAddress as Address
        );
        const token = await fetchToken({ address: tokenAddress });
        setTokenBalance(
          (Number(tokenBalance) / 10 ** token.decimals).toString()
        );
      } catch (error) {
        console.error("Failed to fetch token balance:", error);
        // Optionally, handle error here
      }
    };

    // Fetch the token balance immediately, then set up the interval
    fetchTokenBalance();
    const intervalId = setInterval(fetchTokenBalance, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [smartAccountAddress, smartAccount]);

  const handleDestinationAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDestinationAddress(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSendTokens = async () => {
    try {
      if (!smartAccount) {
        toast.error("Smart account not found");
        return;
      }

      toast.promise(
        buildUserOp(
          smartAccount as BiconomySmartAccountV2,
          destinationAddress as `0x${string}`,
          amount
        ),
        {
          loading: "Sending tokens...",
          success: (data) => {
            // Format the success message using data (transactionDetails)
            const successMessage = `Tokens sent! Transaction Hash: ${data.receipt.transactionHash}`;
            return successMessage;
          },
          error: "Failed to send tokens",
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleConsoleLogData = () => {
    console.log("Destination Address:", destinationAddress);
    console.log("Amount:", amount);
  };

  if (!smartAccountAddress) return <div>No smart wallet connected</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Token Sender</h1>
      <p className="mb-4">Smart Wallet Address: {smartAccountAddress}</p>
      <p className="mb-4">User USDC Token Balance: {tokenBalance}</p>
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
      </form>
    </div>
  );
};

export default TokenSender;
