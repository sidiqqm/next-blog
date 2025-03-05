import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className="">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
