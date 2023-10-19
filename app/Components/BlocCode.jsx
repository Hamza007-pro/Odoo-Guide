"use client"
import Image from "next/image";
import React from "react";

const BlocCode = ({ code }) => {
  return (
    <div onClick={() => navigator.clipboard.writeText(code)} className="max-md:mt-2 max-w-[500px] h-full overflow-hidden bg-slate-100 border-dashed border-2 border-slate-400 min-h-[100px]  rounded-lg p-4 relative">
      <div className="p-2 bg-primary flex absolute right-4 top-4 rounded-lg gap-2 drop-shadow-lg border-white border cursor-pointer hover:bg-emerald-600 active:bg-emerald-900 focus:outline-none focus:ring focus:ring-emerald-300">
        <span>Copy</span>
        <Image src={"/images/copy.svg"} width={18} height={18}></Image>
      </div>
      <pre className="text-slate-900">
        {code}
      </pre>
    </div>
  );
};

export default BlocCode;
