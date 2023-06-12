import { React, useEffect } from "react";
import { TopSection } from "./HomePageSections/TopSection";
import { SecScetion } from "./HomePageSections/SecSection";
import { ThirdSection } from "./HomePageSections/ThirdSection";
import { FourthSection } from "./HomePageSections/FourthSection";
import { Testimony } from "./HomePageSections/Testimony";

export const Home = ({ setNavon }) => {
  useEffect(() => {
    setNavon(true);
  }, []);

  return (
    <div>
      <TopSection />
      <SecScetion />
      <ThirdSection />
      <FourthSection />
      <Testimony />
    </div>
  );
};
