import { beforeEach, describe, it, expect, vi, Mock } from "vitest";
import { getTokenBalance } from "@/services";
import { readContract } from "@wagmi/core";
import { erc20ABI } from "wagmi";

// Mock the readContract function
vi.mock("@wagmi/core", () => ({
  readContract: vi.fn(),
}));

describe("getTokenBalance", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockedReadContract = readContract as unknown as Mock<
    [(arg: object) => Promise<bigint>]
  >;

  const dummyTokenAddress = "0x7DD307D6Ed4FfFDB471745652Da301f825E674ba";
  const dummyUserAddress = "0x8DD307D6Ed4FfFDB471745652Da301f825E674ba";

  it("should successfully get token balance", async () => {
    mockedReadContract.mockResolvedValue(1000n);

    const balance = await getTokenBalance(dummyTokenAddress, dummyUserAddress);

    expect(readContract).toHaveBeenCalledWith({
      address: dummyTokenAddress,
      abi: erc20ABI,
      functionName: "balanceOf",
      args: [dummyUserAddress],
    });
    expect(balance).toBe(1000n);
  });

  it("should throw an error for invalid input parameters", async () => {
    await expect(getTokenBalance("0x", dummyUserAddress)).rejects.toThrow(
      "Input parameters not correct"
    );
    await expect(getTokenBalance(dummyTokenAddress, "0x")).rejects.toThrow(
      "Input parameters not correct"
    );
  });

  it("should handle errors from readContract", async () => {
    mockedReadContract.mockRejectedValue(new Error("Contract read error"));

    await expect(
      getTokenBalance(dummyTokenAddress, dummyUserAddress)
    ).rejects.toThrow("Contract read error");
  });
});
