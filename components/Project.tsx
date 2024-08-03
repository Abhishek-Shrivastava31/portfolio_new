import React from "react";

import Card from "./ui/Card";

const Project = () => {
  return (
    <section id="project" className="mt-24 sm:mt-32 w-[80vw] mb-8">
      <h1 className="text-center text-xl sm:text-2xl md:text-4xl font-bold  mb-12 md:mb-20 ">
        A Glimpse of My <span className="text-blue-300"> Latest Work</span>
      </h1>
      <div className="flex flex-col justify-center items-center gap-12 md:gap-0 md:flex-row w-full mb-12">
        <Card
          img="portfolio.png"
          title="A Portflio Website"
          description="A dynamic and visually captivating website, created with the
              cutting-edge Next.js framework."
          altImg="Portfolio image"
        />

        <Card
          img="news-website.png"
          title="Loknaad News Website"
          description="Your trusted source for breaking news, in-depth analysis, and
              diverse perspectives. We deliver accurate, timely reporting on
              local and global events."
          altImg="News Website image"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-12 md:gap-0 md:flex-row w-full">
        <Card
          img="FIR.png"
          title="Police FIR Website"
          description="Efficiently record, track, and update First Information Reports, enhancing transparency and improving response times."
          altImg="FIR image"
        />
        <Card
          img="epaper.png"
          title="Loknaad Epaper Website"
          description="Revolutionizing publication's digital presence with our
              cutting-edge e-paper management system. Seamlessly transform your
              print editions into interactive digital formats, reaching a global
              audience instantly."
          altImg="FIR image"
        />
      </div>
    </section>
  );
};

export default Project;
