"use client";
import Link from "next/link";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import AnimatedTagline from "./ui/AnimationTagline";
import animation from "@/data/smile.json";
import Lottie from "react-lottie";

const Hero = () => {
  const words = [
    "Turning",
    "Ideas",
    "into",
    "Reality,",
    "One",
    "Pixel",
    "at",
    "a",
    "time",
  ];
  return (
    <div
      id="home"
      className="sm:pt-[30vh] pt-[12vh] flex justify-center items-center flex-col max-w-[70vw] sm:max-w-[50vw] gap-4 "
    >
      <p className="text-[10px] sm:text-sm text-purple-200 text-center">
        DYANMIC WEB MAGIC WITH NEXT.JS
      </p>
      {/* <h1 className="sm:text-6xl text-3xl mt-4 font-bold text-center sm:leading-[1.1]">
        Turning Ideas into Reality,
        <span className="text-blue-300"> One Pixel</span> at a Time
      </h1> */}
      <AnimatedTagline tagline={words} />
      <div className="flex items-center text-[10px] sm:text-base text-center mt-4 sm:mt-7 mx-[-10%] tracking-normal">
        <p>Hi I am Abhishek, a Next JS learner under Mohit Shrivastava</p>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animation,
          }}
          height={30}
          width={30}
        />
      </div>
      <Link
        href="#about"
        className=" flex items-center border border-slate-400 px-4 py-2 rounded-md mt-2 text-xs sm:text-base sm:mt-8 sm:px-8 relative hover:border-purple-300"
      >
        Show My Work <FaLocationArrow className=" ml-1" />
      </Link>
    </div>
  );
};

export default Hero;
