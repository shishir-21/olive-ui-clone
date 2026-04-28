import { heroHighlights, trustStats } from "../data/siteContent";

// Hero section - the first thing visitors see when they land on the site
// Shows main headline, description, and call-to-action buttons
const Hero = () => {
  return (
    <section className="section hero-section" id="top">
      <div className="hero-layout">
        {/* Left side - text content and buttons */}
        <div className="hero-copy">
          <span className="eyebrow">Discover Olive</span>
          <h1>The Safest Way to Shop for Groceries</h1>
          <p className="section-subtitle">
            Use the Olive Food Scanner App to instantly eliminate harmful ingredients from your family's diet and get expert-backed food insights.
          </p>

          <div className="hero-actions">
            {/* Main download button and secondary "learn more" button */}
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

          {/* Three main features that make Olive special */}
          <ul className="hero-highlights">
            {heroHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* Social proof - statistics showing trust and scale */}
          <div className="trust-strip">
            {trustStats.map((stat) => (
              <div className="trust-item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - visual mockups showing the app in action */}
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
