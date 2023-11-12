import { motion } from "framer-motion";
import CareersBio from "../components/about/CareersBio";
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
        <CareersBio />
      </motion.div>
    </AboutMeProvider>
  );
};

export default Careers;
