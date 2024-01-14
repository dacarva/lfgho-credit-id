import { ConnectKitButton } from "connectkit";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800">
      <ul className="flex justify-between items-center h-16 mx-5">
        <li className="mr-6">
          <a href="/" className="text-white">
            Home
          </a>
        </li>
        <li className="ml-auto">
          <ConnectKitButton />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
