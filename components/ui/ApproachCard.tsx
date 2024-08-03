import React from "react";

const ApproachCard = ({
  vText,
  color,
  title,
  desc,
}: {
  vText: string;
  color: string;
  title: string;
  desc: string;
}) => {
  return (
    <>
      <div className=" relative w-full h-64 md:h-[30rem] border border-purple-200 rounded-3xl">
        <div className="w-full h-full bg-black/50   flex items-center justify-center rounded-3xl">
          <p className="text-2xl md:text-3xl border-[3px] border-x-slate-600 border-y-0 px-4 py-2  rounded-full">
            {vText}
          </p>
        </div>
        <div
          className={`absolute inset-0 ${color} flex items-center justify-center opacity-0 hover:opacity-100  duration-300 rounded-3xl`}
        >
          <div className="flex flex-col justify-center items-center h-full w-full hover:-translate-y-2 duration-500 p-8 mt-5">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-5">
              {title}
            </h1>
            <p className=" text-center text-sm font-light md:text-lg md:mt-6">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApproachCard;
