import React from "react";
import Popular from "../popular/Popular";

const Menu = () => {
  return (
    <div className="flex-[2]">
      <div className="my-6">
        <h2 className="text-lg text-[--softTextColor]">What's hot</h2>
        <h1 className="text-2xl font-semibold">Most Popular</h1>
      </div>
      <div className="flex flex-col gap-8">
        <Popular />
        <Popular />
        <Popular />
        <Popular />
      </div>
    </div>
  );
};

export default Menu;
