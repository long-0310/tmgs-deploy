import React from "react";
import HeroAboutUs from "./_components/HeroSection/HeroBanner";
import IntroSection from "./_components/IntroSection/IntroSection";
import WhyChooseUs from "./_components/WhyChooseUs/WhyChooseUs";
import Infomation from "../(home-page)/_components/InfomationSection/Infomation";

const AboutUs = () => {
  return (
    <div>
      <HeroAboutUs />
      <IntroSection />
      <WhyChooseUs />
      <Infomation />
    </div>
  );
};

export default AboutUs;
