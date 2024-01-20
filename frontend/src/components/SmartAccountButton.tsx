import { useContext } from "react";
import { ConnectKitButton } from "connectkit";
import { SmartWalletContext } from "@/context/smart-wallet";
import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";
import { Address } from "viem";

export const SmartAccountButton = () => {
  const { smartAccountAddress } = useContext(SmartWalletContext);

  const copyToClipboard = () => {
    if (smartAccountAddress) {
      navigator.clipboard.writeText(smartAccountAddress);
      toast.success("Smart Account address copied to clipboard!");
    }
  };

  const formatAddress = (address: Address) => {
    if (!address) return "0x smart";
    const start = address.substring(0, 6);
    const end = address.substring(address.length - 4);
    return `${start}...${end}`;
  };

  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show }) => (
        <div className="flex items-center">
          <button
            onClick={show}
            className="cursor-pointer [border:none] py-0 px-6 bg-primary flex-[0.7425] rounded-31xl flex flex-row items-center justify-center"
          >
            <div className="flex-1 flex flex-row items-center justify-start py-4 px-[13px] gap-[8px]">
              <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium font-body-2 text-shades-white text-center whitespace-nowrap">
                {isConnected
                  ? formatAddress(smartAccountAddress as Address)
                  : "Connect Wallet"}
              </div>
            </div>
          </button>
          {isConnected && (
            <button
              onClick={copyToClipboard}
              className="ml-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded flex items-center"
            >
              <FaCopy />
            </button>
          )}
        </div>
      )}
    </ConnectKitButton.Custom>
  );
};

export default SmartAccountButton;
