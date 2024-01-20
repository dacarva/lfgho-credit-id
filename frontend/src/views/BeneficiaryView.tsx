import { FunctionComponent } from "react";

const BeneficiaryView: FunctionComponent = () => {
  return (
    <div className="w-full relative  overflow-hidden flex flex-col items-start justify-start gap-[78px] tracking-[normal] mq450:gap-[19px] mq700:gap-[39px]">
      <main className="self-stretch flex flex-col items-center justify-start max-w-full shrink-0 text-left text-xl text-shades-white font-body-2">
        <section className="self-stretch flex flex-col items-center justify-start pt-20 px-0 pb-[405px] box-border relative gap-[65px] max-w-full text-center text-21xl text-mediumpurple font-heading-05 mq900:pt-[52px] mq900:pb-[263px] mq900:box-border mq450:gap-[16px] mq450:pt-[34px] mq450:pb-[171px] mq450:box-border mq700:gap-[32px]">
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
        <div className="w-[806px] rounded-2xl bg-secondary flex flex-col items-center justify-start p-10 box-border gap-[40px] max-w-full z-[1] mt-[-373px] mq900:pt-10 mq900:pb-[26px] mq900:box-border mq900:w-[calc(100%_-_40px)] mq700:gap-[20px]">
          <div className="w-[598px] flex flex-col items-start justify-start gap-[24px] max-w-full text-base text-neutral-600 font-roboto">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[24px]">
              <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-start py-2 pr-[13px] pl-[11px] min-w-[187px] min-h-[56px] border-[1px] border-solid border-neutral-600">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 overflow-hidden flex flex-row items-center justify-start font-roboto text-base text-neutral-400 min-w-[158px]"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-start py-2 pr-[13px] pl-[11px] min-w-[187px] min-h-[56px] border-[1px] border-solid border-neutral-600">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 overflow-hidden flex flex-row items-center justify-start font-roboto text-base text-neutral-400 min-w-[158px]"
                  placeholder="Email"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[24px]">
              <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-start py-4 px-3 min-w-[187px] border-[1px] border-solid border-neutral-600">
                <input
                  className="w-[78px] [border:none] [outline:none] font-roboto text-base bg-[transparent] h-6 relative tracking-[0.5px] leading-[24px] text-neutral-400 text-left flex items-center"
                  placeholder="ID number"
                  type="text"
                />
              </div>
              <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-start justify-between py-4 pr-[13px] pl-[11px] min-w-[187px] gap-[20px] border-[1px] border-solid border-neutral-600">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  Country
                </div>
                <div className="w-6 flex flex-row items-center justify-center text-center text-5xl font-icon-small">
                  <h3 className="m-0 flex-1 relative text-inherit leading-[100%] font-normal font-inherit mq450:text-lgi mq450:leading-[19px]">
                    arrow_drop_down
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch relative tracking-[0.15px] leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
              ¿How much do you want to borrow?
            </div>
            <div className="self-stretch flex flex-row items-center justify-center gap-[24px] mq700:flex-wrap">
              <div className="flex-[0.9094] rounded box-border overflow-hidden flex flex-row items-center justify-start py-2 pr-[13px] pl-[11px] min-w-[187px] min-h-[56px] border-[1px] border-solid border-neutral-600 mq700:flex-1">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 overflow-hidden flex flex-row items-center justify-start font-roboto text-base text-neutral-400 min-w-[158px]"
                  placeholder="Amount"
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
                  className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 overflow-hidden flex flex-row items-center justify-start font-roboto text-base text-neutral-400 min-w-[158px]"
                  placeholder="Interest rate"
                  type="text"
                />
              </div>
              <div className="flex-1 rounded box-border overflow-hidden flex flex-row items-center justify-start py-2 pr-[13px] pl-[11px] min-w-[187px] min-h-[56px] border-[1px] border-solid border-neutral-600">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 overflow-hidden flex flex-row items-center justify-start font-roboto text-base text-neutral-400 min-w-[158px]"
                  placeholder="Installments"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px] max-w-full">
            <div className="self-stretch relative tracking-[0.15px] leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
              Important information
            </div>
            <div className="self-stretch relative text-lg tracking-[0.5px] leading-[26px]">
              If the credit is not paid on time, we will proceed to report the
              non-payment information to the credit bureau.
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[4px] max-w-full text-center text-5xl text-neutral-300 font-icon-small">
              <div className="h-8 rounded-13xl flex flex-row items-center justify-center py-0 px-1 box-border">
                <h3 className="m-0 relative text-inherit leading-[100%] font-normal font-inherit mq450:text-lgi mq450:leading-[19px]">
                  check_box_outline_blank
                </h3>
              </div>
              <div className="flex-1 relative text-lg tracking-[0.5px] leading-[26px] font-body-2 text-shades-white text-left inline-block min-w-[215px] max-w-full">
                I accept termns and conditions
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-4 pr-[15px] pl-[22px] bg-primary rounded-31xl flex flex-row items-center justify-end gap-[16px]">
            <div className="w-4 relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden items-center justify-center">
              edit
            </div>
            <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium font-body-2 text-shades-white text-center mq450:text-base mq450:leading-[22px]">
              Validate my ID
            </div>
            <div className="w-3 relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden items-center justify-center shrink-0">
              cancel
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

export default BeneficiaryView;
