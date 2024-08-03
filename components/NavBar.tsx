import Link from "next/link";
import React from "react";
import { navItems } from "@/data";

const NavBar = () => {
  return (
    <nav className=" flex justify-center gap-3 h-8 items-center bg-[rgba(17,8,21,0.85)] w-max px-8 mt-3 sm:mt-10 border border-purple-800 rounded-xl sm:rounded-3xl text-xs sm:text-lg sm:gap-10 sm:h-16 fixed top-0 z-10">
      {navItems.map((item, index) => (
        <Link key={index} href={item.link} className=" hover:text-purple-200">
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
