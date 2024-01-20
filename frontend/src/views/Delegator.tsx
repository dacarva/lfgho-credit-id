import { FunctionComponent } from "react";
import CreditApplicationCard from "../components/CreditApplicationCard";
import CardsContainer from "../components/CardsContainer";

const DelegatorView: FunctionComponent = () => {
  return (
    <div className="w-full relative  overflow-hidden flex flex-col items-center justify-start pt-[524px] px-0 pb-0 box-border gap-[178px] tracking-[normal] mq450:gap-[44px] mq725:gap-[89px]">
      <div className="w-[1264px] overflow-x-auto flex flex-row items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full z-[1]">
        <CreditApplicationCard
          vuesaxlinearwallet="/vuesaxlinearwallet1.svg"
          vuesaxlineartickCircle="/vuesaxlineartickcircle1.svg"
          vuesaxlineartrendUp="/vuesaxlineartrendup1.svg"
          vuesaxlineartrendUpIconBackgroundColor="#d0e8da"
        />
        <CreditApplicationCard
          vuesaxlinearwallet="/vuesaxlinearwallet1.svg"
          vuesaxlineartickCircle="/vuesaxlineartickcircle1.svg"
          vuesaxlineartrendUp="/vuesaxlineartrenddown.svg"
          vuesaxlineartrendUpIconBackgroundColor="#ffefec"
        />
        <CreditApplicationCard
          vuesaxlinearwallet="/vuesaxlinearwallet1.svg"
          vuesaxlineartickCircle="/vuesaxlineartickcircle1.svg"
          vuesaxlineartrendUp="/vuesaxlinearchart.svg"
          vuesaxlineartrendUpIconBackgroundColor="#fff7e9"
        />
        <CreditApplicationCard
          vuesaxlinearwallet="/vuesaxlinearwallet1.svg"
          vuesaxlineartickCircle="/vuesaxlineartickcircle1.svg"
          vuesaxlineartrendUp="/vuesaxlineartrendup1.svg"
          vuesaxlineartrendUpIconBackgroundColor="#d0e8da"
        />
      </div>
      <section className="w-full my-0 mx-[!important] absolute top-[-80px] right-[0px] left-[0px] flex flex-col items-center justify-start pt-20 px-0 pb-[355px] box-border gap-[64px] max-w-full text-left text-29xl text-shades-white font-heading-05 mq450:gap-[16px] mq725:gap-[32px]">
        <div className="w-[1261px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[72px] max-w-full mq450:gap-[18px] mq725:gap-[36px]">
          <CardsContainer />
          <h1 className="m-0 relative text-inherit leading-[50px] text-[48px] font-medium font-inherit inline-block max-w-full z-[1] mq450:text-[29px] mq450:leading-[30px] mq975:text-19xl mq975:leading-[40px]">
            Credit applications
          </h1>
        </div>
      </section>
      <section className="self-stretch bg-neutral-800 flex flex-col items-center justify-start py-12 pr-[21px] pl-5 relative gap-[16px] text-left text-xl text-neutral-300 font-body-2">
        <div className="relative tracking-[0.15px] leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
          Logotype
        </div>
        <div className="relative text-base tracking-[0.25px] leading-[24px]">
          ETHGlobal 2024
        </div>
        <img
          className="w-[284.4px] absolute my-0 mx-[!important] top-[-107.1px] right-[64.6px] h-[202.1px] z-[1]"
          loading="eager"
          alt=""
          src="/masterdoodlesreading.svg"
        />
      </section>
    </div>
  );
};

export default DelegatorView;
