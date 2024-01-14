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
    if (!address) return "";
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isConnected
              ? formatAddress(smartAccountAddress as Address)
              : "Custom Connect"}
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
