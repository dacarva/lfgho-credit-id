import { useContext, useState, useEffect } from "react";
import { SmartWalletContext } from "@/context/smart-wallet";
import toast from "react-hot-toast";

import { erc20ABI } from "wagmi";
import { readContract, fetchToken } from "@wagmi/core";
import { Address, encodeFunctionData, parseUnits } from "viem";
import { contracts } from "@/constants";
import { getTokenBalance } from "@/services";
import { deposit, delegateCollateral, borrow } from "@/services/lending-pool";

const AlchemyAA = () => {
  const { smartAccount, smartAccountAddress } = useContext(SmartWalletContext);

  const [destinationAddress, setDestinationAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [tokenBalance, setTokenBalance] = useState("");

  useEffect(() => {
    console.log("Re render");
    if (!smartAccount || !smartAccountAddress) return;

    const fetchTokenBalance = async () => {
      if (!smartAccount) throw new Error("Wallet client not found");
      try {
        const tokenAddress = contracts[
          smartAccount.rpcClient.chain.id as keyof typeof contracts
        ].USDC as Address;
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

  const handleConsoleLogData = () => {
    console.log("Destination Address:", destinationAddress);
    console.log("Amount:", amount);
    console.log("smartAccount", smartAccount);
  };

  const handleSendTokens = async () => {
    try {
      if (!smartAccount) {
        toast.error("Smart account not found");
        throw new Error("Smart account not found");
      }
      const USDC = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8";

      const fetchBalance = await readContract({
        abi: erc20ABI,
        address: USDC,
        functionName: "balanceOf",
        args: [smartAccountAddress as Address],
      });
      const balance = Number(fetchBalance) / 1e6;
      console.log("🚀 ~ handleClick ~ balance:", balance);

      if (balance < 5) throw new Error("Balance is less than 5 USDC");
      const uoCallData = encodeFunctionData({
        abi: erc20ABI,
        functionName: "transfer",
        args: [destinationAddress as Address, parseUnits(amount, 6)],
      });
      const uo = await smartAccount.sendUserOperation({
        target: USDC,
        data: uoCallData,
      });

      toast.promise(smartAccount.waitForUserOperationTransaction(uo.hash), {
        loading: "Sending tokens...",
        success: (data) => {
          // Format the success message using data (transactionDetails)
          const successMessage = `Tokens sent! Transaction Hash: ${data}`;
          console.log(`Tokens sent! Transaction Hash: ${data}`);
          return successMessage;
        },
        error: "Failed to send tokens",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelegateCredit = async () => {
    console.log("handleDelegateCredit");

    if (!smartAccount) throw new Error("Smart account not found");
    try {
      toast.promise(
        delegateCollateral(
          smartAccount,
          contracts[smartAccount.rpcClient.chain.id as keyof typeof contracts]
            .LENDING_POOL as Address,
          contracts[smartAccount.rpcClient.chain.id as keyof typeof contracts]
            .USDC_VARIABLE_DEBT as Address,
          destinationAddress as Address,
          amount
        ),
        {
          loading: "Delegating credit",
          success: (data) => {
            // Format the success message using data (transactionDetails)
            const successMessage = `Credit delegated! Transaction Hash: ${data}`;
            console.log(`Credit delegated! Transaction Hash: ${data}`);
            return successMessage;
          },
          error: "Failed to delegate credit",
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDepositTokens = async () => {
    console.log("Deposit tokens");

    if (!smartAccount) throw new Error("Smart account not found");
    try {
      toast.promise(
        deposit(
          smartAccount,
          contracts[smartAccount.rpcClient.chain.id as keyof typeof contracts]
            .LENDING_POOL as Address,
          contracts[smartAccount.rpcClient.chain.id as keyof typeof contracts]
            .USDC as Address,
          amount
        ),
        {
          loading: "Depositing tokens...",
          success: (data) => {
            // Format the success message using data (transactionDetails)
            const successMessage = `Tokens deposited! Transaction Hash: ${data}`;
            console.log(`Tokens deposited! Transaction Hash: ${data}`);
            return successMessage;
          },
          error: "Failed to deposit tokens",
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleBorrow = async () => {
    console.log("Deposit tokens");

    if (!smartAccount) throw new Error("Smart account not found");
    try {
      toast.promise(
        borrow(
          smartAccount,
          contracts[smartAccount.rpcClient.chain.id as keyof typeof contracts]
            .LENDING_POOL as Address,
          contracts[smartAccount.rpcClient.chain.id as keyof typeof contracts]
            .USDC as Address,
          amount,
          destinationAddress as Address
        ),
        {
          loading: "Requesting loan",
          success: (data) => {
            // Format the success message using data (transactionDetails)
            const successMessage = `Loan successfull! Transaction Hash: ${data}`;
            console.log(`Loan successful! Transaction Hash: ${data}`);
            return successMessage;
          },
          error: "Failed to get loan",
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

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
          onClick={handleDepositTokens}
          className="bg-red-500 text-white px-4 py-2 rounded mr-2"
        >
          Deposit in lending pool
        </button>
        <button
          type="button"
          onClick={handleDelegateCredit}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        >
          Delegate credit
        </button>
        <button
          type="button"
          onClick={handleBorrow}
          className="bg-purple-500 text-white px-4 py-2 rounded mr-2"
        >
          Borrow
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

export default AlchemyAA;
