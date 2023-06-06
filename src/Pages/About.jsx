import React from "react";
import { TopSectionAbout } from "./AboutPageSection.jsx/TopSectionAbout";
import { SecScetionAbout } from "./AboutPageSection.jsx/SecSectionAbout";
import { motion } from "framer-motion";
export const About = () => {
  return (
    <motion.div>
      <TopSectionAbout />
      <SecScetionAbout />
    </motion.div>
  );
};
