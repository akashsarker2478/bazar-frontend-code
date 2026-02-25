import FlashDeal from "@/Components/FlashDeal";
import Navbar from "@/Components/Navbar";
import PopularCategories from "@/Components/PopularCategories";
import WhyShopWithUs from "@/Components/WhyShopWithUs";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <FlashDeal></FlashDeal>
    <PopularCategories></PopularCategories>
    <WhyShopWithUs></WhyShopWithUs>
   </div>
  );
}
