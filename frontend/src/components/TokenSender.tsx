// import React, { useState, useContext, useEffect } from "react";
// import { BiconomySmartAccountV2 } from "@biconomy/account";
// import { PaymasterMode } from "@biconomy/paymaster";
// import { erc20ABI } from "wagmi";
// import { fetchToken } from "@wagmi/core";
// import { Address, encodeFunctionData, isAddress, parseUnits } from "viem";
// import toast from "react-hot-toast";

// import { contracts, SPONSOR_FEE } from "@/constants";
// import { SmartWalletContext } from "@/context/smart-wallet/biconomy";
// import { getTokenBalance } from "@/services";
// import { deposit, delegateCollateral, borrow } from "@/services/lending-pool";

// const buildUserOp = async (
//   smartAccount: BiconomySmartAccountV2,
//   destinationAddress: Address,
//   amount: string
// ) => {
//   try {
//     const functionData = encodeFunctionData({
//       abi: erc20ABI,
//       functionName: "transfer",
//       args: [
//         destinationAddress || import.meta.env.VITE_RECEIVER_WALLET,
//         parseUnits(amount, 6),
//       ],
//     });

//     if (!smartAccount.chainId) throw new Error("Chain ID not found");
//     const transaction = {
//       to: contracts[smartAccount.chainId as keyof typeof contracts].USDC,
//       data: functionData,
//     };

//     const repayToSponsorTxData = encodeFunctionData({
//       abi: erc20ABI,
//       functionName: "transfer",
//       args: [import.meta.env.VITE_SPONSOR_WALLET, parseUnits(SPONSOR_FEE, 6)],
//     });

//     const repayToSponsorTx = {
//       to: contracts[smartAccount.chainId as keyof typeof contracts].USDC,
//       data: repayToSponsorTxData,
//     };

//     const userOp = await smartAccount.buildUserOp(
//       [transaction, repayToSponsorTx],
//       {
//         paymasterServiceData: { mode: PaymasterMode.SPONSORED },
//       }
//     );
//     const userOpResponse = await smartAccount.sendUserOp(userOp);

//     const transactionDetails = await userOpResponse.wait();

//     console.log("Transaction Details:", transactionDetails);
//     console.log(
//       "Transaction Hash:",
//       transactionDetails.receipt.transactionHash
//     );
//     return transactionDetails;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// const TokenSender = () => {
//   const { smartAccount, smartAccountAddress } = useContext(SmartWalletContext);

//   const [destinationAddress, setDestinationAddress] = useState("");
//   const [amount, setAmount] = useState("");
//   const [tokenBalance, setTokenBalance] = useState("");

//   useEffect(() => {
//     console.log("Re render");
//     if (!smartAccount || !smartAccountAddress) return;

//     const fetchTokenBalance = async () => {
//       try {
//         const tokenAddress = contracts[
//           smartAccount.chainId as keyof typeof contracts
//         ].USDC as Address;
//         //TODO: set the default token from USDC
//         const tokenBalance = await getTokenBalance(
//           tokenAddress,
//           smartAccountAddress as Address
//         );
//         const token = await fetchToken({ address: tokenAddress });
//         setTokenBalance(
//           (Number(tokenBalance) / 10 ** token.decimals).toString()
//         );
//       } catch (error) {
//         console.error("Failed to fetch token balance:", error);
//         // Optionally, handle error here
//       }
//     };

//     // Fetch the token balance immediately, then set up the interval
//     fetchTokenBalance();
//     const intervalId = setInterval(fetchTokenBalance, 3000);

//     // Clear the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, [smartAccountAddress, smartAccount]);

//   const handleDestinationAddressChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setDestinationAddress(e.target.value);
//   };

//   const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setAmount(e.target.value);
//   };

//   const handleSendTokens = async () => {
//     try {
//       if (!smartAccount) {
//         toast.error("Smart account not found");
//         return;
//       }

