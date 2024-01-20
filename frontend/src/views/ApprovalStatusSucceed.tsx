import { FunctionComponent } from "react";

const ApprovalStatusSucceed: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-secondary overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <main className="self-stretch flex flex-col items-center justify-start pt-20 px-0 pb-40 box-border relative gap-[65px] max-w-full shrink-0 text-center text-21xl text-mediumpurple font-heading-05 mq450:gap-[16px] mq450:pt-[34px] mq450:pb-[68px] mq450:box-border mq700:gap-[32px] mq900:pt-[52px] mq900:pb-[104px] mq900:box-border">
        <img
          className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[1px] left-[0px] max-w-full overflow-hidden max-h-full object-cover opacity-[0.5] mix-blend-normal"
          alt=""
          src="/blur.png"
        />
        <header className="self-stretch flex flex-row items-center justify-between py-6 px-[72px] box-border gap-[20px] max-w-full z-[1] text-center text-base text-shades-white font-body-2 mq700:pl-9 mq700:pr-9 mq700:box-border">
          <nav className="m-0 flex flex-row items-center justify-center gap-[24px] max-w-full text-left text-13xl text-shades-white font-heading-05">
            <h1 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit whitespace-nowrap">
              Logotype
            </h1>
            <h1 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit whitespace-nowrap">
              I
            </h1>
            <h1 className="m-0 relative text-21xl tracking-[0.25px] leading-[40px] font-medium font-inherit whitespace-nowrap">
              Delegator
            </h1>
          </nav>
          <div className="w-[390px] flex flex-row items-start justify-start gap-[23px] max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[16px]">
              <button className="cursor-pointer [border:none] p-3 bg-neutral-800 h-14 w-14 rounded-81xl flex flex-row items-start justify-start box-border">
                <img className="h-8 w-8 relative" alt="" src="/metamask1.svg" />
              </button>
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] mq900:hidden">
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
                <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium font-body-2 text-shades-white text-center whitespace-nowrap">
                  Disconnect
                </div>
                <div className="w-3 relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden items-center justify-center shrink-0">
                  cancel
                </div>
              </div>
            </button>
          </div>
        </header>
        <div className="w-[639px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[40px] max-w-full mq700:gap-[20px]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[16px] z-[1]">
            <img
              className="w-[233.6px] h-[190.6px] relative"
              loading="eager"
              alt=""
              src="/open-doodles-groovy.svg"
            />
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.25px] leading-[40px] font-medium font-inherit mq450:text-5xl mq450:leading-[24px] mq900:text-13xl mq900:leading-[32px]">
              Congratulations your ID is elegible for a loan
            </h1>
            <div className="self-stretch flex flex-col items-center justify-center gap-[8px] text-5xl text-shades-white">
              <h3 className="m-0 self-stretch relative text-inherit tracking-[0.25px] leading-[32px] font-medium font-inherit mq450:text-lgi mq450:leading-[26px]">
                Your Score is:
              </h3>
              <div className="rounded-2xl bg-honeydew flex flex-row items-center justify-start py-2 pr-[3px] pl-2 gap-[16px] text-left text-base text-neutral-800 font-body-2">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="eager"
                    alt=""
                    src="/vuesaxlineartrendup2.svg"
                  />
                  <div className="relative tracking-[0.25px] leading-[24px]">
                    Credit Score
                  </div>
                </div>
                <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium text-secondary mq450:text-base mq450:leading-[22px]">
                  123
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-base tracking-[0.25px] leading-[24px] font-body-2 text-shades-white z-[1]">
            "Your application will be forwarded to our credit evaluators. We
            will contact you shortly to notify you of the status of your
            application and whether it has been approved."
          </div>
        </div>
      </main>
      <footer className="self-stretch bg-neutral-800 flex flex-col items-center justify-start p-12 gap-[16px] z-[1] mt-[-57px] text-left text-xl text-neutral-300 font-body-2">
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

export default ApprovalStatusSucceed;
