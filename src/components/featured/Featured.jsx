import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="mt-28">
      <div className="text-center mb-10 mt-10">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl xl:mb-3"><b>Hey, BlogDev Here!</b></h1>
        <h3 className="text-2xl lg:text-4xl xl:text-5xl">Discover my stories and creative ideas</h3>
      </div>
      <div className="flex items-center justify-center gap-5 lg:gap-8">
        <div className="flex-1 h-[420px] lg:h-[500px] relative">
          <Image
            src="/p1.jpeg"
            alt="..."
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-lg xl:text-2xl font-bold mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, sint?
          </h2>
          <p className="text-sm xl:text-md xl:max-w-sm mb-6 text-justify text-slate-600">
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