//       toast.promise(
//         buildUserOp(
//           smartAccount as BiconomySmartAccountV2,
//           destinationAddress as `0x${string}`,
//           amount
//         ),
//         {
//           loading: "Sending tokens...",
//           success: (data) => {
//             // Format the success message using data (transactionDetails)
//             const successMessage = `Tokens sent! Transaction Hash: ${data.receipt.transactionHash}`;
//             return successMessage;
//           },
//           error: "Failed to send tokens",
//         }
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDepositTokens = async () => {
//     console.log("Deposit tokens");

//     if (!smartAccount) throw new Error("Smart account not found");
//     try {
//       const depositReceipt = await deposit(
//         smartAccount,
//         contracts[smartAccount.chainId as keyof typeof contracts]
//           .LENDING_POOL as Address,
//         contracts[smartAccount.chainId as keyof typeof contracts]
//           .USDC as Address,
//         amount
//       );
//       console.log("🚀 ~ handleDepositTokens ~ depositReceipt:", depositReceipt);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelegateCredit = async () => {
//     console.log("Delegate credit");

//     if (!smartAccount) throw new Error("Smart account not found");

//     try {
//       const delegateCollateralReceipt = await delegateCollateral(
//         smartAccount,
//         contracts[smartAccount.chainId as keyof typeof contracts]
//           .LENDING_POOL as Address,
//         contracts[smartAccount.chainId as keyof typeof contracts]
//           .USDC_VARIABLE_DEBT as Address,
//         destinationAddress as Address,
//         amount
//       );
//       console.log(
//         "🚀 ~ handleDelegateCredit ~ delegateCollateralReceipt:",
//         delegateCollateralReceipt
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleBorrow = async () => {
//     if (!smartAccount) throw new Error("Smart account not found");

//     try {
//       const lendingPoolAddress = contracts[
//         smartAccount.chainId as keyof typeof contracts
//       ].LENDING_POOL as Address;
//       const usdcAddress = contracts[
//         smartAccount.chainId as keyof typeof contracts
//       ].USDC as Address;

//       let borrowReceipt;

//       if (destinationAddress !== "" && isAddress(destinationAddress)) {
//         borrowReceipt = await borrow(
//           smartAccount,
//           lendingPoolAddress,
//           usdcAddress,
//           amount,
//           destinationAddress
//         );
//       } else {
//         borrowReceipt = await borrow(
//           smartAccount,
//           lendingPoolAddress,
//           usdcAddress,
//           amount
//         );
//       }

//       console.log("🚀 ~ handleBorrow= ~ borrowReceipt:", borrowReceipt);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleConsoleLogData = () => {
//     console.log("Destination Address:", destinationAddress);
//     console.log("Amount:", amount);
//   };

//   if (!smartAccountAddress) return <div>No smart wallet connected</div>;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Token Sender</h1>
//       <p className="mb-4">Smart Wallet Address: {smartAccountAddress}</p>
//       <p className="mb-4">User USDC Token Balance: {tokenBalance}</p>
//       <form>
//         <div className="mb-4">
//           <label htmlFor="destinationAddress" className="block mb-2">
//             Destination Address:
//           </label>
//           <input
//             type="text"
//             id="destinationAddress"
//             value={destinationAddress}
//             onChange={handleDestinationAddressChange}
//             className="border border-gray-300 px-2 py-1 rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="amount" className="block mb-2">
//             Amount:
//           </label>
//           <input
//             type="text"
//             id="amount"
//             value={amount}
//             onChange={handleAmountChange}
//             className="border border-gray-300 px-2 py-1 rounded"
//           />
//         </div>
//         <button
//           type="button"
//           onClick={handleSendTokens}
//           className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//         >
//           Send Tokens
//         </button>
//         <button
//           type="button"
//           onClick={handleDepositTokens}
//           className="bg-red-500 text-white px-4 py-2 rounded mr-2"
//         >
//           Deposit in lending pool
//         </button>
//         <button
//           type="button"
//           onClick={handleDelegateCredit}
//           className="bg-green-500 text-white px-4 py-2 rounded mr-2"
//         >
//           Delegate credit
//         </button>
//         <button
//           type="button"
//           onClick={handleBorrow}
//           className="bg-purple-500 text-white px-4 py-2 rounded mr-2"
//         >
//           Borrow
//         </button>
//         <button
//           type="button"
//           onClick={handleConsoleLogData}
//           className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
//         >
//           Console Log Data
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TokenSender;

// // 0xE33CC6b56EF062F56c9bb4d732248712fCf7Cea7

// // DELEGATOR: 0xa529440F5Da6C056e59Df8b1989ff402BA94C505
