import React from "react";
import ApproachCard from "./ui/ApproachCard";

const Approach = () => {
  return (
    <section className="mt-24 sm:mt-32 w-[80vw] mb-8">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold  mb-12 md:mb-20 ">
        My <span className="text-blue-300">approach</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-16 md:gap-20">
        <ApproachCard
          vText="Phase 1"
          color="bg-blue-gradient"
          title="Planning and strategy"
          desc="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
        />
        <ApproachCard
          vText="Phase 2"
          color="bg-red-gradient"
          title="Development & Progress Update"
          desc="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
        />
        <ApproachCard
          vText="Phase 3"
          color="bg-green-gradient"
          title="Development & Launch"
          desc="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
        />
      </div>
    </section>
  );
};

export default Approach;
