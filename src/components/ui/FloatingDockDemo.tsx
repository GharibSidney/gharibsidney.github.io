import React from "react";
import { FloatingDock } from "./floating-dock";
import {
  IconBrandGithub,
  IconFileCvFilled,
  IconAddressBook,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Resume",
      icon: (
        <IconFileCvFilled  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/GharibSidney",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/sidney-gharib-a89346229/",
    },
    {
      title: "Email",
      icon: (
        <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:gharibsidney@gmail.com?subject=Hello Sidney&body=Hi, I found your website and wanted to reach out...",
    },
  ];
  return (
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
  );
}
