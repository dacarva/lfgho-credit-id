import { FunctionComponent } from "react";
import HowitWorksCard from "./HowitWorksCard";

const HowItWorksContainer: FunctionComponent = () => {
  return (
    <section className="flex flex-col items-center justify-start py-0 px-5 box-border gap-[56px] max-w-full shrink-0 text-center text-37xl text-mediumpurple font-heading-05 mq700:gap-[28px]">
      <div className="w-[600px] flex flex-row items-start justify-start max-w-full">
        <h1 className="m-0 w-[551px] relative text-inherit tracking-[0.5px] leading-[64px] font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-15xl mq450:leading-[38px] mq900:text-26xl mq900:leading-[51px]">
          ¿How does it works?
        </h1>
      </div>
      <div className="w-[1224px] overflow-x-auto flex flex-row items-start justify-start gap-[24px] max-w-full text-left text-lg text-neutral-200 font-body-2">
        <div className="rounded-2xl bg-neutral-800 flex flex-col items-start justify-start p-6 gap-[24px]">
          <img
            className="w-12 h-12 relative"
            loading="eager"
            alt=""
            src="/iconnote.svg"
          />
          <div className="flex flex-row items-center justify-start">
            <div className="h-[104px] relative tracking-[0.5px] leading-[26px] inline-block">
              <p className="m-0">
                The beneficiary completes the loan application form.
              </p>
              <p className="m-0">&nbsp;</p>
            </div>
          </div>
        </div>
        <HowitWorksCard
          vuesaxlineartickCircle="/vuesaxlineartickcircle.svg"
          gHOIDCheckTheInformationR="GHO ID check the information related with the beneficiary ID in credit bureaus."
        />
        <HowitWorksCard
          vuesaxlineartickCircle="/vuesaxlinearwallet.svg"
          gHOIDCheckTheInformationR="GHO ID associate the credit score information with the beneficiary wallet adress."
        />
        <div className="rounded-2xl bg-neutral-800 flex flex-col items-start justify-start p-6 gap-[24px]">
          <img
            className="w-12 h-12 relative"
            loading="eager"
            alt=""
            src="/vuesaxlineartrendup.svg"
          />
          <div className="flex flex-row items-center justify-start">
            <div className="h-[104px] relative tracking-[0.5px] leading-[26px] inline-block">
              <p className="m-0">
                GHO ID shares the credit score and the wallet address to the
                delegator.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="m-0 w-[598px] relative text-13xl leading-[32px] font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[19px] mq900:text-7xl mq900:leading-[26px]">
        GHO ID shares the credit score and the wallet address to the delegator
      </h2>
    </section>
  );
};

export default HowItWorksContainer;
