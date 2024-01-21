import { Address } from "viem";

export type Delegation = {
  address: Address;
  creditAmount: number;
  idVerified: boolean;
  creditScore: number;
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
    address: "0x47c801BFA88cEf12AC668d8C51456aD7dAfd9fF5",
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
