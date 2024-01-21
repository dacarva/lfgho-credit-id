import { FunctionComponent } from "react";
import HowItWorksCard from "./HowItWorksCard";

const HowItWorksContainer: FunctionComponent = () => {
  return (
    <section className="flex flex-col items-center justify-start py-0 px-5 box-border gap-[56px] max-w-full shrink-0 text-center text-37xl text-mediumpurple font-heading-05 mq700:gap-[28px]">
      <div className="w-[600px] flex flex-row items-start justify-start max-w-full">
        <h1 className="m-0 w-[551px] text-violet-400 text-[57px] relative text-inherit tracking-[0.5px] leading-[64px] font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-15xl mq450:leading-[38px] mq900:text-26xl mq900:leading-[51px]">
          ¿How does it work?
        </h1>
      </div>
      <div className="w-[1224px] overflow-x-auto flex flex-row items-start justify-start gap-[24px] max-w-full text-left text-lg text-neutral-200 font-body-2">
        <HowItWorksCard
          vuesaxlineartickCircle="/iconnote.svg"
          gHOIDCheckTheInformationR="The beneficiary completes the loan application form."
        />
        <HowItWorksCard
          vuesaxlineartickCircle="/vuesaxlineartickcircle.svg"
          gHOIDCheckTheInformationR="GHO ID check the information related with the beneficiary ID in credit bureaus."
        />
        <HowItWorksCard
          vuesaxlineartickCircle="/vuesaxlinearwallet.svg"
          gHOIDCheckTheInformationR="GHO ID associate the credit score information with the beneficiary wallet adress."
        />
        <HowItWorksCard
          vuesaxlineartickCircle="/vuesaxlineartrendup.svg"
          gHOIDCheckTheInformationR="GHO ID shares the credit score and the wallet address to the
                delegator."
        />
      </div>
      <h2 className=" text-white m-0 w-[598px] relative text-13xl leading-[32px] font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[19px] mq900:text-7xl mq900:leading-[26px]">
        GHO ID shares the credit score and the wallet address to the delegator
      </h2>
    </section>
  );
};

export default HowItWorksContainer;
