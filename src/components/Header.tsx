import Link from "next/link";
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-20 py-8 shadow">
      {/* Logo */}
      <Link href="/">
        <h2 className="font-bold text-xl">Where in the world?</h2>
      </Link>

      {/* Dark mode toggle */}
      <div className="flex items-center gap-2">
        <IoMoonOutline />
        <span className="font-semibold text-md">Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
