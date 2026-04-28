import { heroHighlights, trustStats } from "../data/siteContent";

// Hero is the first section users see with the main message and app preview
const Hero = () => {
  return (
    <section className="section hero-section" id="top">
      <div className="hero-layout">
        <div className="hero-copy">
          <span className="eyebrow">Discover Olive</span>
          <h1>The Safest Way to Shop for Groceries</h1>
          <p className="section-subtitle">
            Use the Olive Food Scanner App to quickly spot harmful ingredients,
            understand food quality, and make better choices for your family.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
            >
              Get Olive
            </a>
            <a className="button button-secondary" href="#how-it-works">
              See how it works
            </a>
          </div>

          <ul className="hero-highlights">
            {heroHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="trust-strip">
            {trustStats.map((stat) => (
              <div className="trust-item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual-wrap">
          <div className="hero-glow" />

          <div className="scanner-card card">
            <div className="scanner-card-top">
              <span className="scanner-pill">Safe to consume</span>
              <span className="scanner-score">92/100</span>
            </div>

            <h3>Organic Tomato Sauce</h3>
            <p>
              Clean ingredients, no artificial colors, and a parent-friendly
              score for a faster decision.
            </p>

            <div className="ingredient-list">
              <span>Organic Tomatoes</span>
              <span>Sea Salt</span>
              <span>Olive Oil</span>
              <span>Basil</span>
            </div>
          </div>

          <div className="phone-mockup">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="scan-badge">Scan result</div>
              <h4>Excellent choice</h4>
              <p>Olive found no major additives in this product.</p>

              <div className="score-ring">
                <span>94</span>
              </div>

              <div className="phone-tags">
                <span>Organic</span>
                <span>Low PFAS</span>
                <span>No MSG</span>
              </div>
            </div>
          </div>

          <div className="floating-note card">
            <span className="floating-note-title">Healthy family picks</span>
            <p>Compare products and choose the cleaner option in seconds.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
