import { FunctionComponent } from "react";
import UserCard from "./UserCard";

const CardsContainer: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full z-[1] text-left text-13xl text-primary-2 font-heading-05 mq1025:flex-wrap">
      <UserCard title="Your balance" />
      <div className="flex-1 rounded-2xl bg-neutral-800 flex flex-col items-start justify-center p-6 box-border gap-[24px] min-w-[293px] max-w-full">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="h-8 w-8 relative min-h-[32px]"
            loading="eager"
            alt=""
            src="/iconcoins.svg"
          />
          <h1 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit mq450:text-lgi mq450:leading-[19px] mq975:text-7xl mq975:leading-[26px]">
            Your supplies
          </h1>
        </div>
        <div className="h-[78px] relative text-lg tracking-[0.5px] leading-[26px] font-body-2 text-neutral-200 whitespace-pre-wrap inline-block">
          <p className="m-0">APY: Colaterall</p>
          <p className="m-0">Asset Balance APY</p>
          <p className="m-0">ETH. 0,1. %</p>
        </div>
      </div>
      <div className="flex-1 rounded-2xl bg-neutral-800 flex flex-col items-start justify-start p-6 box-border gap-[24px] min-w-[293px] max-w-full">
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-row items-start justify-center gap-[16px]">
            <img
              className="h-8 w-8 relative min-h-[32px]"
              loading="eager"
              alt=""
              src="/iconsend.svg"
            />
            <h1 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit mq450:text-lgi mq450:leading-[19px] mq975:text-7xl mq975:leading-[26px]">
              Your borrows
            </h1>
          </div>
        </div>
        <div className="h-[78px] relative text-lg tracking-[0.5px] leading-[26px] font-body-2 text-neutral-200 whitespace-pre-wrap inline-block">
          <p className="m-0">Balance: APY</p>
          <p className="m-0">Asset Debt APY</p>
          <p className="m-0">GHO $XXX. %</p>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
