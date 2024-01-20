import { FunctionComponent, useMemo, type CSSProperties } from "react";

type ConnectWalletButtonType = {
  buttonText?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const ConnectWalletButton: FunctionComponent<ConnectWalletButtonType> = ({
  buttonText,
  propWidth,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <button
      className="cursor-pointer [border:none] py-0 px-6 bg-primary w-[287px] rounded-31xl flex flex-row items-center justify-center box-border"
      style={buttonStyle}
    >
      <div className="flex flex-row items-center justify-start py-4 px-0 gap-[8px]">
        <div className="w-4 relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden">
          edit
        </div>
        <div className="relative text-xl tracking-[0.15px] leading-[28px] font-medium font-body-2 text-shades-white text-center whitespace-nowrap">
          {buttonText}
        </div>
        <div className="w-3 relative text-base leading-[100%] font-icon-small text-shades-white text-center hidden items-center justify-center shrink-0">
          cancel
        </div>
      </div>
    </button>
  );
};

export default ConnectWalletButton;
