import React from "react";
import Image from "next/image";
import BlocSnippet from "./BlocSnippet";
import BlocCode from "./BlocCode";

const GuideCardSnippet = ({ title, content, imagePath, code, commands }) => {
  return (
    <div className="border border-slate-200 rounded-lg bg-white p-4 md:flex justify-center mb-16 gap-2">
      <div className="flex-1">
        <h1 className="text-primary text-lg mb-2 font-semibold">{title}</h1>
        <p className="text-slate-500 m-2">{content}</p>
        {
          (commands) ? <BlocSnippet commands={commands}></BlocSnippet> : ""
        }
      </div>
      {imagePath ? (
        <Image
          className="flex-1 drop-shadow-md rounded-lg max-md:mt-2"
          height={400}
          width={400}
          src={imagePath}
        ></Image>
      ) : (
        ""
      )}
      {code ? (
        <div><BlocCode code={code}></BlocCode></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GuideCardSnippet;
