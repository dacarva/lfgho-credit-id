import SmartAccountButton from "./SmartAccountButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800">
      <ul className="flex justify-between items-center h-16 mx-5">
        <li className="mr-6">
          <Link to="/" className="text-white">
            <h2 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit whitespace-nowrap">
              Logotype
            </h2>
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/polygon-verifier" className="text-white">
            Polygon-verifier
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/alchemy-aa" className="text-white">
            Alchemy AA
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/token-sender" className="text-white">
            Token-sender
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/delegator" className="text-white">
            Delegator
          </Link>
        </li>
        <li className="ml-auto">
          <SmartAccountButton />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
