import axios from 'axios'
import { POLYGON_ID_URL, POLYGON_ID_ISSUER } from '@/constants';
import creditScoreProof from '@/assets/proofs/creditScoreProof.json'

export const ProofRequestType = {
  QRData: "object",
  requestId: "string"
}

export const generateProof = async () => {
  const uri = `${POLYGON_ID_URL}/sign-in`;
  try {
    const response = await axios.post(uri, creditScoreProof, {
      params: {
        issuer: POLYGON_ID_ISSUER,
        type: "custom"
      }
    });
    const QRData = response.data;
    const requestId = response.headers["x-id"];
    console.log("🚀 ~ generateProof ~ QRData:", QRData)
    console.log("🚀 ~ generateProof ~ reqID:", requestId)
    return { QRData, requestId }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const verifyProof = async (requestId: string) => {
  const uri = `${POLYGON_ID_URL}/status`;
  try {
    const proofStatus = await axios.get(uri, {params: {id: requestId}})
    console.log("🚀 ~ verifyProof ~ proofStatus:", proofStatus.status)
    return proofStatus
  } catch (error) {
    console.error(error)
    throw error
  }
}
