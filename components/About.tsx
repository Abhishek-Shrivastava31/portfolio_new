import Image from "next/image";
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className="my-14 ">
      <div className="flex w-[80vw] gap-4 md:gap-0 flex-col md:flex-row ">
        <div
          className={`${styles.background} flex  w-[50%] h-full md:my-4 md:mx-4 border border-purple-300 rounded-xl`}
        >
          <h1 className="p-5 md:p-8 text-sm md:text-3xl font-bold flex items-end hover:translate-x-2 duration-300">
            I value client engagement, promoting honest communication.
          </h1>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 md:w-[60%] h-full md:my-4 md:mx-4 ">
          <div
            className={`${styles.globeBackground} w-full border border-purple-300 rounded-xl`}
          >
            <h1 className="p-5 md:p-7 text-sm md:text-3xl font-bold h-full flex items-end md:items-start hover:translate-x-2 duration-300">
              Available across all time zones.
            </h1>
          </div>
          <div
            className={`${styles.techBackground}  w-full border border-purple-300 rounded-xl p-5 md:p-6 h-full `}
          >
            {" "}
            <div className="h-full w-full flex flex-col justify-end md:justify-center hover:translate-x-2 duration-300">
              <h1 className="text-sm md:text-3xl font-bold ">Tech stack</h1>
              <p className="text-xs md:text-sm text-purple-200 font-thin md:font-extralight">
                Improvement is my priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
