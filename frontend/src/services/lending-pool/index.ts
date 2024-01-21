import {
  Address,
  isAddress,
  encodeFunctionData,
  parseUnits,
  parseEther,
  Hash,
} from "viem";
import { erc20ABI } from "wagmi";
import { fetchToken } from "@wagmi/core";
import { Hex } from "viem";

import PoolABI from "@/assets/abis/Pool.json";
import VariableDebtTokenABI from "@/assets/abis/IVariableDebtToken.json";
import WETHGatewayABI from "@/assets/abis/WETHGateway.json";
import { AlchemyProvider } from "@alchemy/aa-alchemy";

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
  smartAccount: AlchemyProvider,
  lendingPool: Address,
  asset: Address,
  amount: string
): Promise<Hash> => {
  const smartAccountAddress = await smartAccount.getAddress();
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
      target: asset,
      data: approvalFunctionData,
    };

    // 2. Encode the deposit function data
    const depositFunctionData = encodeFunctionData({
      abi: PoolABI.abi,
      functionName: "supply",
      args: [asset, parseUnits(amount, decimals), smartAccountAddress, 0],
    });

    const depositTransaction = {
      target: lendingPool,
      data: depositFunctionData,
    };
    // 3. Bundle the two function data together
    const uo = await smartAccount.sendUserOperation([
      approvalTransaction,
      depositTransaction,
    ]);
    const txHash = await smartAccount.waitForUserOperationTransaction(uo.hash);
    console.log("🚀 ~ handleClick ~ txHash:", txHash);
    return txHash;
  } catch (error) {
    console.error(error);
    throw Error("Error occurred during deposit");
  }
};

export const depositETH = async (
  smartAccount: AlchemyProvider,
  WETHGateway: Address,
  lendingPool: Address,
  amount: string
): Promise<Hash> => {
  const smartAccountAddress = await smartAccount.getAddress();
  if (!smartAccountAddress) throw new Error("Wallet not connected");
  if (
    !isAddress(smartAccountAddress) ||
    !isAddress(lendingPool) ||
    typeof amount !== "string"
  )
    throw new Error("Input parameters not correct");

  try {
    const depositFunctionData = encodeFunctionData({
      abi: WETHGatewayABI.abi,
      functionName: "depositETH",
      args: [lendingPool, smartAccountAddress, 0],
    });

    const depositTransaction = {
      target: WETHGateway,
      data: depositFunctionData,
      value: parseEther(amount),
    };

    const uo = await smartAccount.sendUserOperation(depositTransaction);
    const txHash = await smartAccount.waitForUserOperationTransaction(uo.hash);
    return txHash;
  } catch (error) {
    console.error(error);
    throw Error("Error occurred during deposit");
  }
};

export const delegateCollateral = async (
  smartAccount: AlchemyProvider,
  lendingPool: Address,
  debtToken: Address,
  delegatee: Address,
  amount: string
): Promise<Hash> => {
  const smartAccountAddress = await smartAccount.getAddress();
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
      target: debtToken,
      data: approveDelegationData,
    };
    // 3. Bundle the two function data together
    const uo = await smartAccount.sendUserOperation(
      approveDelegationTransaction
    );
    const txHash = await smartAccount.waitForUserOperationTransaction(uo.hash);
    return txHash;
  } catch (error) {
    console.error(error);
    throw Error("Error occurred during delegate collateral");
  }
};

export const borrow = async (
  smartAccount: AlchemyProvider,
  lendingPool: Address,
  asset: Address,
  amount: string,
  delegator?: Address
): Promise<Hash> => {
  const smartAccountAddress = await smartAccount.getAddress();
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
      target: lendingPool,
      data: borrowFunctionData,
    };

    // 3. Bundle the two function data together
    const uo = await smartAccount.sendUserOperation(borrowTransaction);
    const txHash = await smartAccount.waitForUserOperationTransaction(uo.hash);
    return txHash;
  } catch (error) {
    console.error(error);
    throw Error("Error occurred during borrow");
  }
};
