import Banner from "@/components/Banner";
import BenefitSection from "@/components/BenefitSection";
import HeroSection from "@/components/HeroSection";
import Review from "@/components/Review";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-[100px] flex flex-col items-center justify-center ">
      <HeroSection/>
      <Image src="/im1.png" alt="" width={900} height={400} className="objext-cover"/>
      <Image src="/im4.svg" alt="" width={860} height={112} className="object-cover hidden md:block "/>
      <Image src="/im5.svg" width={360} height={260} alt="" className="object-cover md:hidden block " />
      <BenefitSection/>
      <Review/>
      <Banner/>
    </div>
  );
}
