import { FunctionComponent } from "react";

type UserCardType = {
  title?: string;
};

const UserCard: FunctionComponent<UserCardType> = ({ title }) => {
  return (
    <div className="flex-[0.895] rounded-2xl bg-neutral-800 flex flex-col items-start justify-start py-6 pr-[60px] pl-6 box-border gap-[24px] min-w-[293px] min-h-[182px] max-w-full text-left text-13xl text-primary-2 font-heading-03 mq450:pr-5 mq450:box-border mq450:flex-1 mq1025:min-h-[auto]">
      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-row items-start justify-center gap-[16px]">
          <img
            className="relative w-8 h-8 overflow-hidden shrink-0 min-h-[32px]"
            loading="eager"
            alt=""
            src="/iconwallet.svg"
          />
          <h1 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit mq450:text-lgi mq450:leading-[19px] mq975:text-7xl mq975:leading-[26px]">
            {title}
          </h1>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-lg text-neutral-200 font-body-2 mq450:flex-wrap">
        <div className="relative tracking-[0.5px] leading-[26px]">
          <p className="m-0">{` $0,00 ETH `}</p>
          <p className="m-0">Red Sepolia</p>
        </div>
        <button className="cursor-pointer py-0 px-[22px] bg-[transparent] rounded-31xl box-border w-[123px] flex flex-row items-center justify-center border-[2px] border-solid border-primary">
          <div className="flex flex-row items-center justify-start py-4 px-0 gap-[8px]">
            <div className="relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden">
              edit
            </div>
            <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium font-body-2 text-shades-white text-center mq450:text-base mq450:leading-[22px]">
              Deposit
            </div>
            <div className="relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden items-center justify-center w-3 shrink-0">
              cancel
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
