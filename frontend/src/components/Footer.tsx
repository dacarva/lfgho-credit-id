const Footer = () => {
  return (
    <section className="self-stretch bg-neutral-800 flex flex-col items-center justify-start py-12 pr-[21px] pl-5 relative gap-[16px] text-left text-xl text-neutral-300 font-body-2">
      <div className="relative tracking-[0.15px] leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
        Logotype
      </div>
      <div className="relative text-base tracking-[0.25px] leading-[24px]">
        ETHGlobal 2024
      </div>
      <img
        className="absolute my-0 mx-[!important] top-[-107.1px] right-[64.6px] w-[284.4px] h-[202.1px] z-[1]"
        loading="eager"
        alt=""
        src="/masterdoodlesreading.svg"
      />
    </section>
  );
};
export default Footer;
