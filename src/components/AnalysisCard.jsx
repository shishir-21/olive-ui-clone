import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { howItWorksSteps } from "../data/siteContent";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
  },
};

const products = [
  { id: "p1", src: "/images/product-1.webp", alt: "Product card 1" },
  { id: "p2", src: "/images/product-2.webp", alt: "Product card 2" },
  { id: "p3", src: "/images/product-3.webp", alt: "Highlighted product in analysis" },
  { id: "p4", src: "/images/product-4.webp", alt: "Product card 4" },
  { id: "p5", src: "/images/product-5.webp", alt: "Product card 5" },
];

const getRelativeOffset = (index, activeIndex, total) => {
  const direct = index - activeIndex;
  if (direct > total / 2) return direct - total;
  if (direct < -total / 2) return direct + total;
  return direct;
};

const AnalysisCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // One active index drives focus/blur/scale for every product.
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

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

      <div className="analysis-focus" aria-label="Auto sliding product analysis">
        {products.map((product, index) => {
          const relativeOffset = getRelativeOffset(index, activeIndex, products.length);
          const isCenter = relativeOffset === 0;
          const isNear = Math.abs(relativeOffset) === 1;

          return (
            <img
              key={product.id}
              src={product.src}
              alt={product.alt}
              className={[
                "analysis-card",
                isCenter ? "is-center" : "",
                isNear ? "is-near" : "is-far",
              ].join(" ")}
              style={{
                transform: `translateX(${relativeOffset * 54}px) scale(${isCenter ? 1 : isNear ? 0.88 : 0.78})`,
                opacity: isCenter ? 1 : isNear ? 0.56 : 0,
                zIndex: 20 - Math.abs(relativeOffset),
              }}
            />
          );
        })}
      </div>

      <span className="analysis-pill">Safe to consume</span>
      <p>{howItWorksSteps[1].description}</p>
    </motion.article>
  );
};

export default AnalysisCard;
