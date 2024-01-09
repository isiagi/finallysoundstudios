"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { CgDetailsMore } from "react-icons/cg";
import Image from "next/image";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.scrollY);
    };
  }, []);

  return (
    <div
      className={`${
        offset > 40
          ? "fixed z-[100] w-full px-4 transition ease-in-out  h-[12vh] bg-[#AD8987] flex justify-between items-center text-red-500 border-b-[1px] border-[#ED837E]"
          : "relative z-[100] w-full px-5 transition ease-in-out  h-[12vh] bg-slate-600 flex justify-between items-center text-red-500 border-b-[1px] border-[#ED837E]"
      }`}
    >
      <div className="flex justify-between items-center md:w-auto w-full">
        <Image
          src="/images/nexus2.jpeg"
          alt=""
          width={70}
          height={70}
          style={{ objectFit: "cover" }}
        />
        <div className="md:hidden">
          {open ? (
            <div onClick={() => setOpen(!open)}>
              <ImCancelCircle className="text-3xl text-white" />
            </div>
          ) : (
            <div onClick={() => setOpen(!open)}>
              <CgDetailsMore className="text-3xl text-white" />
            </div>
          )}
        </div>
      </div>

      <ul className="md:flex hidden gap-5 font-medium text-white">
        <Link href={"/"} className="hover:text-[#ED837E]">
          <li>Home</li>
        </Link>
        <Link href={"/Academy"} className="hover:text-[#ED837E]">
          <li>Academy</li>
        </Link>
        <Link href={"/About"} className="hover:text-[#ED837E]">
          <li>About</li>
        </Link>
        <Link href={"/Services"} className="hover:text-[#ED837E]">
          <li>Service</li>
        </Link>
        <Link href={"/Contact"} className="hover:text-[#ED837E]">
          <li>Contact</li>
        </Link>
      </ul>

      {/* mobile nav */}
      <ul
        className={`
        md:hidden bg-[#0B1B2B] opacity-95 z-[100] flex flex-col gap-5 absolute w-full top-[calc(100%+0vh)] overflow-y-auto py-12 font-medium pl-4
        duration-700 text-white ${open ? "left-0" : "left-[-100%]"}
        `}
      >
        <Link href="/" onClick={() => setOpen(false)}>
          <li>Home</li>
        </Link>
        <Link href={"/Academy"} onClick={() => setOpen(false)}>
          <li>Academy</li>
        </Link>
        <Link href="/About" onClick={() => setOpen(false)}>
          <li>About Us</li>
        </Link>
        <Link href="/Services" onClick={() => setOpen(false)}>
          <li>Services</li>
        </Link>
        <Link href={"/Contact"} onClick={() => setOpen(false)}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
