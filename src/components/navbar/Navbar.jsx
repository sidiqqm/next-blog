"use client";
import Image from "next/image";
import React, { useState } from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-7 px-5 fixed top-0 left-0 w-full z-50 shadow-md bg-[var(--bg)] text-[var(--textColor)]">
      <div className="flex gap-1">
        <Image src="/facebook.png" width={24} height={24} alt="facebook" className="lg:w-8" />
        <Image src="/instagram.png" width={24} height={24} alt="instagram" className="lg:w-8" />
        <Image src="/tiktok.png" width={24} height={24} alt="tiktok" className="lg:w-8"/>
        <Image src="/youtube.png" width={24} height={24} alt="youtube" className="lg:w-8"/>
      </div>
      <div className="flex">
        <h1 className="font-bold text-2xl xl:text-3xl">BlogApp</h1>
      </div>
      <div className="flex gap-5">
        <ThemeToggle />
        <div className="hidden md:flex gap-5">
          <Link href="/" className="text-lg font-semibold">Home</Link>
          <Link href="/contact" className="text-lg font-semibold">Contact</Link>
          <Link href="/about" className="text-lg font-semibold">About</Link>
        </div>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
