import Image from "next/image";
import React from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="flex flex-1 gap-1">
        <Image src="/facebook.png" width={24} height={24} alt="facebook" />
        <Image src="/instagram.png" width={24} height={24} alt="instagram" />
        <Image src="/tiktok.png" width={24} height={24} alt="tiktok" />
        <Image src="/youtube.png" width={24} height={24} alt="youtube" />
      </div>
      <div className="flex flex-1">
        <h1 className="font-bold text-2xl">BlogApp</h1>
      </div>
      <div className="flex flex-1 gap-5">
        <ThemeToggle/>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
