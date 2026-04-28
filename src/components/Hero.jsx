import { familyFaces, groceryProducts } from "../data/siteContent";
import HeroPhoneShowcase from "./HeroPhoneShowcase";

// Hero section - the first thing visitors see when they land on the site
// Shows trust proof, main headline, app button, and moving grocery product cards
const Hero = () => {
  // Duplicate products so the strip can look full like the original page
  const repeatedProducts = [...groceryProducts, ...groceryProducts];

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
          <span className="apple-mark" aria-hidden="true" />
          Download for iOS
        </a>

        <HeroPhoneShowcase />
      </div>

      {/* Product rows create the grocery wall under the hero heading */}
      <div className="product-marquee" aria-label="Grocery products Olive can scan">
        {[0, 1, 2].map((row) => (
          <div className="product-row" key={row}>
            {repeatedProducts.map((product, index) => (
              <article className="product-tile" key={`${row}-${product}-${index}`}>
                <div className="product-pack">
                  <span>{product.slice(0, 2)}</span>
                </div>
                <p>{product}</p>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
