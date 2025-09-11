"use client";
import { SentenseCase } from "@/utils/helpers";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navLinks = ["home", "about", "projects", "contact"];

  return (
    <>
      <header className="z-40 sticky top-0 px-8 py-2 lg:px-16 items-center font-medium bg-background">
        <div className="flex items-center justify-between">
          <h1 className="rounded-full border-[2px] p-[2px] dark:border-white  w-10 h-10 flex items-center justify-center active">
            <Link href={"/"}>
              <p className="font-bold text-primary text-lg">F.O</p>
            </Link>
          </h1>
          <span className="md:hidden" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <span className="text-6xl font-normal cursor-pointer select-none">
                &times;
              </span>
            ) : (
              <HiMenuAlt2 size={30} />
            )}
          </span>
          <nav className="hidden md:flex items-center gap-9">
            <ul className="flex items-center gap-12">
              {navLinks.map((link) => (
                <li key={link}>
                  <Link href={`#${link}`} className={"font-bold"}>
                    {SentenseCase(link)}
                  </Link>
                </li>
              ))}
            </ul>
            <span className="rounded-full shadow-inner p-1 hover:shadow-lg">
              <MdDarkMode size={25} />
            </span>
          </nav>
        </div>
      </header>
      {/* Mobile Menu */}
      <nav
        className={`transition-transform transform duration-300 ease-in-out fixed z-30 h-screen w-full flex items-center justify-center md:hidden  bg-background ${
          isMobile ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={() => setIsMobile(false)}
      >
        <div className="flex flex-col items-center justify-center text-center gap-9">
          <ul className="space-y-10">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={`#${link}`}
                  className={"text-primary font-bold"}
                  onClick={() => setIsMobile(false)}
                >
                  {SentenseCase(link)}
                </Link>
              </li>
            ))}
          </ul>
          <span className="rounded-full shadow-inner p-1 hover:shadow-lg">
            <MdDarkMode size={25} />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
