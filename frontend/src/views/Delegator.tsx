import { FunctionComponent } from "react";
import NavBar from "@/components/NavBar";
import CardsContainer from "@/components/CardsContainer";
import GivenCreditsContainer from "@/components/GivenCreditsContainer";
import Footer from "@/components/Footer";

const Delegator: FunctionComponent = () => {
  return (
    <div className="relative bg-secondary w-full overflow-hidden flex flex-col items-center justify-start pt-[524px] px-0 pb-0 box-border gap-[178px] tracking-[normal] mq450:gap-[44px] mq725:gap-[89px]">
      <GivenCreditsContainer />
      <section className="my-0 mx-[!important] absolute w-full top-[-80px] right-[0px] left-[0px] flex flex-col items-center justify-start pt-20 px-0 pb-[355px] box-border gap-[64px] max-w-full text-left text-29xl text-shades-white font-heading-03 mq450:gap-[16px] mq725:gap-[32px]">
        <img
          className="absolute my-0 mx-[!important] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover opacity-[0.5] mix-blend-normal"
          alt=""
          src="/blur.png"
        />
        <NavBar />
        <div className="w-[1261px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[72px] max-w-full mq450:gap-[18px] mq725:gap-[36px]">
          <CardsContainer />
          <h1 className="m-0 relative text-inherit leading-[50px] font-medium font-inherit inline-block max-w-full z-[1] mq450:text-[29px] mq450:leading-[30px] mq975:text-[38px] mq975:leading-[40px]">
            Credit applications
          </h1>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Delegator;
