import DelegatorFrame from "@/components/CreditApplicationCard";

const GivenCreditsContainer = () => {
  return (
    <div className="w-[1264px] overflow-x-auto flex flex-row items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full z-[1]">
      <DelegatorFrame
        vuesaxlinearwallet="/vuesaxlinearwallet.svg"
        vuesaxlineartickCircle="/vuesaxlineartickcircle.svg"
        vuesaxlineartrendUp="/vuesaxlineartrendup.svg"
        vuesaxlineartrendUpIconBackgroundColor="#d0e8da"
      />
      <DelegatorFrame
        vuesaxlinearwallet="/vuesaxlinearwallet.svg"
        vuesaxlineartickCircle="/vuesaxlineartickcircle.svg"
        vuesaxlineartrendUp="/vuesaxlineartrenddown.svg"
        vuesaxlineartrendUpIconBackgroundColor="#ffefec"
      />
      <DelegatorFrame
        vuesaxlinearwallet="/vuesaxlinearwallet.svg"
        vuesaxlineartickCircle="/vuesaxlineartickcircle.svg"
        vuesaxlineartrendUp="/vuesaxlinearchart.svg"
        vuesaxlineartrendUpIconBackgroundColor="#fff7e9"
      />
      <DelegatorFrame
        vuesaxlinearwallet="/vuesaxlinearwallet.svg"
        vuesaxlineartickCircle="/vuesaxlineartickcircle.svg"
        vuesaxlineartrendUp="/vuesaxlineartrendup.svg"
        vuesaxlineartrendUpIconBackgroundColor="#d0e8da"
      />
    </div>
  );
};

export default GivenCreditsContainer;
