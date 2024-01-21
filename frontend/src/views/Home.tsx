import { FunctionComponent } from "react";
import ContainerHome from "../components/ContainerHome";
import BenefitsContainer from "../components/BenefitsContainer";
import HowItWorksContainer from "../components/HowItWorksContainer";

const Home: FunctionComponent = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-center justify-start gap-[87px] tracking-[normal] mq450:gap-[22px] mq700:gap-[43px]">
      <section className="self-stretch flex flex-col items-center justify-start max-w-full shrink-0">
        <ContainerHome />
        <div className="w-[1054px] flex flex-row flex-wrap items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full z-[1] mt-[-259px]">
          <BenefitsContainer openDoodlesReading="/reading-2.png" delegator />
          <BenefitsContainer openDoodlesReading="/open-doodles-reading-1@2x.png" />
        </div>
      </section>
      <HowItWorksContainer />
    </div>
  );
};

export default Home;
