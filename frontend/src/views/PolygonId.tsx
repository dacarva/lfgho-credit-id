import { useContext } from "react";
import { depositETH } from "@/services";
import { contracts } from "@/constants";
import { SmartWalletContext } from "@/context/smart-wallet";
import { getNetwork } from "@wagmi/core";
import { Address } from "viem";

const PolygonId = () => {
  const { smartAccount } = useContext(SmartWalletContext);

  const handleClick = async () => {
    console.log("handleClick");
    if (!smartAccount) throw new Error("SmartAccount not found");
    try {
      const { chain } = getNetwork();
      const WETH_GATEWAY = contracts[chain?.id as keyof typeof contracts]
        .WETH_GATEWAY as Address;
      const LENDING_POOL = contracts[chain?.id as keyof typeof contracts]
        .LENDING_POOL as Address;

      const AMOUNT = "0.0001";

      const depositETHReceipt = await depositETH(
        smartAccount,
        WETH_GATEWAY,
        LENDING_POOL,
        AMOUNT
      );
      console.log("🚀 ~ handleClick ~ depositETHReceipt:", depositETHReceipt);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
};

export default PolygonId;
