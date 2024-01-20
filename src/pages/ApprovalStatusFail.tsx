import { FunctionComponent } from "react";

const ApprovalStatusFail: FunctionComponent = () => {
  return (
    <header className="w-full h-[768px] relative bg-secondary overflow-hidden flex flex-row items-end justify-end tracking-[normal]">
      <section className="flex-1 flex flex-col items-start justify-start pt-20 px-0 pb-[63px] box-border relative gap-[110px] max-w-full shrink-0 text-left text-13xl text-shades-white font-heading-05 mq450:gap-[27px] mq725:gap-[55px] mq725:pt-[52px] mq725:pb-[41px] mq725:box-border">
        <img
          className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover opacity-[0.5] mix-blend-normal"
          alt=""
        />
        <div className="self-stretch flex flex-col items-center justify-start gap-[65px] max-w-full mq450:gap-[16px] mq725:gap-[32px]">
          <div className="self-stretch flex flex-row items-center justify-between py-6 px-[72px] box-border gap-[20px] max-w-full z-[1] mq725:pl-9 mq725:pr-9 mq725:box-border">
            <div className="flex flex-row items-center justify-center gap-[24px] max-w-full">
              <h1 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit">
                Logotype
              </h1>
              <h1 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit">
                I
              </h1>
              <h1 className="m-0 relative text-21xl tracking-[0.25px] leading-[40px] font-medium font-inherit">
                Delegator
              </h1>
            </div>
            <div className="w-[390px] flex flex-row items-start justify-start gap-[23px] max-w-full text-center text-base font-body-2">
              <div className="flex-1 flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[16px]">
                <button className="cursor-pointer [border:none] p-3 bg-neutral-800 h-14 w-14 rounded-81xl flex flex-row items-start justify-start box-border">
                  <img className="h-8 w-8 relative" alt="" />
                </button>
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                    Metamask
                  </div>
                  <div className="relative tracking-[0.25px] leading-[24px]">
                    3FZbgi2...tZc5
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-0 px-6 bg-primary flex-[0.7425] rounded-31xl flex flex-row items-center justify-center">
                <div className="flex-1 flex flex-row items-center justify-start py-4 px-[13px] gap-[8px]">
                  <div className="w-4 relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden">
                    edit
                  </div>
                  <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium font-body-2 text-shades-white text-center">
                    Disconnect
                  </div>
                  <div className="w-3 relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden items-center justify-center shrink-0">
                    cancel
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="w-[639px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[16px] max-w-full text-center text-21xl text-mediumpurple">
            <img
              className="w-[233.6px] h-[185.3px] relative z-[1]"
              loading="eager"
              alt=""
            />
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.25px] leading-[40px] font-medium font-inherit whitespace-nowrap z-[1]">
              ¡We hope to see you soon!
            </h1>
            <h3 className="m-0 self-stretch h-16 relative text-5xl tracking-[0.25px] leading-[32px] font-medium font-inherit text-shades-white inline-block z-[1]">
              Sorry for the moment your ID isn’t elegible for a loan.
            </h3>
          </div>
        </div>
        <footer className="self-stretch bg-neutral-800 flex flex-col items-center justify-start p-12 gap-[16px] z-[1] text-left text-xl text-neutral-300 font-body-2">
          <div className="relative tracking-[0.15px] leading-[28px] font-medium">
            Logotype
          </div>
          <div className="relative text-base tracking-[0.25px] leading-[24px] whitespace-nowrap">
            ETHGlobal 2024
          </div>
        </footer>
      </section>
    </header>
  );
};

export default ApprovalStatusFail;
