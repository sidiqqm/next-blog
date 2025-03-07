import React from "react";
import Pagination from "../pagination/Pagination";
import Card from "../Card/Card";

const CardList = () => {
  return (
    <div className="flex-[5]">
      <h1 className="my-8 font-semibold text-2xl">Recent Post</h1>
      <div className="">
        <Card />
      </div>
    </div>
  );
};

export default CardList;
