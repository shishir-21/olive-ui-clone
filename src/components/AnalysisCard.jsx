import { motion } from "framer-motion";
import { howItWorksSteps } from "../data/siteContent";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
  },
};

const AnalysisCard = () => {
  return (
    <motion.article
      className="feature-card"
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{howItWorksSteps[1].title}</h3>

      <motion.div
        className="analysis-focus"
        initial={{ scale: 0.95, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img src="/images/product-2.webp" alt="" className="analysis-card side-left" />
        <img src="/images/product-4.webp" alt="" className="analysis-card side-right" />
        <img src="/images/product-3.webp" alt="Highlighted product in analysis" className="analysis-card center" />
      </motion.div>

      <span className="analysis-pill">Safe to consume</span>
      <p>{howItWorksSteps[1].description}</p>
    </motion.article>
  );
};

export default AnalysisCard;
