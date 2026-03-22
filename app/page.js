import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import HeroStats from "@/components/home/HeroStats";
import Categories from "@/components/home/Categories";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <HeroStats/>
    <Categories/>
    </>
  );
}
