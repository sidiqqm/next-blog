import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="flex gap-8">
      <div className="flex mb-12 items-center h-[350px] w-[350px] relative flex-[5]">
        <Image src={"/p1.jpeg"} fill alt="..." />
      </div>
      <div className="flex-[4] flex flex-col gap-10">
        <div className="flex">
          <p className="text-[--softTextColor]">
            11.02.2025<span className="text-red-500"> - Culture</span>
          </p>
        </div>
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p className="text-[--softTextColor] text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          temporibus veniam veritatis fugiat repellendus possimus ullam
          voluptate id accusamus, mollitia eius natus sint! Vero, commodi?
        </p>
        <Link href="/" className="border-b border-[#DC143C] w-max font-semibold">Read more</Link>
      </div>
    </div>
  );
};

export default Card;
