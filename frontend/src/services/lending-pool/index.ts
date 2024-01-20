import { Address, isAddress, encodeFunctionData, parseUnits } from "viem";
import { erc20ABI } from "wagmi";
import { fetchToken } from "@wagmi/core";
import { Hex } from "viem";

import PoolABI from "@/assets/abis/Pool.json";
import VariableDebtTokenABI from "@/assets/abis/IVariableDebtToken.json";
import { BiconomySmartAccountV2 } from "@biconomy/account";
import { PaymasterMode } from "@biconomy/paymaster";
import { UserOpReceipt } from "@biconomy/bundler";

export const encodeApproval = async (
  lendingPool: Address,
  asset: Address,
  amount: number
): Promise<Hex> => {
  if (
    !isAddress(lendingPool) ||
    !isAddress(asset) ||
    typeof amount !== "number"
  )
    throw new Error("Input parameters not correct");

  try {
    const { decimals } = await fetchToken({ address: asset });

    return encodeFunctionData({
      abi: erc20ABI,
      functionName: "approve",
      args: [lendingPool, parseUnits(amount.toString(), decimals)],
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error occurred during encoding function data");
  }
};

export const deposit = async (
  smartAccount: BiconomySmartAccountV2,
  lendingPool: Address,
  asset: Address,
  amount: string
): Promise<UserOpReceipt> => {
  const smartAccountAddress = await smartAccount.getAccountAddress();
  if (!smartAccountAddress) throw new Error("Wallet not connected");
  if (
    !isAddress(smartAccountAddress) ||
    !isAddress(lendingPool) ||
    !isAddress(asset) ||
    typeof amount !== "string"
  )
    throw new Error("Input parameters not correct");

  try {
    const { decimals } = await fetchToken({ address: asset });

    // 1. Encode the approval function data
    const approvalFunctionData = encodeFunctionData({
      abi: erc20ABI,
      functionName: "approve",
      args: [lendingPool, parseUnits(amount, decimals)],
    });

    const approvalTransaction = {
      to: asset,
      data: approvalFunctionData,
      value: 0,
    };

    // 2. Encode the deposit function data
    const depositFunctionData = encodeFunctionData({
      abi: PoolABI.abi,
      functionName: "supply",
      args: [asset, parseUnits(amount, decimals), smartAccountAddress, 0],
    });

    const depositTransaction = {
      to: lendingPool,
      data: depositFunctionData,
      value: 0,
    };
    // 3. Bundle the two function data together
    const userOp = await smartAccount.buildUserOp(
      [approvalTransaction, depositTransaction],
      {
        paymasterServiceData: { mode: PaymasterMode.SPONSORED },
      }
    );

    // 4. Send the transaction
    const userOpResponse = await smartAccount.sendUserOp(userOp);
    const transactionDetails = await userOpResponse.wait();
    return transactionDetails;
  } catch (error) {
    console.error(error);
    throw Error("Error occurred during deposit");
  }
};

export const delegateCollateral = async (
  smartAccount: BiconomySmartAccountV2,
  lendingPool: Address,
  debtToken: Address,
  delegatee: Address,
  amount: string
): Promise<UserOpReceipt> => {
  const smartAccountAddress = await smartAccount.getAccountAddress();
  if (!smartAccountAddress) throw new Error("Wallet not connected");
  if (
    !isAddress(smartAccountAddress) ||
    !isAddress(lendingPool) ||
    !isAddress(delegatee) ||
    !isAddress(debtToken) ||
    typeof amount !== "string"
  )
    throw new Error("Input parameters not correct");
  try {
    const { decimals } = await fetchToken({ address: debtToken });

    // 1. Encode the delegate collateral function data
    const approveDelegationData = encodeFunctionData({
      abi: VariableDebtTokenABI.abi,
      functionName: "approveDelegation",
      args: [delegatee, parseUnits(amount, decimals)],
    });

    const approveDelegationTransaction = {
      to: debtToken,
      data: approveDelegationData,
      value: 0,
    };

    // 2. Bundle the two function data together
    const userOp = await smartAccount.buildUserOp(
      [approveDelegationTransaction],
      {
        paymasterServiceData: { mode: PaymasterMode.SPONSORED },
      }
    );

    // 3. Send the transaction
    const userOpResponse = await smartAccount.sendUserOp(userOp);
    const transactionDetails = await userOpResponse.wait();
    return transactionDetails;
  } catch (error) {
    console.error(error);
    throw Error("Error occurred during delegate collateral");
  }
};

export const borrow = async (
  smartAccount: BiconomySmartAccountV2,
  lendingPool: Address,
  asset: Address,
  amount: string,
  delegator?: Address
): Promise<UserOpReceipt> => {
  const smartAccountAddress = await smartAccount.getAccountAddress();
  if (!smartAccountAddress) throw new Error("Wallet not connected");
  if (
    !isAddress(smartAccountAddress) ||
    !isAddress(lendingPool) ||
    !isAddress(asset) ||
    typeof amount !== "string"
  )
    throw new Error("Input parameters not correct");

  try {
    const { decimals } = await fetchToken({ address: asset });

    // 1. Encode the borrow function data
    const borrowFunctionData = encodeFunctionData({
      abi: PoolABI.abi,
      functionName: "borrow",
      args: [
        asset,
        parseUnits(amount, decimals),
        2,
        0,
        delegator ? delegator : smartAccountAddress,
      ],
    });

    const borrowTransaction = {
      to: lendingPool,
      data: borrowFunctionData,
      value: 0,
    };

    // 2. Bundle the two function data together
    const userOp = await smartAccount.buildUserOp([borrowTransaction], {
      paymasterServiceData: { mode: PaymasterMode.SPONSORED },
    });

    // 3. Send the transaction
    const userOpResponse = await smartAccount.sendUserOp(userOp);
    const transactionDetails = await userOpResponse.wait();
    return transactionDetails;
  } catch (error) {
    console.error(error);
    throw Error("Error occurred during borrow");
  }
};
