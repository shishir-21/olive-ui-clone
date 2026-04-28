import { motion } from "framer-motion";
import { howItWorksSteps } from "../data/siteContent";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatingParticles = [
  { top: "22%", left: "18%", delay: "0s" },
  { top: "66%", left: "72%", delay: "0.8s" },
  { top: "34%", left: "78%", delay: "1.3s" },
  { top: "74%", left: "24%", delay: "2s" },
];

const ScanCard = () => {
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
      <h3>{howItWorksSteps[0].title}</h3>

      <div className="scan-figure" aria-label="Barcode scan preview">
        <img src="/images/barcode-image.webp" alt="Avocado with barcode sticker" />
        <span className="scan-line-feature" aria-hidden="true" />
        <span className="scan-corner-feature tl" aria-hidden="true" />
        <span className="scan-corner-feature tr" aria-hidden="true" />
        <span className="scan-corner-feature bl" aria-hidden="true" />
        <span className="scan-corner-feature br" aria-hidden="true" />

        {floatingParticles.map((dot) => (
          <span
            key={`${dot.top}-${dot.left}`}
            className="scan-particle-feature"
            style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
            aria-hidden="true"
          />
        ))}
      </div>

      <p>{howItWorksSteps[0].description}</p>
    </motion.article>
  );
};

export default ScanCard;
