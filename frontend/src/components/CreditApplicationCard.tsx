import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

import { Delegation } from "@/services/delegations";
import { Address } from "viem";
import { MIN_CREDIT_SCORE } from "@/constants";

const formatAddress = (address: Address) => {
  if (!address) return "0x smart";
  const start = address.substring(0, 6);
  const end = address.substring(address.length - 4);
  return `${start}...${end}`;
};

const CreditApplicationCard: FunctionComponent<Delegation> = ({
  address,
  creditAmount,
  creditScore,
  idVerified,
}) => {
  const navigate = useNavigate();

  const frameGroupStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: creditScore < MIN_CREDIT_SCORE ? "#FFEFEC" : "#d0e8da",
    };
  }, [creditScore]);

  const handleContractSign = async () => {
    navigate("/contract-sign", {
      state: {
        address,
        creditAmount,
      },
    });
  };

  return (
    <div className="w-72 rounded-2xl bg-secondary shrink-0 flex flex-col items-center justify-start py-8 px-[31px] box-border gap-[32px] text-left text-base text-neutral-400 font-body-2 mq450:pt-[21px] mq450:pb-[21px] mq450:box-border">
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="eager"
              alt=""
              src="/vuesaxlinearwallet1.svg"
            />
            <div className="relative tracking-[0.25px] leading-[24px]">
              Wallet
            </div>
          </div>
          <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium text-neutral-200 mq450:text-base mq450:leading-[22px]">
            {formatAddress(address)}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="eager"
              alt=""
              src="/vuesaxlineartickcircle1.svg"
            />
            <div className="relative tracking-[0.25px] leading-[24px]">
              ID verified
            </div>
          </div>
          <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium text-shades-white mq450:text-base mq450:leading-[22px]">
            {idVerified ? "Checked" : "Not checked"}
          </div>
        </div>
        <div
          className="rounded-2xl bg-honeydew flex flex-row items-center justify-start py-2 pr-1 pl-2 gap-[16px] text-neutral-800"
          style={frameGroupStyle}
        >
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="eager"
              alt=""
              src="/vuesaxlineartrendup1.svg"
            />
            <div className="relative tracking-[0.25px] leading-[24px]">
              Credit Score
            </div>
          </div>
          <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium text-secondary mq450:text-base mq450:leading-[22px]">
            {creditScore}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px] text-neutral-300">
          <div className="relative tracking-[0.25px] leading-[24px]">
            Credit Amount
          </div>
          <div className="relative text-21xl tracking-[0.25px] leading-[40px] font-medium font-heading-05 text-neutral-200 mq450:text-5xl mq450:leading-[24px] mq975:text-13xl mq975:leading-[32px]">
            ${creditAmount} GHO
          </div>
        </div>
      </div>
      {creditScore >= MIN_CREDIT_SCORE && (
        <button
          onClick={handleContractSign}
          className="cursor-pointer [border:none] py-0 px-6 bg-primary rounded-31xl flex flex-row items-center justify-center"
        >
          <div className="flex flex-row items-center justify-start py-4 pr-[23px] pl-[22px] gap-[8px]">
            <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium font-body-2 text-shades-white text-center mq450:text-base mq450:leading-[22px]">
              Delegate
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default CreditApplicationCard;
