"use client";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  IconBrandTabler
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories, getCategoryImages } from "../portafolio/getData/categories";

export function DashBoardSide() {
  const [open, setOpen] = useState(false);

  const links = categories.map(category => ({
    label: category.title,
    href: `#${category.path}`,
    icon: (
      <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
    ),
  }));

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-auto mx-auto border border-neutral-200 dark:border-neutral-700",
        "h-[80vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-auto overflow-x-hidden ">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Sharay Henriquez",
                href: "#aniversarios",
                icon: (
                  <Image
                    src="/logo/logo.png"
                    className="h-10 w-auto shrink-0"
                    /* className="h-10 w-10 shrink-0 rounded-full bg-gray-700" */
                    width={50}
                    height={50}
                    alt="logo"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#aniversarios"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Todo
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1 overflow-auto mb-20 rounded-tl-2xl bg-white border border-neutral-200">
      <div className="p-2 md:p-12 rounded-tl-2xl flex flex-col gap-2 flex-1 w-full h-full">
        {categories.map((category, idx) => (
          <div key={idx} className="mb-18">
            <h2 className="text-3xl font-bold mb-8" id={category.path}>{category.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {getCategoryImages(category.path).map((src, index) => (
                <div key={index} className="relative">
                  <img src={src} alt={`${category.title} ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};