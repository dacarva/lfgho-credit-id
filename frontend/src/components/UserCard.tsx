import { FunctionComponent, useEffect, useContext, useState } from "react";
import { SmartWalletContext } from "@/context/smart-wallet";
import {
  fetchBalance,
  readContracts,
  getNetwork,
  fetchToken,
} from "@wagmi/core";
import { getEthPrice } from "@/services/crypto";
import { contracts } from "@/constants";
import { Address } from "viem";
import { erc20ABI } from "wagmi";
import { depositETH } from "@/services";
import toast from "react-hot-toast";

type CardInformation = "Balance" | "Supplies" | "Borrows";

type UserCardType = {
  title?: string;
  cardInformation?: CardInformation;
};

const UserCard: FunctionComponent<UserCardType> = ({
  title,
  cardInformation,
}) => {
  const { smartAccountAddress, smartAccount } = useContext(SmartWalletContext);
  const [ethBalance, setEthBalance] = useState("");
  const [ethPrice, setEthPrice] = useState(0);
  const [ethSupplies, setEthSupplies] = useState(0);
  const [GHODebt, setGHODebt] = useState(0);
  const [depositAmount, setDepositAmount] = useState("");

  useEffect(() => {
    if (!smartAccountAddress) return;

    const fetchData = async () => {
      try {
        const { formatted } = await fetchBalance({
          address: smartAccountAddress,
        });
        setEthBalance(formatted.substring(0, 5));
        const fetchedEthPrice = await getEthPrice();
        setEthPrice(fetchedEthPrice);
        const { chain } = getNetwork();

        const AWETH = contracts[chain?.id as keyof typeof contracts].AWETH;
        const AGHODebt =
          contracts[chain?.id as keyof typeof contracts].GHO_VARIABLE_DEBT;
        const { decimals: aWETHDecimals } = await fetchToken({
          address: AWETH as Address,
        });
        const { decimals: AGHODebtDecimals } = await fetchToken({
          address: AGHODebt as Address,
        });

        const aWETHContract = {
          address: AWETH as Address,
          abi: erc20ABI,
        };
        const aGHODebtContract = {
          address: AWETH as Address,
          abi: erc20ABI,
        };

        const tokensData = await readContracts({
          contracts: [
            {
              ...aWETHContract,
              functionName: "balanceOf",
              args: [smartAccountAddress],
            },
            {
              ...aGHODebtContract,
              functionName: "balanceOf",
              args: [smartAccountAddress],
            },
          ],
        });

        setEthSupplies(Number(tokensData[0].result) / 10 ** aWETHDecimals);
        setGHODebt(Number(tokensData[1].result) / 10 ** AGHODebtDecimals);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [smartAccountAddress]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepositAmount(e.target.value);
  };

  const handleDeposit = async () => {
    console.log("Depositing amount: ", depositAmount);
    if (!smartAccount) {
      toast.error("Smart account not found");
      throw new Error("Smart account not found");
    }
    const { chain } = getNetwork();

    try {
      const WETH_GATEWAY = contracts[chain?.id as keyof typeof contracts]
        .WETH_GATEWAY as Address;
      const LENDING_POOL = contracts[chain?.id as keyof typeof contracts]
        .LENDING_POOL as Address;

      await toast.promise(
        depositETH(smartAccount, WETH_GATEWAY, LENDING_POOL, depositAmount),
        {
          loading: "Depositing in lending pool",
          success: (data) => {
            // Format the success message using data (transactionDetails)
            const successMessage = `Deposit successfull! Transaction Hash: ${data}`;
            console.log(`Deposit successful! Transaction Hash: ${data}`);
            return successMessage;
          },
          error: "Failed to deposit",
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-[0.895] rounded-2xl bg-neutral-800 flex flex-col items-start justify-start py-6 pr-[60px] pl-6 box-border gap-[24px] min-w-[293px] min-h-[182px] max-w-full text-left text-13xl text-primary-2 font-heading-03 mq450:pr-5 mq450:box-border mq450:flex-1 mq1025:min-h-[auto]">
      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-row items-start justify-center gap-[16px]">
          <img
            className="relative w-8 h-8 overflow-hidden shrink-0 min-h-[32px]"
            loading="eager"
            alt=""
            src={
              cardInformation === "Balance"
                ? "/iconwallet.svg"
                : cardInformation === "Supplies"
                ? "/iconcoins.svg"
                : "/iconsend.svg"
            }
          />
          <h1 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit mq450:text-lgi mq450:leading-[19px] mq975:text-7xl mq975:leading-[26px]">
            {title}
          </h1>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-lg text-neutral-200 font-body-2 mq450:flex-wrap">
        {cardInformation === "Balance" && (
          <div className="relative tracking-[0.5px] leading-[26px]">
            <p className="m-0">{ethBalance} ETH</p>
            <p className="m-0">
              $ {(Number(ethBalance) * ethPrice).toFixed(2)}
            </p>
          </div>
        )}
        {cardInformation === "Supplies" && (
          <div className="relative tracking-[0.5px] leading-[26px]">
            <p className="m-0">{ethSupplies.toFixed(2)} ETH</p>
            <p className="m-0">$ {(ethSupplies * ethPrice).toFixed(2)}</p>
          </div>
        )}
        {cardInformation === "Borrows" && (
          <div className="relative tracking-[0.5px] leading-[26px]">
            <p className="m-0">{GHODebt.toFixed(2)} GHO</p>
            <p className="m-0">$ {GHODebt.toFixed(2)}</p>
          </div>
        )}
        {cardInformation === "Balance" && (
          <div className="flex flex-col items-center justify-start gap-[16px]">
            <input
              className="relative w-[80px] h-[28px] bg-transparent border-[2px] border-solid border-primary text-shades-white text-center"
              type="number"
              placeholder="Amount"
              id="depositAmount"
              value={depositAmount}
              onChange={handleAmountChange}
            />
            <button
              onClick={handleDeposit}
              className="cursor-pointer py-0 px-[22px] bg-[transparent] rounded-31xl box-border w-[123px] flex flex-row items-center justify-center border-[2px] border-solid border-primary"
            >
              <div className="flex flex-row items-center justify-start py-4 px-0 gap-[8px]">
                <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium font-body-2 text-shades-white text-center mq450:text-base mq450:leading-[22px]">
                  Deposit
                </div>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
