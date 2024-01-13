import React, { useState } from "react";

const TokenSender = () => {
  const [destinationAddress, setDestinationAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleDestinationAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDestinationAddress(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSendTokens = () => {
    // Logic to send tokens
  };

  const handleConsoleLogData = () => {
    console.log("Destination Address:", destinationAddress);
    console.log("Amount:", amount);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Token Sender</h1>
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
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Console Log Data
        </button>
      </form>
    </div>
  );
};

export default TokenSender;
