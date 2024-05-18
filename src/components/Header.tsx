"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const { changeTheme, theme } = useContext(ThemeContext);
  return (
    <header className="flex items-center bg-primary justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-8 shadow">
      {/* Logo */}
      <Link href="/">
        <h2 className="font-bold text-lg md:text-xl">Where in the world?</h2>
      </Link>

      {/* Dark mode toggle */}
      {theme === "light" ? (
        <div
          onClick={() => changeTheme("dark")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <IoMoonOutline />
          <span className="font-semibold md:text-md">Dark Mode</span>
        </div>
      ) : (
        <div
          onClick={() => changeTheme("light")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <MdOutlineLightMode />
          <span className="font-semibold md:text-lg">Light Mode</span>
        </div>
      )}
    </header>
  );
};

export default Header;
