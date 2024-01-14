import { erc20ABI } from "wagmi";
import { readContract } from "@wagmi/core";
import { Address, isAddress } from "viem";

export const getTokenBalance = async (
  tokenAddress: Address,
  userAddress: Address
): Promise<bigint> => {
  if (
    !tokenAddress ||
    !isAddress(tokenAddress) ||
    !userAddress ||
    !isAddress(userAddress)
  )
    throw new Error("Input parameters not correct");

  try {
    const balance = await readContract({
      address: tokenAddress,
      abi: erc20ABI,
      functionName: "balanceOf",
      args: [userAddress],
    });
    return balance;
  } catch (error) {
    console.error(error);
    throw new Error("Contract read error");
  }
};
