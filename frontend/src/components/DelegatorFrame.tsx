import { FunctionComponent, useMemo, type CSSProperties } from "react";

type DelegatorFrameType = {
  vuesaxlinearwallet?: string;
  vuesaxlineartickCircle?: string;
  vuesaxlineartrendUp?: string;

  /** Style props */
  vuesaxlineartrendUpIconBackgroundColor?: CSSProperties["backgroundColor"];
};

const DelegatorFrame: FunctionComponent<DelegatorFrameType> = ({
  vuesaxlinearwallet,
  vuesaxlineartickCircle,
  vuesaxlineartrendUp,
  vuesaxlineartrendUpIconBackgroundColor,
}) => {
  const creditAmountGroupStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: vuesaxlineartrendUpIconBackgroundColor,
    };
  }, [vuesaxlineartrendUpIconBackgroundColor]);

  return (
    <div className="rounded-2xl bg-secondary w-72 shrink-0 flex flex-col items-center justify-start py-8 px-[31px] box-border gap-[32px] text-left text-base text-neutral-400 font-body-2 mq450:pt-[21px] mq450:pb-[21px] mq450:box-border">
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="relative w-6 h-6 min-h-[24px]"
              loading="eager"
              alt=""
              src={vuesaxlinearwallet}
            />
            <div className="relative tracking-[0.25px] leading-[24px]">
              Wallet
            </div>
          </div>
          <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium text-neutral-200 mq450:text-base mq450:leading-[22px]">
            0xf58586845-....
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="relative w-6 h-6 min-h-[24px]"
              loading="eager"
              alt=""
              src={vuesaxlineartickCircle}
            />
            <div className="relative tracking-[0.25px] leading-[24px]">
              ID verified
            </div>
          </div>
          <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium text-shades-white mq450:text-base mq450:leading-[22px]">
            Checked
          </div>
        </div>
        <div
          className="rounded-2xl bg-honeydew flex flex-row items-center justify-start py-2 pr-1 pl-2 gap-[16px] text-neutral-800"
          style={creditAmountGroupStyle}
        >
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="relative w-6 h-6 min-h-[24px]"
              loading="eager"
              alt=""
              src={vuesaxlineartrendUp}
            />
            <div className="relative tracking-[0.25px] leading-[24px]">
              Credit Score
            </div>
          </div>
          <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium text-secondary mq450:text-base mq450:leading-[22px]">
            123
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px] text-neutral-300">
          <div className="relative tracking-[0.25px] leading-[24px]">
            Credit Amount
          </div>
          <div className="relative text-21xl tracking-[0.25px] leading-[40px] font-medium font-heading-03 text-neutral-200 mq450:text-5xl mq450:leading-[24px] mq975:text-13xl mq975:leading-[32px]">
            $5000 GHO
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-0 px-6 bg-primary rounded-31xl flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-start py-4 pr-[23px] pl-[22px] gap-[8px]">
          <div className="relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden">
            edit
          </div>
          <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium font-body-2 text-shades-white text-center mq450:text-base mq450:leading-[22px]">
            Borrow
          </div>
          <div className="relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden items-center justify-center w-3 shrink-0">
            cancel
          </div>
        </div>
      </button>
    </div>
  );
};

export default DelegatorFrame;
