import { React, useState } from "react";
import { TopSection } from "./HomePageSections/TopSection";
import { SecScetion } from "./HomePageSections/SecSection";
import { ThirdSection } from "./HomePageSections/ThirdSection";
import { FourthSection } from "./HomePageSections/FourthSection";
import { Testimony } from "./HomePageSections/Testimony";
import { motion } from "framer-motion";
export const Home = () => {
  return (
    <motion.div>
      <TopSection />
      <SecScetion />
      <ThirdSection />
      <FourthSection />
      <Testimony />
    </motion.div>
  );
};
