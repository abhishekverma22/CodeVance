import React from "react";
import HeroSection from "../components/Herosection";
import About from "../components/About";
import FeaturesSection from "../components/FeatureSection";
import CreatorsSection from "../components/CreatorSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <FeaturesSection />
      <CreatorsSection/>
      <Footer/>
    </>
  );
}

export default Home;
