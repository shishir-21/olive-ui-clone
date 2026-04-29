import { motion } from "framer-motion";
import "./ProductInsightCard.css";

const positiveTags = [
  "Gluten-Free",
  "Plant-Based",
  "Organic Ingredients",
  "No MSG",
  "High Fibre",
  "100% Whole Grain",
  "Cholesterol-Free",
  "Low PFAS",
  "Rich in Antioxidants",
  "Non-GMO",
];

const negativeTags = [
  "Artificial Colors",
  "Sodium Nitrite",
  "TBHQ",
  "BHA",
  "Carrageenan",
  "Sodium Benzoate",
  "Palm Oil",
  "Potassium Bromate",
  "Xanthan Gum",
  "Saccharin",
  "Aspartame",
];

const Tag = ({ label, type }) => (
  <div className={`tag ${type}`}>
    <div className="tag-icon">{type === "positive" ? "✓" : "✕"}</div>
    <span>{label}</span>
  </div>
);

const rowConfig = [
  { id: "row1", type: "positive", tags: positiveTags, reverse: false, speed: 16, top: 10, offset: -30 },
  { id: "row2", type: "positive", tags: positiveTags, reverse: true, speed: 18, top: 24, offset: -8 },
  { id: "row3", type: "negative", tags: negativeTags, reverse: false, speed: 20, top: 38, offset: -42 },
  { id: "row4", type: "negative", tags: negativeTags, reverse: true, speed: 22, top: 52, offset: -16 },
  { id: "row5", type: "negative", tags: negativeTags, reverse: false, speed: 24, top: 66, offset: -36 },
];

export default function ProductInsightCard() {
  return (
    <motion.section
      className="olive-insight-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="olive-insight-grid">

        {/* LEFT */}
        <div>
          <h3 className="olive-insight-title">
            Proactive Ingredient Filtering
          </h3>

          <ul className="olive-insight-bullets">
            <li><span className="olive-insight-bullet-icon">✓</span> Olive flags harmful additives...</li>
            <li><span className="olive-insight-bullet-icon">✓</span> Keeps you ahead of food safety concerns.</li>
            <li><span className="olive-insight-bullet-icon">✓</span> Helps you make safer food choices.</li>
          </ul>
        </div>

        {/* RIGHT PANEL */}
        <div className="olive-tags-panel">
          {rowConfig.map((row) => {
            const seamless = [...row.tags, ...row.tags, ...row.tags];
            return (
              <div
                key={row.id}
                className={`marquee-row ${row.reverse ? "reverse" : ""}`}
                style={{ "--row-top": `${row.top}%`, "--row-offset": `${row.offset}%` }}
              >
                <div
                  className="marquee-track"
                  style={{ "--speed": `${row.speed}s` }}
                >
                  {seamless.map((tag, i) => (
                    <Tag key={`${row.id}-a-${i}`} label={tag} type={row.type} />
                  ))}
                </div>
                <div
                  className="marquee-track"
                  aria-hidden="true"
                  style={{ "--speed": `${row.speed}s` }}
                >
                  {seamless.map((tag, i) => (
                    <Tag key={`${row.id}-b-${i}`} label={tag} type={row.type} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
