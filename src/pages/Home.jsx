import React from "react";
import HeroSection from "../components/Herosection";
import About from "../components/About";
import FeaturesSection from "../components/FeatureSection";
import CreatorsSection from "../components/CreatorSection";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <FeaturesSection />
      <CreatorsSection/>
    </>
  );
}

export default Home;
