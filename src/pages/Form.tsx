import { FunctionComponent } from "react";

const Form: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-secondary overflow-hidden flex flex-col items-start justify-start gap-[78px] tracking-[normal] mq450:gap-[19px] mq700:gap-[39px]">
      <main className="self-stretch flex flex-col items-center justify-start max-w-full shrink-0 text-left text-xl text-shades-white font-body-2">
        <section className="self-stretch flex flex-col items-center justify-start pt-20 px-0 pb-[405px] box-border relative gap-[65px] max-w-full text-center text-21xl text-mediumpurple font-heading-05 mq900:pt-[52px] mq900:pb-[263px] mq900:box-border mq450:gap-[16px] mq450:pt-[34px] mq450:pb-[171px] mq450:box-border mq700:gap-[32px]">
          <img
            className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover opacity-[0.5] mix-blend-normal"
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
                Beneficiary
              </h1>
            </nav>
            <div className="w-[360px] flex flex-row items-start justify-start gap-[23px] max-w-full">
              <div className="w-[168.5px] flex flex-row items-start justify-start gap-[16px]">
                <button className="cursor-pointer [border:none] p-3 bg-neutral-800 h-14 w-14 rounded-81xl flex flex-row items-start justify-start box-border">
                  <img
                    className="h-8 w-8 relative"
                    alt=""
                    src="/metamask.svg"
                  />
                </button>
                <div className="flex flex-col items-start justify-start gap-[8px] mq900:hidden">
                  <div className="relative tracking-[0.1px] leading-[24px] font-medium">
                    Metamask
                  </div>
                  <div className="relative tracking-[0.25px] leading-[24px] text-left">
                    3FZbgi2...tZc5
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-0 px-6 bg-primary flex-[0.7151] rounded-31xl flex flex-row items-center justify-center">
                <div className="flex-1 flex flex-row items-center justify-start py-4 pr-1.5 pl-[5px] gap-[8px]">
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
          <div className="w-[591px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[16px] max-w-full">
            <img
              className="w-[233.6px] h-[197.4px] relative z-[1]"
              loading="eager"
              alt=""
              src="/open-doodles-dancing.svg"
            />
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.25px] leading-[40px] font-medium font-inherit z-[1] mq900:text-13xl mq900:leading-[32px] mq450:text-5xl mq450:leading-[24px]">
              Student information
            </h1>
          </div>
        </section>
        <div className="w-[806px] rounded-2xl bg-secondary flex flex-col items-center justify-start py-10 px-5 box-border gap-[40px] max-w-full z-[1] mt-[-373px] mq900:pt-10 mq900:pb-[26px] mq900:box-border mq900:w-[calc(100%_-_40px)] mq700:gap-[20px]">
          <div className="w-[598px] flex flex-col items-center justify-start gap-[24px] max-w-full text-base text-neutral-200 font-roboto">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[24px]">
              <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-start py-2 pr-[13px] pl-[11px] min-w-[187px] min-h-[56px] border-[1px] border-solid border-neutral-600">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 overflow-hidden flex flex-row items-center justify-start font-roboto text-base text-neutral-200 min-w-[158px]"
                  placeholder="Jonathan Jackson Vidal"
                  type="text"
                />
              </div>
              <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-start py-2 pr-[13px] pl-[11px] min-w-[187px] min-h-[56px] border-[1px] border-solid border-neutral-600">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 overflow-hidden flex flex-row items-center justify-start font-roboto text-base text-neutral-200 min-w-[158px]"
                  placeholder="jonathan@ejemplo.com "
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[24px]">
              <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-start py-2 pr-[13px] pl-[11px] min-w-[187px] min-h-[56px] border-[1px] border-solid border-neutral-600">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 overflow-hidden flex flex-row items-center justify-start font-roboto text-base text-neutral-200 min-w-[158px]"
                  placeholder="12345678"
                  type="text"
                />
              </div>
              <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-start py-2 pr-[13px] pl-[11px] gap-[10px] min-w-[187px] min-h-[56px] border-[1px] border-solid border-neutral-600">
                <div className="flex-1 overflow-hidden flex flex-row items-center justify-start">
                  <div className="relative tracking-[0.5px] leading-[24px]">
                    Colombia
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative object-contain"
                  alt=""
                  src="/iconarrowdown.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[598px] flex flex-col items-center justify-start gap-[24px] max-w-full">
            <div className="self-stretch relative tracking-[0.15px] leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
              ¿How much do you want to borrow?
            </div>
            <div className="self-stretch flex flex-row items-center justify-center gap-[24px] mq700:flex-wrap">
              <div className="flex-[0.9094] rounded box-border overflow-hidden flex flex-row items-center justify-start py-2 pr-[13px] pl-[11px] min-w-[187px] min-h-[56px] border-[1px] border-solid border-neutral-600 mq700:flex-1">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 overflow-hidden flex flex-row items-center justify-start font-roboto text-base text-neutral-200 min-w-[158px]"
                  placeholder="123456789"
                  type="text"
                />
              </div>
              <div className="flex-1 relative tracking-[0.15px] leading-[28px] font-medium inline-block min-w-[187px] mq450:text-base mq450:leading-[22px] mq700:flex-1">
                GHO
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[24px]">
              <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-start py-2 pr-[13px] pl-[11px] min-w-[187px] min-h-[56px] border-[1px] border-solid border-neutral-600">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 overflow-hidden flex flex-row items-center justify-start font-roboto text-base text-neutral-200 min-w-[158px]"
                  placeholder="123"
                  type="text"
                />
              </div>
              <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-start py-2 pr-3.5 pl-2.5 min-w-[187px] min-h-[56px] border-[2px] border-solid border-primary-2">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 overflow-hidden flex flex-row items-center justify-start font-roboto text-base text-neutral-200 min-w-[158px]"
                  placeholder="I"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="w-[598px] flex flex-col items-center justify-start gap-[16px] max-w-full">
            <div className="self-stretch relative tracking-[0.15px] leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
              Important information
            </div>
            <div className="self-stretch relative text-lg tracking-[0.5px] leading-[26px]">
              If the credit is not paid on time, we will proceed to report the
              non-payment information to the credit bureau.
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[4px] max-w-full text-center text-5xl text-primary-2 font-icon-small">
              <div className="h-8 rounded-13xl flex flex-row items-center justify-center py-0 px-1 box-border">
                <h3 className="m-0 relative text-inherit leading-[100%] font-normal font-inherit mq450:text-lgi mq450:leading-[19px]">
                  check_box
                </h3>
              </div>
              <div className="flex-1 relative text-lg tracking-[0.5px] leading-[26px] font-body-2 text-shades-white text-left inline-block min-w-[215px] max-w-full">
                I accept termns and conditions
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-0 px-[22px] bg-primary rounded-31xl flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-start py-4 px-0 gap-[8px]">
              <div className="w-4 relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden">
                edit
              </div>
              <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium font-body-2 text-shades-white text-center mq450:text-base mq450:leading-[22px]">
                Validate my ID
              </div>
              <div className="w-3 relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden items-center justify-center shrink-0">
                cancel
              </div>
            </div>
          </button>
        </div>
      </main>
      <footer className="self-stretch bg-neutral-800 flex flex-col items-center justify-start py-12 pr-[21px] pl-5 gap-[16px] text-left text-xl text-neutral-300 font-body-2">
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

export default Form;
