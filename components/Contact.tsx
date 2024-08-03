"use client";
import React, { useState } from "react";
import { FaCopy } from "react-icons/fa6";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("shrivastava.abhishek3112@gmail.com");
    setCopied(true);
  };
  return (
    <section id="contact" className="mt-24 sm:mt-32 w-[80vw] md:w-[50vw] mb-16">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold ">
          Ready to elevate Your{" "}
          <span className="text-blue-300">Digital Footprint</span> Today?
        </h1>
        <p className="text-sm md:text-base text-center font-light text-purple-100">
          Contact me today and let&apos;s talk about achieving your goals
          together.
        </p>

        <div className="mt-5 relative">
          <div className={`absolute -bottom-5 right-0`}>
            <Lottie
              options={{
                loop: copied,
                autoplay: copied,
                animationData: animationData,
              }}
            />
          </div>
          <button
            onClick={handleCopy}
            className="relative mt-8 px-3 md:px-6 py-1 md:py-2 gap-2 border rounded-md text-sm md:text-xl border-purple-200 hover:border-purple-300 "
          >
            <p className="flex justify-center items-center gap-1 md:gap-2">
              {copied ? "Email Copied" : "Copy Email"}
              <FaCopy />
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
