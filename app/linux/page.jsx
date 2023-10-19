import Image from "next/image";
import Link from "next/link";
import React from "react";
import GuideCardSnippet from "../Components/GuideCardSnippet";

const Page = () => {
  const steps = [
    {
      title: "Important Preparations: Server Update and Ubuntu Version",
      content:
        "Before proceeding with the installation of Odoo on your Ubuntu server, it is imperative to ensure that your server system is up to date and fully upgraded. This step helps in patching security vulnerabilities and ensures that you have the latest system updates, which are crucial for a secure and efficient installation process. It's highly recommended to carry out this Odoo installation on Ubuntu 22.04 LTS (Long Term Support). LTS versions provide an extended support period, ensuring stability and security for your Odoo system. Be sure to verify that your server is running Ubuntu 22.04 LTS before proceeding with the installation.",
      imagePath: "/images/0.png",
      commands: null,
    },
    {
      title: "Step 1: Prepare the Ubuntu Environment",
      content:
        "In this crucial initial step, we'll ensure your Ubuntu server environment is well-prepared for Odoo installation. To lay a solid foundation, we'll update the system's package repositories and configure the essential repositories required for Odoo. Additionally, we will install a variety of packages and dependencies that are prerequisites for Odoo's seamless operation. These packages encompass system utilities, Python libraries, and various tools necessary for hosting the Odoo application.",
      imagePath: null,
      commands: [
        "lsb_release -a && ip r",
        "sudo apt update && sudo apt upgrade",
        "sudo apt install -y git wget nodejs npm python3 build-essential libzip-dev python3-dev libxslt1-dev python3-pip libldap2-dev python3-wheel libsasl2-dev python3-venv python3-setuptools node-less libjpeg-dev xfonts-75dpi xfonts-base libpq-dev libffi-dev fontconfig",
      ],
    },
    {
      title: "Step 2: Install the PDF Generator Package",
      content:
        "In this step, we focus on installing the PDF generator package, an essential component of Odoo. We'll install the required packages, including rtlcss and wkhtmltopdf. These packages are crucial for generating PDF files, which are used in Odoo for reporting, invoices, and other document-related functionalities.",
      imagePath: null,
      commands: [
        "sudo npm install -g rtlcss",
        "wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6.1-2/wkhtmltox_0.12.6.1-2.jammy_amd64.deb",
        "sudo dpkg -i wkhtmltox_0.12.6.1-2.jammy_amd64.deb",
      ],
    },
    {
      title: "Step 3: Set Up User and PostgreSQL Database",
      content:
        "Establish a strong foundation for your Odoo instance by creating a dedicated system user, 'odoo.' We'll also set up PostgreSQL, a robust open-source database management system, which serves as the backbone for Odoo's data storage. This step includes configuring PostgreSQL user permissions and adjusting directory settings to ensure smooth database operations.",
      imagePath: null,
      commands: [
        "sudo adduser --system --group --home=/opt/odoo --shell=/bin/bash odoo",
        "sudo apt install postgresql -y",
        "service postgresql start",
        "service postgresql status",
        'sudo su - postgres -c "createuser -s odoo"',
        "cd /opt",
        "sudo chmod +rwx odoo",
        "cd ..",
        "cd /opt/odoo",
      ],
    },
    {
      title: "Step 4: Download the Latest Odoo Version",
      content:
        "Obtain the latest Odoo version by cloning the official repository from GitHub. This version serves as the core of your Odoo installation, incorporating the latest features, improvements, and bug fixes. This is a critical step in ensuring your Odoo system is up to date and equipped with the latest enhancements.",
      imagePath: null,
      commands: [
        "sudo git clone https://github.com/odoo/odoo.git --depth 1 --branch 16.0 --single-branch odoo-server",
      ],
    },
    {
      title: "Step 5: Configure Directory Permissions",
      content:
        "In this step, we'll focus on securing your Odoo directory by setting appropriate permissions. This is a crucial security measure to safeguard your Odoo installation and protect it from unauthorized access. Proper directory permissions are essential for the smooth and secure operation of your Odoo server.",
      imagePath: null,
      commands: [
        "sudo chown -R odoo:odoo /opt/odoo/odoo-server",
        "cd /opt/odoo/odoo-server",
      ],
    },
    {
      title: "Step 6: Activate the Python Virtual Environment",
      content:
        "Create and activate a Python virtual environment (venv) specifically tailored for Odoo. This isolation of dependencies ensures that Odoo operates independently of other Python applications on your server. Furthermore, we will install the 'wheel' package, which enhances Odoo's performance by accelerating package installations.",
      imagePath: null,
      commands: [
        "python3 -m venv venv",
        "sudo chown -R your_username:your_username /opt/odoo/odoo-server/venv",
        "source venv/bin/activate",
        "pip3 install wheel",
      ],
    },
    {
      title: "Step 7: Install Required Python Packages",
      content:
        "To meet Odoo's prerequisites and provide the necessary Python libraries and modules, we will install the Python dependencies listed in the 'requirements.txt' file. This step ensures that your Odoo environment is fully equipped to execute Odoo modules and features. After completing this installation, we will deactivate the virtual environment to maintain system cleanliness.",
      imagePath: null,
      commands: ["pip3 install -r requirements.txt", "deactivate"],
    },
    {
      title: "Step 8: Establish Odoo User Permissions",
      content:
        "Create directories dedicated to Odoo logs and set permissions to ensure the smooth operation of your Odoo server. By configuring permissions properly, you will facilitate efficient logging and monitoring of your Odoo system. This is vital for troubleshooting, performance optimization, and error analysis.",
      imagePath: null,
      commands: [
        "sudo mkdir /var/log/odoo",
        "sudo chown odoo:odoo /var/log/odoo",
        "sudo chmod 777 /var/log/odoo",
      ],
    },
    {
      title: "Step 9: Configure the Odoo Server",
      content:
        "Create a comprehensive configuration file for Odoo, incorporating vital settings that drive its operation. These settings include, but are not limited to, the master administrative password, database user, and the path to Odoo's addon modules. This configuration file is essential for Odoo's functionality and, particularly, when creating and managing databases through the Odoo user interface.",
      imagePath: null,
      code: `[options]
admin_passwd = P@ss$123
db_user = odoo
addons_path = /opt/odoo/odoo-server/addons
logfile = /var/log/odoo/odoo-server.log
log_level  = debug`,
      commands: [
        "sudo nano /etc/odoo-server.conf",
        "sudo chown odoo:odoo /etc/odoo-server.conf",
      ],
    },
    {
      title: "Step 10: Set Up the Odoo Service",
      content:
        "This step focuses on creating a systemd service unit for Odoo, allowing it to run as a service on your server. By defining dependencies and specifying the command to initiate the Odoo service, we ensure that Odoo operates continuously as a background service. This enhances reliability and ensures that Odoo starts automatically with system boot.",
      imagePath: null,
      code: `[Unit]
Description=Odoo 16.0 Service
Requires=postgresql.service
After=network.target postgresql.service
 
[Service]
Type=simple
SyslogIdentifier=odoo
PermissionsStartOnly=true
User=odoo
Group=odoo
ExecStart=/opt/odoo/odoo-server/venv/bin/python3 /opt/odoo/odoo-server/odoo-bin -c /etc/odoo-server.conf
StandardOutput=journal+console
 
[Install]
WantedBy=multi-user.target`,
      commands: ["sudo nano /etc/systemd/system/odoo.service"],
    },
    {
      title: "Step 11: Restart the Daemon and Start Odoo",
      content:
        "After configuring the Odoo service, it's essential to refresh the systemd daemon configurations. We will also enable and initiate the Odoo service. This guarantees that Odoo runs as a service and is readily available to serve your business needs. You'll have a robust Odoo service that's responsive and always at your disposal.",
      imagePath: null,
      code: null,
      commands: [
        "sudo systemctl daemon-reload",
        "sudo systemctl enable --now odoo.service",
        "sudo systemctl status odoo.servicee",
      ],
    },
    {
      title: "Step 12: Access and Initial Configuration",
      content:
        "With Odoo now set up and running, you can access your Odoo instance via a web browser [http://localhost:8069]. Here, you'll perform the initial configuration steps that are pivotal to your specific business needs. You can create databases and import demo data to begin leveraging Odoo's powerful features, including CRM, inventory management, accounting, and more.",
      imagePath: "/images/10.png",
      code: null,
      commands: null,
    },
  ];

  return (
    <main className="p-4 bg-white">
      <div className="bg-slate-100 mb-4 p-4 rounded-lg border border-slate-200">
        <h1 className="text-primary text-3xl font-bold mb-2">
          Odoo 16 on Ubuntu 20.04 LTS Server
        </h1>
        <p className="text-slate-500 m-2">
          Odoo is an open source software used as business purposes like crm,
          invoice, ecommerce, billing, accounting, project management and
          inventory management and more. Now I want to share how to install Odoo
          latest version on Ubuntu 22.04 server.
        </p>
      </div>
      <div className="bg-slate-100 mb-4 p-4 rounded-lg border border-slate-200">
        <h1 className="text-primary text-3xl font-bold mb-4">
          Installation guide
        </h1>
        {steps.map((step, index) => (
          <GuideCardSnippet
            key={index}
            title={step.title}
            content={step.content}
            imagePath={step.imagePath}
            commands={step.commands}
            code={step.code}
          ></GuideCardSnippet>
        ))}
      </div>
    </main>
  );
};

export default Page;
