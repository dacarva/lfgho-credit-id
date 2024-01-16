import { FunctionComponent } from "react";

type FrameSeparatorType = {
  openDoodlesReading?: string;
  delegator?: string;
};

const FrameSeparator: FunctionComponent<FrameSeparatorType> = ({
  openDoodlesReading,
  delegator,
}) => {
  return (
    <div className="flex-1 rounded-2xl bg-neutral-200 flex flex-col items-center justify-start py-10 px-6 box-border gap-[32px] max-w-full z-[1] text-center text-21xl text-primary font-heading-04 mq725:gap-[16px] mq725:pt-[397px] mq725:pb-[26px] mq725:box-border">
      <img
        className="self-stretch max-w-full overflow-hidden h-[250px] shrink-0 object-contain"
        loading="eager"
        alt=""
        src={openDoodlesReading}
      />
      <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[0.25px] leading-[40px] font-medium font-inherit mq450:text-5xl mq450:leading-[24px] mq1000:text-13xl mq1000:leading-[32px]">
          {delegator}
        </h1>
        <div className="self-stretch relative text-lg tracking-[0.5px] leading-[26px] font-body-2 text-neutral-800 text-left">
          <ul className="m-0 font-inherit text-inherit pl-6">
            <li className="mb-0">{`Lorem ipsum dolor sit amet consectetur. `}</li>
            <li className="mb-0">
              Turpis arcu fermentum urna adipiscing porttitor.
            </li>
            <li className="mb-0">
              Curabitur quam id cursus lacus risus feugiat.
            </li>
            <li className="mb-0">Faucibus tortor venenatis arcu.</li>
            <li>Aliquam mi ac interdum risus in sit.</li>
          </ul>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-0 px-6 bg-primary rounded-31xl w-[199px] flex flex-row items-center justify-center box-border">
        <div className="flex flex-row items-center justify-start py-4 px-0 gap-[8px]">
          <div className="relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden">
            edit
          </div>
          <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium font-body-2 text-shades-white text-center mq450:text-base mq450:leading-[22px]">
            Button
          </div>
          <div className="relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden items-center justify-center w-3 shrink-0">
            cancel
          </div>
        </div>
      </button>
    </div>
  );
};

export default FrameSeparator;
