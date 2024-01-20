import { useContext } from "react";
import { SmartWalletContext } from "@/context/smart-wallet";

import { useWalletClient, erc20ABI } from "wagmi";
import { readContract } from "@wagmi/core";
import { Address, encodeFunctionData, parseUnits } from "viem";

const AlchemyAA = () => {
  const { data: walletClient } = useWalletClient();
  const { smartAccount, smartAccountAddress } = useContext(SmartWalletContext);

  const handleClick = async () => {
    console.log("Button clicked");
    if (!walletClient) throw new Error("Wallet client not found");
    if (!smartAccount) throw new Error("Smart account address not found");
    try {
      const USDC = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8";

      const fetchBalance = await readContract({
        abi: erc20ABI,
        address: USDC,
        functionName: "balanceOf",
        args: [smartAccountAddress as Address],
      });
      const balance = Number(fetchBalance) / 1e6;

      if (balance < 5) throw new Error("Balance is less than 5 USDC");
      const uoCallData = encodeFunctionData({
        abi: erc20ABI,
        functionName: "transfer",
        args: [
          "0x53Ec0aF115619c536480C95Dec4a065e27E6419F",
          parseUnits("1", 6),
        ],
      });

      smartAccount.withAlchemyGasManager({
        policyId: import.meta.env.VITE_ALCHEMY_GAS_MANAGER_POLICY_ID,
      });

      const uo = await smartAccount.sendUserOperation({
        target: USDC,
        data: uoCallData,
      });

      const txHash = await smartAccount.waitForUserOperationTransaction(
        uo.hash
      );
      console.log("🚀 ~ handleClick ~ txHash:", txHash);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Get account
      </button>
    </div>
  );
};

export default AlchemyAA;
