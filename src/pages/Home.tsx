import { FunctionComponent } from "react";
import ConnectWalletButton from "../components/ConnectWalletButton";
import BenefitsContainer from "../components/FrameSeparator";
import HowItWorksContainer from "../components/HowItWorksContainer";

const DskGhostID01Home1: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-secondary overflow-hidden flex flex-col items-center justify-start gap-[87px] tracking-[normal] mq450:gap-[22px] mq700:gap-[43px]">
      <section className="self-stretch flex flex-col items-center justify-start max-w-full shrink-0 text-left text-21xl text-shades-white font-heading-05">
        <div className="self-stretch flex flex-col items-center justify-start pt-20 px-0 pb-[315px] box-border gap-[56px] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-[34px] mq450:pb-[133px] mq450:box-border mq700:gap-[28px] mq900:pt-[52px] mq900:pb-[205px] mq900:box-border">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden mix-blend-normal"
            alt=""
            src="/blur.png"
          />
          <header className="self-stretch flex flex-row items-center justify-end py-6 px-[72px] box-border gap-[64px] top-[0] z-[99] sticky max-w-full mq450:gap-[16px] mq900:gap-[32px] mq900:pl-9 mq900:pr-9 mq900:box-border">
            <nav className="m-0 flex flex-row items-center justify-end gap-[32px] max-w-full text-left text-xl text-shades-white font-body-2 mq450:gap-[16px] mq700:hidden">
              <div className="relative tracking-[0.15px] leading-[28px] font-medium">
                Home
              </div>
              <div className="relative tracking-[0.15px] leading-[28px] font-medium whitespace-nowrap">
                Polygon verifier
              </div>
              <div className="relative tracking-[0.15px] leading-[28px] font-medium whitespace-nowrap">
                Token sender
              </div>
            </nav>
            <ConnectWalletButton
              buttonText="Connect wallet"
              propWidth="287px"
            />
          </header>
          <div className="w-[1054px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[56px] max-w-full z-[1] mq700:gap-[28px]">
            <h1 className="m-0 relative text-inherit tracking-[0.25px] leading-[40px] font-medium font-inherit mq450:text-5xl mq450:leading-[24px] mq900:text-13xl mq900:leading-[32px]">
              Logotype
            </h1>
            <div className="self-stretch flex flex-col items-center justify-start gap-[24px] max-w-full text-center text-45xl text-neutral-200">
              <div className="self-stretch flex flex-row items-center justify-center max-w-full">
                <h1 className="m-0 h-[136px] flex-1 relative text-inherit tracking-[0.5px] leading-[68px] font-normal font-inherit inline-block max-w-full mq450:text-19xl mq450:leading-[41px] mq900:text-[51px] mq900:leading-[54px]">
                  Revolutionizing Credit Delegation with Verified Scores
                </h1>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center max-w-full text-13xl">
                <h2 className="m-0 flex-1 relative text-inherit leading-[32px] font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[19px] mq900:text-7xl mq900:leading-[26px]">
                  Our innovative approach using Polygon ID creates a unique
                  identity linked to a wallet adress, allowing us to share
                  verified credit scores with potential delegators.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1054px] flex flex-row flex-wrap items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full z-[1] mt-[-259px]">
          <BenefitsContainer
            openDoodlesReading="/reading-2.png"
            delegator="Delegator"
          />
          <BenefitsContainer
            openDoodlesReading="/open-doodles-reading-1@2x.png"
            delegator="Beneficiary"
          />
        </div>
      </section>
      <HowItWorksContainer />
      <section className="self-stretch bg-neutral-800 flex flex-col items-center justify-start py-12 pr-[21px] pl-5 gap-[16px] text-left text-xl text-neutral-300 font-body-2">
        <div className="relative tracking-[0.15px] leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
          Logotype
        </div>
        <div className="relative text-base tracking-[0.25px] leading-[24px]">
          ETHGlobal 2024
        </div>
      </section>
    </div>
  );
};

export default DskGhostID01Home1;
