"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Hindari render sebelum mount

  return (
    <div
      className={`flex w-11 h-6 cursor-pointer rounded-2xl justify-between items-center relative px-0.5 transition-colors ${
        theme === "dark" ? "bg-white" : "bg-slate-900"
      }`}
      onClick={toggle}
    >
      <Image src="/moon.png" width={16} height={16} alt="moon" />
      <div
        className={`bg-white w-4 h-4 rounded-full absolute transition-all ${
          theme === "dark" ? "left-1 bg-slate-900" : "right-1 bg-white"
        }`}
      ></div>
      <Image src="/sun.png" width={16} height={16} alt="sun" />
    </div>
  );
};

export default ThemeToggle;
