import Image from "next/image";
import Link from "next/link";
import React from "react";
import GuideCard from "../Components/GuideCard";

const Page = () => {
    const steps = [
        {
            title: "1. Execute the downloaded file",
            content:"This step involves running the downloaded Odoo installation file to kickstart the setup. By executing this file, you initiate the installation wizard, guiding you through critical configuration steps.",
            imagePath: "/images/1.png",
          },
        {
          title: "2. Installation setup",
          content:
            "Please proceed by selecting the 'Next' option within the setup window to advance the installation.",
          imagePath: "/images/2.png",
        },
        {
          title: "3. Terms and conditions",
          content:
            "Subsequently, you will be presented with the software's terms and conditions. To continue with the installation, please click on the 'Agree' or 'Accept' button, depending on the terminology used by the software.",
          imagePath: "/images/3.png",
        },
        {
          title: "4. Server configuration",
          content:
            "Within the installation options, please select 'Odoo Server with SQL PostgreSQL Server' as your preferred installation type.",
          imagePath: "/images/4.png",
        },
        {
          title: "5. Install location",
          content:
            "Next, you'll be prompted to specify the destination path where Odoo will be installed. Please choose a directory or location on your system for the Odoo installation, ensuring it aligns with your preferences and organizational requirements.",
          imagePath: "/images/5.png",
        },
        {
          title: "6. Wait for installation",
          content:
            "Once you have selected the installation path, please initiate the installation process. Kindly note that this installation may take some time to complete. Your patience during this phase is greatly appreciated.",
          imagePath: "/images/6.png",
        },
        {
          title: "7. Installation completed",
          content:
            "Once the installation process has successfully concluded, kindly proceed by clicking on the 'Next' button to continue with the setup.",
          imagePath: "/images/7.png",
        },
        {
          title: "8. Close setup",
          content:
            "To finalize and complete the installation, please click on the 'Finish' button.",
          imagePath: "/images/8.png",
        },
        {
          title: "9. Access and configuration",
          content:
            "To access Odoo and begin the database configuration and admin setup, please open your web browser and navigate to the following link: http://localhost:8069 From there, follow the on-screen instructions to configure the database. Remember to save the master password for future use. Then, proceed to enter essential details such as the database name, user information (email, password, phone number), select your preferred language and country, and finally, click 'Submit' to finalize the Odoo installation process successfully.",
          imagePath: "/images/9.png",
        },
      ];

  return (
    <main className="p-4 bg-white">
      <div className="bg-slate-100 mb-4 p-4 rounded-lg border border-slate-200">
        <h1 className="text-primary text-3xl font-bold mb-2">Download</h1>
        <p className="text-slate-500 m-2">
          To access the latest version of Odoo, including the Community Edition,
          simply click the Download button. The Community Edition is an
          open-source version of Odoo that&apos;s perfect for businesses and
          developers looking for powerful, cost-effective business management
          software.
        </p>
        <Link
          href={
            "https://nightly.odoo.com/16.0/nightly/exe/odoo_16.0.latest.exe"
          }
        >
          <button className="px-4 py-2 border-primary border-2 bg-primary rounded-lg">
            Download
          </button>
        </Link>
        <Link href={"https://nightly.odoo.com/16.0/nightly/exe/"}>
          <button className="px-4 py-2 bg-white ml-2 text-primary border-primary border-2 rounded-lg">
            All Versions
          </button>
        </Link>
      </div>
      <div className="bg-slate-100 mb-4 p-4 rounded-lg border border-slate-200">
        <h1 className="text-primary text-3xl font-bold mb-4">
          Installation guide
        </h1>
        {
            steps.map((step, index) => <GuideCard key={index} title={step.title} content={step.content} imagePath={step.imagePath}></GuideCard>)
        }
      </div>
    </main>
  );
};

export default Page;
