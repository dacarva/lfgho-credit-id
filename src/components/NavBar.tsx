import { FunctionComponent } from "react";

const NavBar: FunctionComponent = () => {
  return (
    <header className="self-stretch flex flex-row items-center justify-between py-6 px-[72px] box-border gap-[20px] max-w-full z-[1] text-center text-base text-shades-white font-body-2 mq725:pl-9 mq725:pr-9 mq725:box-border">
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
            <img className="h-8 w-8 relative" alt="" src="/metamask.svg" />
          </button>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] mq975:hidden">
            <div className="relative tracking-[0.1px] leading-[24px] font-medium">
              Metamask
            </div>
            <div className="relative tracking-[0.25px] leading-[24px] text-left">
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
  );
};

export default NavBar;
