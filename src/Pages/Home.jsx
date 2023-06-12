import { React, useEffect } from "react";
import { TopSection } from "./HomePageSections/TopSection";
import { SecScetion } from "./HomePageSections/SecSection";
import { ThirdSection } from "./HomePageSections/ThirdSection";
import { FourthSection } from "./HomePageSections/FourthSection";
import { Testimony } from "./HomePageSections/Testimony";

import { motion } from "framer-motion";

export const Home = ({ setNavon }) => {
  useEffect(() => {
    setNavon(true);
  }, []);

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
