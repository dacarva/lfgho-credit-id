import { useState } from "react";
import { generateProof, ProofRequestType, verifyProof } from "@/services";
import { QRCode } from "react-qr-svg";

const PolygonId = () => {
  const [proofRequest, setProofRequest] = useState<typeof ProofRequestType>(
    {} as typeof ProofRequestType
  );

  const handleGenerateProof = async () => {
    console.log("handleClick");
    try {
      setProofRequest(await generateProof());
    } catch (error) {
      console.error(error);
    }
  };
  const hanldeProofStatus = async () => {
    console.log("handleClick");
    try {
      if(!proofRequest.requestId) throw new Error("No proof request id");
      const proofStatus = await verifyProof(proofRequest.requestId);
      console.log("🚀 ~ hanldeProofStatus ~ proofStatus:", proofStatus)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {proofRequest.QRData && (
        <div className="mb-20 w-[276px] h-[276px] bg-white flex justify-center items-center">
          <QRCode
            level="Q"
            style={{ width: 256 }}
            value={JSON.stringify(proofRequest.QRData)}
          />
        </div>
      )}
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleGenerateProof}
      >
        Generate Proof
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20"
        onClick={hanldeProofStatus}
      >
        Proof Status
      </button>
    </div>
  );
};

export default PolygonId;
