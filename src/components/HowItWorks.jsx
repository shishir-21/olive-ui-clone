import FeatureSection from "./FeatureSection";

// HowItWorks section - shows the three simple steps of using Olive app
// Each step has a visual panel so the page feels close to the live site
const HowItWorks = () => {
  return (
    <section className="section" id="how-it-works">
      {/* Section title follows the short heading used on Olive */}
      <div className="section-header center-header">
        <h2>How the Olive Food Scanner App Works</h2>
      </div>

      <FeatureSection />
    </section>
  );
};

export default HowItWorks;
