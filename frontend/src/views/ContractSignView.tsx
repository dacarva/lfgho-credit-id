import { FunctionComponent, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  signContract,
  ContractSignature,
  delegateCollateral,
} from "@/services";
import toast from "react-hot-toast";
import { SmartWalletContext } from "@/context/smart-wallet";
import { Address } from "viem";
import { getNetwork } from "@wagmi/core";
import { contracts } from "@/constants";

const ContractSignView: FunctionComponent = () => {
  const location = useLocation();
  const { smartAccountAddress, smartAccount } = useContext(SmartWalletContext);
  const [isContractSigned, setIsContractSigned] = useState(false);

  const params = location.state;

  const handleDelegateCollateral = async () => {
    console.log("handleDelegateCollateral");
    if (!smartAccount) {
      toast.error("Smart account not found");
      throw new Error("Smart account not found");
    }
    const { chain } = getNetwork();
    const GHO_VARIABLE_DEBT = contracts[chain?.id as keyof typeof contracts]
      .GHO_VARIABLE_DEBT as Address;
    const LENDING_POOL = contracts[chain?.id as keyof typeof contracts]
      .LENDING_POOL as Address;
    try {
      toast.promise(
        delegateCollateral(
          smartAccount,
          LENDING_POOL,
          GHO_VARIABLE_DEBT,
          params.address,
          params.creditAmount.toString()
        ),
        {
          loading: "Delegating collateral...",
          success: (data) => {
            // Format the success message using data (transactionDetails)
            const successMessage = `Collateral Delegated: ${data}`;
            console.log(`Collateral Delegated: ${data}`);
            return successMessage;
          },
          error: "Failed to delegate collateral",
        }
      );
    } catch (error) {
      console.error(error);
      throw new Error("Failed to delegate collateral");
    }
  };

  const handleContractSign = async () => {
    console.log("Received params", params);

    try {
      const contractSignature = await toast.promise(
        signContract(
          smartAccountAddress as Address,
          params.address as Address,
          params.creditAmount as number
        ),
        {
          loading: "Signing contract...",
          success: (data) => {
            // Format the success message using data (transactionDetails)
            const successMessage = `Contract signed: at timestamp ${
              (data as ContractSignature)?.timestamp || ""
            }`;
            console.log(`Contract signed:`, data);
            return successMessage;
          },
          error: "Failed to sign contract",
        }
      );
      console.log(
        "🚀 ~ handleContractSign ~ contractSignature:",
        contractSignature
      );
      await handleDelegateCollateral();
      setIsContractSigned(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-full relative  overflow-hidden flex flex-col items-start justify-start gap-[43px] tracking-[normal] mq725:gap-[21px]">
      <main className="self-stretch flex flex-col items-center justify-start max-w-full shrink-0 text-left text-xl text-neutral-400 font-body-2">
        <section className="self-stretch flex flex-col items-start justify-start pt-20 px-0 pb-[332px] box-border relative gap-[24px] max-w-full text-left text-xl text-shades-white font-body-2 mq975:pt-[52px] mq975:pb-[216px] mq975:box-border mq450:pt-[34px] mq450:pb-[140px] mq450:box-border">
          <div className="w-full flex flex-row items-start justify-start py-0 px-[72px] box-border max-w-full mq1025:pl-9 mq1025:pr-9 mq1025:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[13px] max-w-full">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="eager"
                  alt=""
                  src="/iconarrowright.svg"
                />
                <div className="relative tracking-[0.15px] leading-[28px] font-medium z-[1] mq450:text-base mq450:leading-[22px]">
                  Back
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center max-w-full text-center text-21xl text-mediumpurple font-heading-05">
                <div className="w-[551px] flex flex-col items-center justify-center gap-[16px] max-w-full">
                  <img
                    className="w-[233.6px] h-[182px] relative z-[1]"
                    loading="eager"
                    alt=""
                    src="/open-doodles-rolling.svg"
                  />
                  <h1 className="m-0 self-stretch relative text-inherit tracking-[0.25px] leading-[40px] font-medium font-inherit z-[1] mq975:text-13xl mq975:leading-[32px] mq450:text-5xl mq450:leading-[24px]">
                    Congratulations
                  </h1>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-5xl text-shades-white">
                    <div className="self-stretch relative tracking-[0.25px] leading-[32px] font-medium z-[1] mq450:text-lgi mq450:leading-[26px]">
                      your are close to delegate a credit to
                    </div>
                    <div className="relative tracking-[0.25px] leading-[32px] font-medium text-neutral-200 z-[1] mq450:text-lgi mq450:leading-[26px]">
                      {params.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[806px] rounded-2xl bg-secondary flex flex-col items-center justify-start py-10 px-5 box-border gap-[24px] max-w-full z-[1] mt-[-300px] mq725:pt-10 mq725:pb-[26px] mq725:box-border mq975:w-[calc(100%_-_40px)]">
          <div className="w-[598px] relative tracking-[0.15px] leading-[28px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
            Please read the read the contract and sign
          </div>
          <div className="w-[598px] h-[376px] relative tracking-[0.25px] text-shades-white inline-block text-base">
            <p className="m-0 leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              consequat augue erat, ac molestie felis semper eget. Suspendisse
              faucibus neque at justo blandit consectetur. Vestibulum ac cursus
              orci. Donec vehicula in libero nec euismod. Donec suscipit
              dignissim nisl, et consectetur lectus fermentum varius. Nullam
              orci quam, tristique at congue ut, pellentesque nec velit. Duis
              turpis odio, eleifend porttitor finibus nec, lobortis et nulla.
            </p>
            <p className="m-0 leading-[24px]">&nbsp;</p>
            <p className="m-0 text-5xl leading-[32px] font-medium font-heading-05">
              Lorem ipsum dolor sit amet
            </p>
            <p className="m-0 leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              consequat augue erat, ac molestie felis semper eget. Suspendisse
              faucibus neque at justo blandit consectetur. Vestibulum ac cursus
              orci. Donec vehicula in libero nec euismod. Donec suscipit
              dignissim nisl, et consectetur lectus fermentum varius. Nullam
              orci quam, tristique at congue ut, pellentesque nec velit. Duis
              turpis odio, eleifend porttitor finibus nec, lobortis et nulla.
            </p>
          </div>
          {!isContractSigned && (
            <button
              onClick={handleContractSign}
              className="cursor-pointer [border:none] py-0 px-6 bg-primary w-[287px] rounded-31xl flex flex-row items-center justify-center box-border"
            >
              <div className="flex flex-row items-center justify-start py-4 px-0 gap-[8px]">
                <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium font-body-2 text-shades-white text-center whitespace-nowrap">
                  Sign contract
                </div>
              </div>
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default ContractSignView;
