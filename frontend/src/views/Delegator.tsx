import { FunctionComponent, useEffect, useContext, useState } from "react";
import CreditApplicationCard from "../components/CreditApplicationCard";
import CardsContainer from "../components/CardsContainer";
import { userDelegations, Delegation } from "@/services/delegations";
import { SmartWalletContext } from "@/context/smart-wallet";
import { Address } from "viem";

const DelegatorView: FunctionComponent = () => {
  const [creditApplications, setCreditApplications] = useState(
    [] as Delegation[]
  );
  const { smartAccountAddress } = useContext(SmartWalletContext);

  useEffect(() => {
    const fetchData = async () => {
      const delegations = await userDelegations(smartAccountAddress as Address);
      if (delegations) {
        setCreditApplications(delegations);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 30000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [smartAccountAddress]);

  return (
    <div className="w-full relative  overflow-hidden flex flex-col items-center justify-start pt-[524px] px-0 pb-0 box-border gap-[178px] tracking-[normal] mq450:gap-[44px] mq725:gap-[89px]">
      <div className="w-[1264px] overflow-x-auto flex flex-row items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full z-[1]">
        {creditApplications.map((application, index) => (
          <CreditApplicationCard
            key={index}
            address={application.address}
            creditAmount={application.creditAmount}
            creditScore={application.creditScore}
            idVerified={application.idVerified}
          />
        ))}
      </div>
      <section className="w-full my-0 mx-[!important] absolute top-[-80px] right-[0px] left-[0px] flex flex-col items-center justify-start pt-20 px-0 pb-[355px] box-border gap-[64px] max-w-full text-left text-29xl text-shades-white font-heading-05 mq450:gap-[16px] mq725:gap-[32px]">
        <div className="w-[1261px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[72px] max-w-full mq450:gap-[18px] mq725:gap-[36px]">
          <CardsContainer />
          <h1 className="m-0 relative text-inherit leading-[50px] text-[47px] font-medium font-inherit inline-block max-w-full z-[1] mq450:text-[29px] mq450:leading-[30px] mq975:text-19xl mq975:leading-[40px]">
            Credit applications
          </h1>
        </div>
      </section>
    </div>
  );
};

export default DelegatorView;
