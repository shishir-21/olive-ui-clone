import FeatureSection from "./FeatureSection";

// HowItWorks section - shows the three simple steps of using Olive app
// Each step has a visual panel so the page feels close to the live site
const HowItWorks = () => {
  return (
    <section className="section" id="how-it-works">
      {/* Section title follows the short heading used on Olive */}
      <div className="section-header center-header">
        <div className="how-title">
          <h2>
            <span>How the Olive Food</span>
            <span>Scanner App Works</span>
          </h2>
          <img src="/images/avocado-icon.png" alt="" aria-hidden="true" />
        </div>
      </div>

      <FeatureSection />
    </section>
  );
};

export default HowItWorks;
