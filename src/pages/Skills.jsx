import { motion } from "framer-motion";
import SkillsBio from "../components/about/SkillsBio";
import { AboutMeProvider } from "../context/AboutMeContext";

const Careers = () => {
  return (
    <AboutMeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <SkillsBio />
      </motion.div>
    </AboutMeProvider>
  );
};

export default Careers;
