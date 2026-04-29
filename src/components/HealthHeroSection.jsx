import { motion } from "framer-motion";
import "./HealthBenefitsSection.css";

const IOS_APP_URL =
  "https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789";

export default function HealthHeroSection() {
  return (
    <motion.section
      id="benefits"
      className="olive-health-hero"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <div className="olive-health-hero-inner">
        <div className="olive-health-hero-grid">
          <div className="olive-health-hero-left">
            <h2>Health Benefits of Using Olive</h2>
          </div>

          <div className="olive-health-hero-right">
            <p>
              Olive proactively flags harmful ingredients and offers personalized
              recommendations, empowering you to make better choices for your
              family's health.
            </p>

            <a
              className="olive-health-ios-btn"
              href={IOS_APP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Download for iOS
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

