import React from "react";
import { TopSectionService } from "./ServicePageSection/TopSectionService";
import { motion } from "framer-motion";
export const ServicePage = () => {
  return (
    <motion.div>
      <TopSectionService />
    </motion.div>
  );
};
