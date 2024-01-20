import SmartAccountButton from "./SmartAccountButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="self-stretch flex flex-row items-center justify-between py-6 px-[72px] box-border gap-[20px] max-w-full z-[1] text-center text-base text-shades-white font-body-2 mq725:pl-9 mq725:pr-9 mq725:box-border">
      <nav className="m-0 flex flex-row items-center justify-center gap-[24px] max-w-full text-left text-13xl text-shades-white font-heading-05">
        <h2 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit whitespace-nowrap">
          <Link to="/" className="text-white no-underline">
            Ghost ID
          </Link>
        </h2>
        <h2 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit whitespace-nowrap">
          |
        </h2>
        <h1 className="m-0 relative text-21xl tracking-[0.25px] leading-[40px] font-medium font-inherit whitespace-nowrap">
          <Link to="/delegator" className="text-white no-underline">
            Delegator
          </Link>
        </h1>
        <h2 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit whitespace-nowrap">
          |
        </h2>
        <h1 className="m-0 relative text-21xl tracking-[0.25px] leading-[40px] font-medium font-inherit whitespace-nowrap">
          <Link to="/beneficiary" className="text-white no-underline">
            Student
          </Link>
        </h1>
      </nav>
      <div className="w-[390px] flex flex-row items-start justify-start gap-[23px] max-w-full">
        <div className="ml-auto">
          <SmartAccountButton />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
