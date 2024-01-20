import { FunctionComponent } from "react";

type HowitWorksCardType = {
  vuesaxlineartickCircle?: string;
  gHOIDCheckTheInformationR?: string;
};

const HowItWorksCard: FunctionComponent<HowitWorksCardType> = ({
  vuesaxlineartickCircle,
  gHOIDCheckTheInformationR,
}) => {
  return (
    <div className="rounded-2xl bg-neutral-800 flex flex-col items-start justify-start p-6 gap-[24px] text-left text-lg text-neutral-200 font-body-2">
      <img
        className="w-12 h-12 relative"
        loading="eager"
        alt=""
        src={vuesaxlineartickCircle}
      />
      <div className="flex flex-row items-center justify-start">
        <div className="h-[104px] relative tracking-[0.5px] leading-[26px] inline-block">
          {gHOIDCheckTheInformationR}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
