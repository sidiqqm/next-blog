import Link from "next/link";
import React from "react";

const Popular = () => {
  return (
    <div className="flex flex-col gap-2">
      <Link
        href="/travel"
        className="cursor-pointer px-4 py-1 w-max bg-orange-300 rounded-full text-sm"
      >
        Travel
      </Link>
      <Link href="/">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className="text-[--softTextColor]">
          John Doe - <span className="text-red-500">01.09.2025</span>
        </p>
      </Link>
    </div>
  );
};

export default Popular;
