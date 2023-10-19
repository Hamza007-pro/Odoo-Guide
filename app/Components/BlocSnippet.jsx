"use client"
import Image from "next/image";
import React from "react";

const BlocSnippet = ({ commands }) => {
  return (
    <div onClick={() => navigator.clipboard.writeText(commands.join("\n"))} className="bg-slate-800 min-h-[100px]  rounded-lg p-4 relative">
      <div className="p-2 bg-primary flex absolute right-4 top-4 rounded-lg gap-2 drop-shadow-lg border-white border cursor-pointer hover:bg-emerald-600 active:bg-emerald-900 focus:outline-none focus:ring focus:ring-emerald-300">
        <span>Copy</span>
        <Image src={"https://hamza007-pro.github.io/Odoo-Guide/images/copy.svg"} width={18} height={18}></Image>
      </div>
      {commands.map((cmd, index) => (
        <div key={index}>
          <span className="text-green-600">root@lunix:</span>&nbsp;
          <span>{cmd}</span>
        </div>
      ))}
    </div>
  );
};

export default BlocSnippet;
