import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="">
      <div className="text-center mb-10 mt-10">
        <h1 className="text-5xl mb-3"><b>Hey, BlogDev Here!</b> Discover</h1>
        <h3 className="text-5xl">my stories and creative ideas</h3>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex-1 h-[500px] relative">
          <Image
            src="/p1.jpeg"
            alt="..."
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, sint?
          </h2>
          <p className="text-md mb-6 text-justify max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            doloribus? Doloribus vero enim odio, quia totam esse inventore
            mollitia cupiditate veritatis assumenda numquam dolore voluptas quo
            provident iusto atque ipsam?
          </p>
          <button className="text-sm font-semibold px-5 py-3 rounded-lg" style={{ backgroundColor: "var(--textColor)", color: "var(--bg)" }}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
