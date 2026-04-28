import { motion } from "framer-motion";
import { howItWorksSteps, recipeSuggestions } from "../data/siteContent";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] },
  },
};

const InsightCard = () => {
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
      <h3>{howItWorksSteps[2].title}</h3>

      <motion.div
        className="insight-stack"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src="/images/product-1.webp" alt="" className="stack-card back-left" />
        <img src="/images/product-5.webp" alt="" className="stack-card back-right" />
        <img src="/images/insight-front.png" alt="Recommended product insight card" className="stack-card front" />
      </motion.div>

      <span className="insight-caption">{recipeSuggestions[1]}</span>
      <p>{howItWorksSteps[2].description}</p>
    </motion.article>
  );
};

export default InsightCard;
