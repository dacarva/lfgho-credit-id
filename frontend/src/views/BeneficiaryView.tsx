import { FunctionComponent, useState, useEffect, useContext } from "react";
import CreditApplicationForm from "@/components/CreditApplicationForm";
import { SmartWalletContext } from "@/context/smart-wallet";
import { contractSignatures, ContractSignature } from "@/services";
import { contracts } from "@/constants";
import toast from "react-hot-toast";
import { borrow } from "@/services/lending-pool";
import { getNetwork } from "@wagmi/core";
import { Address } from "viem";

const BeneficiaryView: FunctionComponent = () => {
  const { smartAccountAddress, smartAccount } = useContext(SmartWalletContext);
  const [approvedLoan, setApprovedLoan] = useState(false);
  const [approvedLoanDetails, setApprovedLoanDetails] = useState(
    {} as ContractSignature
  );
  const [isBorrowExecuted, setBorrowExecuted] = useState(false);

  useEffect(() => {
    if (!smartAccountAddress) return;
    const fetchData = async () => {
      try {
        const contractSignaturesForUser = await contractSignatures(
          smartAccountAddress
        );
        if (contractSignaturesForUser && contractSignaturesForUser.length > 0) {
          setApprovedLoan(true);
          setApprovedLoanDetails(contractSignaturesForUser[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 30000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [smartAccountAddress]);

  const handleBorrow = async () => {
    console.log("Borrow GHO");

    if (!smartAccount) {
      toast.error("Smart account not found");
      throw new Error("Smart account not found");
    }
    const { chain } = getNetwork();

    try {
      await toast.promise(
        borrow(
          smartAccount,
          contracts[chain?.id as keyof typeof contracts]
            .LENDING_POOL as Address,
          contracts[chain?.id as keyof typeof contracts].GHO as Address,
          approvedLoanDetails.creditAmount.toString(),
          approvedLoanDetails.delegatorAddress as Address
        ),
        {
          loading: "Requesting loan",
          success: (data) => {
            // Format the success message using data (transactionDetails)
            const successMessage = `Loan successfull! Transaction Hash: ${data}`;
            console.log(`Loan successful! Transaction Hash: ${data}`);
            return successMessage;
          },
          error: "Failed to get loan",
        }
      );
      setBorrowExecuted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full relative  overflow-hidden flex flex-col items-start justify-start gap-[78px] tracking-[normal] mq450:gap-[19px] mq700:gap-[39px]">
      <main className="self-stretch flex flex-col items-center justify-start max-w-full shrink-0 text-left text-xl text-shades-white font-body-2">
        <section className="self-stretch flex flex-col items-center justify-start pt-20 px-0 pb-[405px] box-border relative gap-[65px] max-w-full text-center text-21xl text-mediumpurple font-heading-05 mq900:pt-[52px] mq900:pb-[263px] mq900:box-border mq450:gap-[16px] mq450:pt-[34px] mq450:pb-[171px] mq450:box-border mq700:gap-[32px]">
          <div className="w-[591px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[16px] max-w-full">
            <img
              className="w-[233.6px] h-[197.4px] relative z-[1]"
              loading="eager"
              alt=""
              src="/open-doodles-dancing.svg"
            />
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.25px] leading-[40px] font-medium font-inherit z-[1] mq900:text-13xl mq900:leading-[32px] mq450:text-5xl mq450:leading-[24px]">
              Student information
            </h1>
          </div>
        </section>
        {!approvedLoan && <CreditApplicationForm />}
        {approvedLoan && (
          <div className="w-[806px] rounded-2xl bg-secondary flex flex-col items-center justify-start p-10 box-border gap-[40px] max-w-full z-[1] mt-[-373px] mq900:pt-10 mq900:pb-[26px] mq900:box-border mq900:w-[calc(100%_-_40px)] mq700:gap-[20px]">
            <div className="element-container">
              <p>ContractID: {approvedLoanDetails.contractId}</p>
              <p>Delegator {approvedLoanDetails.delegatorAddress}</p>
              <p>Amount {approvedLoanDetails.creditAmount} GHO</p>
            </div>
            {!isBorrowExecuted && (
              <button
                onClick={handleBorrow}
                className="cursor-pointer [border:none] py-4 pr-[15px] pl-[22px] bg-primary rounded-31xl flex flex-row items-center justify-end gap-[16px]"
              >
                <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium font-body-2 text-shades-white text-center mq450:text-base mq450:leading-[22px]">
                  Request Loan
                </div>
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default BeneficiaryView;
