import { motion } from "framer-motion";
import "./HealthBenefitsSection.css";

const PRODUCT_NAME = "Straus Ice Cream";
const scoreValue = 96;
const ratingLabel = "Excellent";

// images → must be inside /public/images/
const PRODUCT_LEFT_IMG = "/images/product-3.webp";
const PRODUCT_CENTER_IMG = "/images/product-pack.png";
const PRODUCT_RIGHT_IMG = "/images/product-2.webp";
const PRODUCT_ICON_IMG = "/images/product-icon.png";

export default function NutritionCardSection() {
  return (
    <motion.section
      className="olive-nutrition-wrap"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="olive-nutrition-card">
        <div className="olive-nutrition-grid">

          {/* LEFT SIDE */}
          <div className="olive-nutrition-left">
            <h3>Achieve Nutritional Clarity</h3>

            <ul className="olive-benefits-bullets">
              <li>
                <span className="olive-benefits-check">✓</span>
                Olive breaks down every ingredient into clear insights.
              </li>
              <li>
                <span className="olive-benefits-check">✓</span>
                Scores products out of 100 based on quality.
              </li>
              <li>
                <span className="olive-benefits-check">✓</span>
                Helps you make smarter food decisions.
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="olive-nutrition-product">

            {/* IMAGE STACK */}
            <div className="olive-mini-pack">
              <img
                src={PRODUCT_LEFT_IMG}
                alt="Honey Mama's product"
                className="olive-mini-pack-item left"
              />
              <img
                src={PRODUCT_CENTER_IMG}
                alt={PRODUCT_NAME}
                className="olive-mini-pack-item center"
              />
              <img
                src={PRODUCT_RIGHT_IMG}
                alt="Olipop Strawberry Vanilla"
                className="olive-mini-pack-item right"
              />
            </div>

            {/* PRODUCT CARD */}
            <div className="olive-mini-scorebar">
              <img src={PRODUCT_ICON_IMG} alt="" />

              <div>
                <div className="olive-mini-title">{PRODUCT_NAME}</div>
                <div className="olive-mini-score">
                  {scoreValue}/100 <span>{ratingLabel}</span>
                </div>
              </div>
            </div>

            {/* SKELETON PANELS */}
            <div className="olive-mini-tagsgrid">

              {/* POSITIVES */}
              <div className="olive-mini-panel">
                <div className="olive-mini-panel-header good">
                  ✓ Positives
                </div>

                <div className="olive-skeleton-grid">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span key={i} className="olive-skeleton-pill" />
                  ))}
                </div>
              </div>

              {/* NEGATIVES */}
              <div className="olive-mini-panel">
                <div className="olive-mini-panel-header bad">
                  ✕ Negatives
                </div>

                <div className="olive-skeleton-grid">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span key={i} className="olive-skeleton-pill" />
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </motion.section>
  );
}
