"use client";
import Companies from "@/components/Companies/Companies";
import Featured from "@/components/Course/Featured/Featured";
import PurpleWrapper from "@/components/Gen/PurpleWrapper";
import SectionStarter from "@/components/Gen/SectionStarter";
import HeroSection from "@/components/Hero/Hero";
import Navbar from "@/components/Nav/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto">
      <PurpleWrapper>
        <Navbar />
        <HeroSection />
      </PurpleWrapper>
      <SectionStarter>
        <Companies />
      </SectionStarter>
      <SectionStarter>
        <PurpleWrapper>
          <Featured />
        </PurpleWrapper>
      </SectionStarter>
      {/* <SectionStarter>
        <Testimonials />
      </SectionStarter> */}
    </div>
  );
}
