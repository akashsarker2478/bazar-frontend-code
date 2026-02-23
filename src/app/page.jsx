import Navbar from "@/Components/Navbar";
import PopularCategories from "@/Components/PopularCategories";
import WhyShopWithUs from "@/Components/WhyShopWithUs";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    
    <PopularCategories></PopularCategories>
    <WhyShopWithUs></WhyShopWithUs>
   </div>
  );
}
