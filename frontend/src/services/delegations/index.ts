import { Address } from "viem";

export type Delegation = {
  address: Address;
  creditAmount: number;
  idVerified: boolean;
  creditScore: number;
};

export type ContractSignature = {
  contractId: string;
  delegatorAddress: Address;
  beneficiaryAddress: Address;
  creditAmount: number;
  status: "pending" | "signed" | "rejected";
  timestamp: number;
};

const mockDelegations: Delegation[] = [
  {
    address: "0x0EB097a04512D4F4bD9CfA18D9F03B27173D0615",
    creditAmount: 1000,
    idVerified: true,
    creditScore: 50,
  },
  {
    address: "0x0EB097a04512D4F4bD9CfA18D9F03B27173D0615",
    creditAmount: 300,
    idVerified: true,
    creditScore: 80,
  },
  {
    address: "0x0EB097a04512D4F4bD9CfA18D9F03B27173D0615",
    creditAmount: 15,
    idVerified: false,
    creditScore: 70,
  },
  {
    address: "0x8C87EcfE30Ae6bbC3Ea29De0A807B682d2778993",
    creditAmount: 1500,
    idVerified: false,
    creditScore: 40,
  },
];

const mockContratSignatures: ContractSignature[] = [
  {
    contractId: "0x0EB097a04512D4F4bD9CfA18D9F03B27173D0615",
    delegatorAddress: "0xAa1933907E260AF2fAA23B2Bf65eE29C909045e3",
    beneficiaryAddress: "0x0EB097a04512D4F4bD9CfA18D9F03B27173D0615",
    creditAmount: 15,
    status: "signed",
    timestamp: Date.now(),
  },
  {
    contractId: "0x0EB097a04512D4F4bD9CfA18D9F03B27173D0615",
    delegatorAddress: "0xAa1933907E260AF2fAA23B2Bf65eE29C909045e3",
    beneficiaryAddress: "0x0EB097a04512D4F4bD9CfA18D9F03B27173D0615",
    creditAmount: 10,
    status: "signed",
    timestamp: Date.now(),
  },
  {
    contractId: "0x0EB097a04512D4F4bD9CfA18D9F03B27173D0615",
    delegatorAddress: "0xAa1933907E260AF2fAA23B2Bf65eE29C909045e3",
    beneficiaryAddress: "0x0EB097a04512D4F4bD9CfA18D9F03B27173D0615",
    creditAmount: 1,
    status: "signed",
    timestamp: Date.now(),
  },
];

// const API_URL =
//   "https://lfgho-credit-id-backend-e32a8ac3c22a.herokuapp.com/api/get_borrow_requests";

export const userDelegations = async (
  userAddress: Address
): Promise<Delegation[] | undefined> => {
  try {
    console.log("userAddress", userAddress);
    // const delegations = await axios.get(API_URL);
    // console.log("🚀 ~ delegations:", delegations);
    return mockDelegations;
  } catch (error) {
    console.error(error);
    throw new Error("Error occurred during fetching delegations");
  }
};

export const signContract = async (
  delegatorAddress: Address,
  beneficiaryAddress: Address,
  creditAmount: number
): Promise<ContractSignature> => {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          contractId: "0x0EB097a04512D4F4bD9CfA18D9F03B27173D0615",
          delegatorAddress,
          beneficiaryAddress,
          creditAmount,
          status: "signed",
          timestamp: Date.now(),
        });
      }, 2000);
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error occurred during signing contract");
  }
};

export const contractSignatures = async (
  beneficiaryAddress: Address
): Promise<ContractSignature[]> => {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredSignatures = mockContratSignatures.filter(
          (signature) =>
            signature.beneficiaryAddress.toLowerCase() ===
            beneficiaryAddress.toLowerCase()
        );
        resolve(filteredSignatures);
      }, 2000);
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error occurred during fetching contract signatures");
  }
};
