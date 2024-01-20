import { FunctionComponent } from "react";
import ConnectWalletButton from "../components/ConnectWalletButton";

const ContractSignView: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-secondary overflow-hidden flex flex-col items-start justify-start gap-[43px] tracking-[normal] mq725:gap-[21px]">
      <main className="self-stretch flex flex-col items-center justify-start max-w-full shrink-0 text-left text-xl text-neutral-400 font-body-2">
        <section className="self-stretch flex flex-col items-start justify-start pt-20 px-0 pb-[332px] box-border relative gap-[24px] max-w-full text-left text-xl text-shades-white font-body-2 mq975:pt-[52px] mq975:pb-[216px] mq975:box-border mq450:pt-[34px] mq450:pb-[140px] mq450:box-border">
          <img
            className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover opacity-[0.5] mix-blend-normal"
            alt=""
            src="/blur.png"
          />
          <header className="self-stretch flex flex-row items-center justify-between py-6 px-[72px] box-border gap-[20px] max-w-full z-[1] text-center text-base text-shades-white font-body-2 mq725:pl-9 mq725:pr-9 mq725:box-border">
            <nav className="m-0 flex flex-row items-center justify-center gap-[24px] max-w-full text-left text-13xl text-shades-white font-heading-05">
              <h2 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit whitespace-nowrap">
                Logotype
              </h2>
              <h2 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit whitespace-nowrap">
                I
              </h2>
              <h1 className="m-0 relative text-21xl tracking-[0.25px] leading-[40px] font-medium font-inherit whitespace-nowrap">
                Delegator
              </h1>
            </nav>
            <div className="w-[390px] flex flex-row items-start justify-start gap-[23px] max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[16px]">
                <button className="cursor-pointer [border:none] p-3 bg-neutral-800 h-14 w-14 rounded-81xl flex flex-row items-start justify-start box-border">
                  <img
                    className="h-8 w-8 relative"
                    alt=""
                    src="/metamask.svg"
                  />
                </button>
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px] mq975:hidden">
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
          <div className="w-[1031px] flex flex-row items-start justify-start py-0 px-[72px] box-border max-w-full mq1025:pl-9 mq1025:pr-9 mq1025:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[13px] max-w-full">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="eager"
                  alt=""
                  src="/iconarrowright.svg"
                />
                <div className="relative tracking-[0.15px] leading-[28px] font-medium z-[1] mq450:text-base mq450:leading-[22px]">
                  Back
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end max-w-full text-center text-21xl text-mediumpurple font-heading-05">
                <div className="w-[551px] flex flex-col items-center justify-start gap-[16px] max-w-full">
                  <img
                    className="w-[233.6px] h-[182px] relative z-[1]"
                    loading="eager"
                    alt=""
                    src="/open-doodles-rolling.svg"
                  />
                  <h1 className="m-0 self-stretch relative text-inherit tracking-[0.25px] leading-[40px] font-medium font-inherit z-[1] mq975:text-13xl mq975:leading-[32px] mq450:text-5xl mq450:leading-[24px]">
                    Congratulations
                  </h1>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-5xl text-shades-white">
                    <div className="self-stretch relative tracking-[0.25px] leading-[32px] font-medium z-[1] mq450:text-lgi mq450:leading-[26px]">
                      your are close to delegate a credit to
                    </div>
                    <div className="relative tracking-[0.25px] leading-[32px] font-medium text-neutral-200 z-[1] mq450:text-lgi mq450:leading-[26px]">
                      0x455n566...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[806px] rounded-2xl bg-secondary flex flex-col items-center justify-start py-10 px-5 box-border gap-[24px] max-w-full z-[1] mt-[-300px] mq725:pt-10 mq725:pb-[26px] mq725:box-border mq975:w-[calc(100%_-_40px)]">
          <div className="w-[598px] relative tracking-[0.15px] leading-[28px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
            Please read the read the contract and sign
          </div>
          <div className="w-[598px] h-[376px] relative tracking-[0.25px] text-shades-white inline-block text-base">
            <p className="m-0 leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              consequat augue erat, ac molestie felis semper eget. Suspendisse
              faucibus neque at justo blandit consectetur. Vestibulum ac cursus
              orci. Donec vehicula in libero nec euismod. Donec suscipit
              dignissim nisl, et consectetur lectus fermentum varius. Nullam
              orci quam, tristique at congue ut, pellentesque nec velit. Duis
              turpis odio, eleifend porttitor finibus nec, lobortis et nulla.
            </p>
            <p className="m-0 leading-[24px]">&nbsp;</p>
            <p className="m-0 text-5xl leading-[32px] font-medium font-heading-05">
              Lorem ipsum dolor sit amet 
            </p>
            <p className="m-0 leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              consequat augue erat, ac molestie felis semper eget. Suspendisse
              faucibus neque at justo blandit consectetur. Vestibulum ac cursus
              orci. Donec vehicula in libero nec euismod. Donec suscipit
              dignissim nisl, et consectetur lectus fermentum varius. Nullam
              orci quam, tristique at congue ut, pellentesque nec velit. Duis
              turpis odio, eleifend porttitor finibus nec, lobortis et nulla.
            </p>
          </div>
          <ConnectWalletButton buttonText="Sign" propWidth="183.5px" />
        </div>
      </main>
      <footer className="self-stretch bg-neutral-800 flex flex-col items-center justify-start p-12 gap-[16px] text-left text-xl text-neutral-300 font-body-2">
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

export default ContractSignView;
