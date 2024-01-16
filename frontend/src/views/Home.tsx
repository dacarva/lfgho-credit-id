import { FunctionComponent } from "react";
import FrameSeparator from "../components/FrameSeparator";

const DskGhostID01Home: FunctionComponent = () => {
  return (
    <div className="relative bg-secondary w-full overflow-hidden flex flex-col items-start justify-start gap-[148px] tracking-[normal] mq450:gap-[37px] mq725:gap-[74px]">
      <img
        className="relative w-[2235px] h-[4237.2px] object-cover hidden max-w-full"
        alt=""
        src="/dark-cone.png"
      />
      <img
        className="relative w-[4437.7px] h-[8413.1px] object-contain hidden max-w-full"
        alt=""
        src="/grey-roll.png"
      />
      <main className="self-stretch flex flex-col items-center justify-start max-w-full shrink-0">
        <header className="self-stretch flex flex-col items-center justify-start pt-[120px] px-5 pb-[518px] box-border gap-[97px] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-21xl text-shades-white font-heading-04 mq450:pt-[51px] mq450:pb-[219px] mq450:box-border mq725:gap-[24px] mq1000:pt-[78px] mq1000:pb-[337px] mq1000:box-border mq1050:gap-[48px]">
          <img
            className="relative w-[1366px] h-[911px] object-cover hidden mix-blend-normal max-w-full"
            alt=""
            src="/blur.png"
          />
          <h1 className="m-0 relative text-inherit tracking-[0.25px] leading-[40px] font-medium font-inherit z-[1]">
            Logotype
          </h1>
          <h1 className="m-0 relative text-45xl tracking-[0.5px] leading-[68px] font-normal font-inherit text-neutral-200 text-center inline-block w-[1014px] max-w-full z-[1]">{`Lorem ipsum dolor sit amet consectetur. At pharetra sapien `}</h1>
        </header>
        <section className="w-[1054px] flex flex-row items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full mt-[-377px] mq1000:flex-wrap">
          <FrameSeparator
            openDoodlesReading="/reading-2.png"
            delegator="Delegator"
          />
          <FrameSeparator
            openDoodlesReading="/reading-1.png"
            delegator="Beneficiary"
          />
        </section>
      </main>
      <footer className="self-stretch bg-neutral-800 flex flex-col items-center justify-start py-14 pr-[21px] pl-5 gap-[16px] text-left text-xl text-shades-white font-body-2">
        <div className="relative tracking-[0.15px] leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
          Logotype
        </div>
        <div className="relative text-base tracking-[0.25px] leading-[24px]">
          ETHGlobal 2024
        </div>
      </footer>
    </div>
  );
};

export default DskGhostID01Home;
