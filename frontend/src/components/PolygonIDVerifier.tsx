import { useEffect, useState } from "react";
import { generateProof, ProofRequestType, verifyProof } from "@/services";
import { QRCode } from "react-qr-svg";

const PolygonIdVerifier = () => {
  const [proofRequest, setProofRequest] = useState<typeof ProofRequestType>(
    {} as typeof ProofRequestType
  );
  const [proofRequestSuccess, setProofRequestSuccess] = useState(false);
  const [proofVerified, setProofVerfied] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const proof = await generateProof();
        setProofRequest(proof);
        setProofRequestSuccess(true);
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []); // This effect runs once on component mount

  useEffect(() => {
    const fetchProofStatus = async () => {
      console.log("fetchProofStatus");
      console.log("🚀 ~ fetchProofStatus ~ proofRequest.requestId:", proofRequest.requestId)
      const proofStatus = await verifyProof(proofRequest.requestId);
      if(proofStatus?.status === 200) {
        setProofVerfied(true);
        console.log("🚀 ~ fetchProofStatus ~ proofStatus:", proofStatus)
        return;
      }
    };

    const intervalId = setInterval(fetchProofStatus, 3000); // Fetch proof status every 5 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [proofRequest]); // This effect runs whenever proofRequest changes


  return (
    <div className="flex flex-col justify-center items-center">
      {proofRequest.QRData && (
        <>
      <h3 className="text-center">Scan this QR code with your PolygonID wallet to verify your credecntials</h3>
        <div className="mb-20 w-[276px] h-[276px] bg-white flex justify-center items-center">
          <QRCode
            level="Q"
            style={{ width: 256 }}
            value={JSON.stringify(proofRequest.QRData)}
          />
        </div>
        </>
      )}

      {proofRequestSuccess && (
        <h3 className="text-center">Verify your proof now</h3>
      )}

      {proofVerified && (
        <h3 className="text-center">Proof verified!</h3>
      )}
      {!proofVerified && (
        <h3 className="text-center">Proof not verified!</h3>
      )}
    </div>
  );
};

export default PolygonIdVerifier;
