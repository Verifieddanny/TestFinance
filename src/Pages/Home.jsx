import { React, useState } from "react";
import { TopSection } from "./HomePageSections/TopSection";
import { SecScetion } from "./HomePageSections/SecSection";
import { ThirdSection } from "./HomePageSections/ThirdSection";
import { FourthSection } from "./HomePageSections/FourthSection";
import { Testimony } from "./HomePageSections/Testimony";

export const Home = () => {
  return (
    <>
      <TopSection />
      <SecScetion />
      <ThirdSection />
      <FourthSection />
      <Testimony />
    </>
  );
};
