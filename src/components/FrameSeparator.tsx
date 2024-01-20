import { FunctionComponent } from "react";

type BenefitsContainerType = {
  openDoodlesReading?: string;
  delegator?: string;
};

const BenefitsContainer: FunctionComponent<BenefitsContainerType> = ({
  openDoodlesReading,
  delegator,
}) => {
  return (
    <div className="flex-1 rounded-2xl bg-neutral-200 flex flex-col items-center justify-start py-10 px-6 box-border gap-[32px] min-w-[322px] max-w-full text-center text-21xl text-primary font-heading-05 mq450:pb-5 mq450:box-border mq700:gap-[16px] mq900:pt-[279px] mq900:pb-[26px] mq900:box-border">
      <img
        className="self-stretch h-[250px] max-w-full overflow-hidden shrink-0 object-contain"
        loading="eager"
        alt=""
        src={openDoodlesReading}
      />
      <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[0.25px] leading-[40px] font-medium font-inherit mq450:text-5xl mq450:leading-[24px] mq900:text-13xl mq900:leading-[32px]">
          {delegator}
        </h1>
        <div className="self-stretch relative text-lg tracking-[0.5px] leading-[26px] font-body-2 text-neutral-800 text-left">
          <ul className="m-0 font-inherit text-inherit pl-6">
            <li className="mb-0">
              Gain unparalleled insights into the creditworthiness of wallet
              owners before making lending decisions.
            </li>
            <li className="mb-0">
              Our meticulous examination of credit bureaus and financial
              sources, coupled with Polygon ID, enables us to provide you with
              verified credit scores.
            </li>
            <li>
              Delegating Credits with Purpose: We scrutinize the ID linked to
              wallets with commendable student records, small and medium-sized
              companies, entrepreneurial women, and beyond.
            </li>
          </ul>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-0 px-6 bg-primary w-[199px] rounded-31xl flex flex-row items-center justify-center box-border">
        <div className="flex flex-row items-center justify-start py-4 px-5 gap-[8px]">
          <div className="w-4 relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden">
            edit
          </div>
          <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium font-body-2 text-shades-white text-center mq450:text-base mq450:leading-[22px]">
            Delegate
          </div>
          <div className="w-3 relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden items-center justify-center shrink-0">
            cancel
          </div>
        </div>
      </button>
    </div>
  );
};

export default BenefitsContainer;
