"use client";
import Image from "next/image";
import { observer } from "mobx-react";
import { makeAutoObservable } from "mobx";
import Link from "next/link";

export class DataContext {
  navMenuState = false;

  constructor() {
    makeAutoObservable(this);
  }

  setNavMenuState(state) {
    this.navMenuState = state;
  }
}

const dataContext = new DataContext();

function Home() {
  return (
    <main className="p-8 bg-white min-h-screen">
      <div className="bg-slate-100 border border-slate-200 rounded-lg md:flex justify-center items-center mb-4 p-4 gap-2">
        <div className="flex-1">
          <Image
            width={100}
            height={100}
            src={"https://hamza007-pro.github.io/Odoo-Guide/images/software_installer.svg"}
          ></Image>
          <h1 className="text-primary text-4xl font-bold mb-2 uppercase">
            Odoo Installation Guide
          </h1>
          <p className="text-slate-500">
            This guide is your go-to resource for installing Odoo, a powerful
            and open-source business management software suite. Whether you&apos;re
            running Windows or Linux, this comprehensive guide will walk you
            through each step of the installation process, ensuring you have
            Odoo up and running smoothly. From meeting system requirements to
            configuring databases and launching Odoo, you&apos;ll find detailed
            instructions and expert tips to help you get started with this
            versatile business management tool
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <Image
            className="drop-shadow-md rounded-lg"
            src={"https://hamza007-pro.github.io/Odoo-Guide/images/odoo.jpg"}
            width={500}
            height={700}
          ></Image>
        </div>
      </div>
      <div>
        <h1 className="text-primary text-3xl font-bold mb-2">Installation</h1>
        <p className="text-slate-500 mb-4">
          Selecting the right operating system is a critical first step before
          installing Odoo. Your choice of Windows or Linux will impact the
          installation process and performance. Make this decision wisely to
          ensure a smooth and tailored deployment.
        </p>
        <div className="flex w-full gap-2">
          <div className="bg-slate-200 rounded-lg flex-1 p-4">
            <Link href={"/windows"}>
              <Image
                className="m-auto"
                width={64}
                height={64}
                src={"https://hamza007-pro.github.io/Odoo-Guide/images/windows.svg"}
              ></Image>
              <h1 className="text-center text-primary text-xl">Windows</h1>
            </Link>
          </div>
          <div className="bg-slate-200 rounded-lg flex-1 p-4">
            <Link href={"/linux"}>
              <Image
                className="m-auto"
                width={64}
                height={64}
                src={"/images/linux.svg"}
              ></Image>
              <h1 className="text-center text-primary text-xl">Linux</h1>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default observer(Home);
