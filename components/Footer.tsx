import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="w-[80vw] mt-20 mb-16">
      <div className="flex flex-col justify-between items-center sm:flex-row ">
        <div className="text-purple-100 text-sm sm:text-base">
          Copyright © 2024 Abhishek
        </div>
        <div className="flex gap-6 mt-4 sm:mt-0 sm:text-xl text-purple-100">
          <Link
            href="#"
            className="border border-slate-600 bg-slate-900/60 p-1 sm:p-2 rounded-md"
          >
            <FaGithub />
          </Link>
          <Link
            href="#"
            className="border border-slate-600 bg-slate-900/60 p-1 sm:p-2 rounded-md"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="#"
            className="border border-slate-600 bg-slate-900/60 p-1 sm:p-2 rounded-md"
          >
            <FaFacebook />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
