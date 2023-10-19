import React from "react";
import Image from "next/image";


const GuideCard = ({title, content, imagePath}) => {
  return (
    <div className="border border-slate-200 rounded-lg bg-white p-4 md:flex justify-center mb-16">
      <div className="flex-1">
        <h1 className="text-primary text-lg mb-2 font-semibold">
          {title}
        </h1>
        <p className="text-slate-500 m-2">
          {content}
        </p>
      </div>
      <Image
        className="flex-1 drop-shadow-md rounded-lg"
        height={400}
        width={400}
        src={imagePath}
      ></Image>
    </div>
  );
};

export default GuideCard;
