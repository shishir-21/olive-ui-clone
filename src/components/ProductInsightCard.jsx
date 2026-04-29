import { motion } from "framer-motion";
import "./ProductInsightCard.css";

const positiveTags = [
  "Gluten-Free",
  "Plant-Based",
  "Organic",
  "No MSG",
  "High Fibre",
  "100% Whole Grain",
];

const negativeTags = [
  "BHA",
  "Carrageenan",
  "Sodium Benzoate",
  "Palm Oil",
  "Potassium Sorbate",
  "Xanthan Gum",
];

export default function ProductInsightCard() {
  return (
    <motion.section
      className="olive-insight-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="olive-insight-grid">
        
        {/* LEFT CONTENT */}
        <div className="olive-insight-left">
          <h3 className="olive-insight-title">
            Proactive Ingredient Filtering
          </h3>

          <ul className="olive-insight-bullets">
            <li>
              <span className="olive-insight-bullet-icon">✓</span>
              Olive flags harmful additives and controversial ingredients before
              they become mainstream concerns.
            </li>
            <li>
              <span className="olive-insight-bullet-icon">✓</span>
              Keeps you ahead of potential food safety concerns.
            </li>
            <li>
              <span className="olive-insight-bullet-icon">✓</span>
              Gives busy parents the confidence to make safer food choices.
            </li>
          </ul>
        </div>

        {/* RIGHT ANIMATION PANEL */}
        <div className="olive-tags-panel">
          <div className="tags-layer back">
            {negativeTags.map((tag, i) => (
              <span key={i} className="tag negative">
                {tag}
              </span>
            ))}
          </div>

          <div className="tags-layer middle">
            {positiveTags.map((tag, i) => (
              <span key={i} className="tag positive">
                {tag}
              </span>
            ))}
          </div>

          <div className="tags-layer front">
            {[...positiveTags, ...negativeTags].slice(0, 6).map((tag, i) => (
              <span
                key={i}
                className={`tag ${
                  positiveTags.includes(tag) ? "positive" : "negative"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}
