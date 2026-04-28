import { familyFaces } from "../data/siteContent";
import HeroPhoneShowcase from "./HeroPhoneShowcase";

// Hero section - the first thing visitors see when they land on the site
// Shows trust proof, main headline, app button, and phone preview
const Hero = () => {
  return (
    <section className="section hero-section" id="top">
      <div className="hero-copy">
        {/* Small family faces and 3k+ text match the top proof area on Olive */}
        <div className="family-proof" aria-label="Trusted by thousands of healthy families">
          <div className="face-stack">
            {familyFaces.map((face) => (
              <span
                className="face-dot"
                key={face.name}
                style={{ "--face-color": face.color }}
                title={face.name}
              >
                {/* Put selfie files in public/selfies with the names from siteContent.js */}
                <img
                  src={face.image}
                  alt={`${face.name} selfie`}
                  onError={(event) => {
                    event.currentTarget.hidden = true;
                  }}
                />
              </span>
            ))}
            <span className="family-count">3k+</span>
          </div>
          <span>Trusted by thousands of healthy families</span>
        </div>

        <h1>The Safest Way to Shop for Groceries</h1>
        <p className="section-subtitle">
          Use the Olive Food Scanner App to Instantly Eliminate Harmful
          Ingredients from Your Family's Diet and Get Expert-Backed Food
          Insights
        </p>

        <a
          className="button button-primary"
          href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
        >
          <svg className="apple-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.1 6c1.5.1 3.5 1 4.7 2.6-.9.5-2.5 1.3-2.5 3.8 0 2.4 1.8 3 2.7 3.3-.3 2.4-3 6.3-5.3 6.3-.8 0-1.3-.1-2-.3-.5-.2-.8-.2-1.2-.2-.5 0-.9.1-1.7.3-.6.1-1 .2-1.5.2C5.5 22 3 16.9 3 12.9 3 9.1 4.8 6 8.3 6c.7 0 1.3.2 2.2.7.7.3.9.4 1 .4.1 0 .3-.1 1.1-.5 1-.5 1.8-.7 2.5-.6Z" />
            <path d="M14 1a1 1 0 0 1 1 1 3 3 0 0 1-3 3 1 1 0 0 1-1-1 3 3 0 0 1 3-3Z" />
          </svg>
          Download for iOS
        </a>

        <HeroPhoneShowcase />
      </div>
    </section>
  );
};

export default Hero;
