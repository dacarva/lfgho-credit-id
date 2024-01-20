import { FunctionComponent } from "react";

const ContainerHome: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start pt-20 px-0 pb-[315px] box-border gap-[56px] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-21xl text-shades-white font-heading-05 mq450:pt-[34px] mq450:pb-[133px] mq450:box-border mq700:gap-[28px] mq900:pt-[52px] mq900:pb-[205px] mq900:box-border">
      <div className="w-[1054px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[56px] max-w-full z-[1] mq700:gap-[28px]">
        <h1 className="m-0 relative text-inherit tracking-[0.25px] leading-[40px] font-medium font-inherit mq450:text-5xl mq450:leading-[24px] mq900:text-13xl mq900:leading-[32px]">
          Ghost ID
        </h1>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] max-w-full text-center text-45xl text-neutral-200">
          <div className="self-stretch flex flex-row items-center justify-center max-w-full">
            <h1 className="m-0 h-[136px] flex-1 relative text-inherit tracking-[0.5px] leading-[68px] font-normal font-inherit inline-block max-w-full mq450:text-19xl mq450:leading-[41px] mq900:text-32xl mq900:leading-[54px]">
              Revolutionizing Credit Delegation with Verified Scores
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center max-w-full text-13xl">
            <h2 className="m-0 flex-1 relative text-inherit leading-[32px] font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[19px] mq900:text-7xl mq900:leading-[26px]">
              Our innovative approach using Polygon ID creates a unique identity
              linked to a wallet adress, allowing us to share verified credit
              scores with potential delegators.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerHome;
