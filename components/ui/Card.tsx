import React from "react";

const Card = ({
  img,
  title,
  description,
  altImg,
}: {
  img: string;
  title: string;
  description: string;
  altImg: string;
}) => {
  return (
    <>
      <a
        href="#project"
        className="bg-[#0d0014] rounded-xl border border-purple-400/[0.4] w-full hover:border-purple-400/[0.8] hover:translate-y-1 duration-300 md:mx-8 max-w-lg"
      >
        <img
          src={`/${img}`}
          alt={altImg}
          className="  w-[95%] h-[30vh] sm:h-[40vh] m-auto mt-3 rounded-xl "
        />
        <div className="mx-4 my-6">
          <h2 className="text-base sm:text-xl font-bold">{title}</h2>
          <p className="text-xs mt-2 sm:text-lg font-light line-clamp-2">
            {description}
          </p>
        </div>
      </a>
    </>
  );
};

export default Card;
