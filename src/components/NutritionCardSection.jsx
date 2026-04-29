import { motion } from "framer-motion";
import { goodTags, warningTags } from "../data/siteContent";
import "./HealthBenefitsSection.css";

// Using the exact Straus assets you provided in the attachments.
// (Vite will bundle them during build.)
import PRODUCT_PACK_IMG from "../../../../../.cursor/projects/c-Users-Shishir-OneDrive-Desktop-olive-ui-clone/assets/c__Users_Shishir_AppData_Roaming_Cursor_User_workspaceStorage_f234cff710a15493094d9db1b5c10c9a_images_product-3__1_-c030471b-c340-4091-ad34-eb8e7103bc60.png";
import PRODUCT_ICON_IMG from "../../../../../.cursor/projects/c-Users-Shishir-OneDrive-Desktop-olive-ui-clone/assets/c__Users_Shishir_AppData_Roaming_Cursor_User_workspaceStorage_f234cff710a15493094d9db1b5c10c9a_images_straus-ice-cream-description-341ae450-6385-4042-be94-0068411a0d71.png";

const PRODUCT_NAME = "Straus Ice Cream";
const scoreValue = 96;
const ratingLabel = "Excellent";

export default function NutritionCardSection() {
  const positives = goodTags.slice(0, 7);
  const negatives = warningTags.slice(0, 7);

  return (
    <motion.div
      className="olive-nutrition-wrap"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <div className="olive-nutrition-card">
        <div className="olive-nutrition-grid">
          <div className="olive-nutrition-left">
            <h3>Achieve Nutritional Clarity</h3>

            <ul className="olive-benefits-bullets">
              <li>
                <span className="olive-benefits-check" aria-hidden="true">
                  ✓
                </span>
                <strong>
                  Olive breaks down every ingredient into clear, actionable
                  information.
                </strong>
              </li>
              <li>
                <span className="olive-benefits-check" aria-hidden="true">
                  ✓
                </span>
                <strong>
                  Olive scores products out of 100 based on additives,
                  seedoils, processing level, and detected toxins.
                </strong>
              </li>
              <li>
                <span className="olive-benefits-check" aria-hidden="true">
                  ✓
                </span>
                <strong>
                  Our ranking system is designed by registered holistic health
                  experts, ensuring you and your family make informed decisions
                  and improve health outcomes.
                </strong>
              </li>
            </ul>
          </div>

          <div className="olive-nutrition-product" aria-label="Product score card">
            <div className="olive-mini-pack">
              <img
                src={PRODUCT_PACK_IMG}
                alt={`${PRODUCT_NAME} product pack`}
              />
            </div>

            <div className="olive-mini-scorebar">
              <div className="olive-mini-scorebar-icon">
                <img src={PRODUCT_ICON_IMG} alt="" aria-hidden="true" />
              </div>

              <div className="olive-mini-scorebar-text">
                <div className="olive-mini-scorebar-title">
                  {PRODUCT_NAME}
                </div>
                <div className="olive-mini-scorebar-line">
                  <span className="olive-mini-scorebar-score">
                    {scoreValue}/100
                  </span>
                  <span className="olive-mini-scorebar-rating">
                    {ratingLabel}
                  </span>
                </div>
              </div>
            </div>

            <div className="olive-mini-tagsgrid" role="group" aria-label="Product signals">
              <div className="olive-mini-panel olive-mini-panel--good">
                <div className="olive-mini-panel-header">
                  <span className="olive-mini-panel-header-icon olive-mini-panel-header-icon--good" aria-hidden="true">
                    ✓
                  </span>
                  <span className="olive-mini-panel-header-title">Positives</span>
                </div>

                <div className="olive-mini-chip-list" aria-hidden="true">
                  {positives.map((t) => (
                    <span
                      key={t}
                      className="olive-mini-chip"
                      title={t}
                      aria-label={t}
                    />
                  ))}
                </div>
              </div>

              <div className="olive-mini-panel olive-mini-panel--bad">
                <div className="olive-mini-panel-header">
                  <span className="olive-mini-panel-header-icon olive-mini-panel-header-icon--bad" aria-hidden="true">
                    ×
                  </span>
                  <span className="olive-mini-panel-header-title">Negatives</span>
                </div>

                <div className="olive-mini-chip-list" aria-hidden="true">
                  {negatives.map((t) => (
                    <span
                      key={t}
                      className="olive-mini-chip olive-mini-chip--bad"
                      title={t}
                      aria-label={t}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

