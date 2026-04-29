import { pricingPlans } from "../data/siteContent";

// Pricing section - shows what makes Olive different and pricing plans
// It includes comparison bullets, price cards, and the final toxin CTA
const Pricing = () => {
  const showcaseSlides = [
    "/images/showcase-slide-1.png",
    "/images/showcase-slide-2.png",
    "/images/showcase-slide-3.png",
    "/images/showcase-slide-4.png",
  ];
  const showcaseLoopSlides = [...showcaseSlides, showcaseSlides[0]];

  const comparisonMatrix = [
    { item: "Detailed Product Breakdown", values: [true, true, true] },
    { item: "Comprehensive Water Data", values: [true, false, false] },
    { item: "Seed Oil Free Dining Map", values: [true, false, false] },
    { item: "Seed Oil Flagging", values: [true, false, true] },
    { item: "Certified Lab-Testing Data", values: [true, false, false] },
  ];

  return (
    <section className="section" id="pricing">
      <div className="comparison-strip">
        <div className="comparison-board">
          <div className="comparison-header section-header center-header">
            <h2>Olive Food Scanner App vs. The Rest</h2>
            <a
              className="button comparison-download-btn"
              href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
            >
              Download for iOS
            </a>
          </div>

          <div className="comparison-grid" role="table" aria-label="Feature comparison table">
            <div className="comparison-grid-row comparison-grid-head" role="row">
              <div className="comparison-cell feature-col" role="columnheader" />
              <div className="comparison-cell value-col" role="columnheader">
                <img src="/images/avocado-icon.png" alt="Olive" className="comparison-brand-icon" />
              </div>
              <div className="comparison-cell value-col" role="columnheader">
                <span className="comparison-brand-emoji" aria-hidden="true">🥕</span>
              </div>
              <div className="comparison-cell value-col" role="columnheader">
                <span className="comparison-brand-badge" aria-hidden="true">B</span>
              </div>
            </div>

            {comparisonMatrix.map((row) => (
              <div className="comparison-grid-row" role="row" key={row.item}>
                <div className="comparison-cell feature-col" role="cell">{row.item}</div>
                {row.values.map((value, idx) => (
                  <div className="comparison-cell value-col" role="cell" key={`${row.item}-${idx}`}>
                    <span className={`comparison-mark ${value ? "is-yes" : "is-no"}`}>
                      {value ? "✓" : "✕"}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pricing-layout">
        <img
          src="/images/pricing-olive-new.png"
          alt=""
          className="pricing-floating-olive"
          aria-hidden="true"
        />
        <div className="pricing-title">
          <h2>
            Healthy Choices
            <br />
            Honest Pricing
          </h2>
        </div>

        {/* Pricing plans with subscribe buttons */}
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article
              className={`pricing-card card${plan.highlight ? " pricing-card--featured" : ""}`}
              key={plan.name}
            >
              {/* Badge for special plans like "Best value" */}
              {plan.badge && <span className="pricing-badge">{plan.badge}</span>}
              <h3>{plan.name}</h3>
              
              {/* Price display with currency and billing period */}
              <div className="pricing-value">
                <strong>{plan.price}</strong>
                {plan.name === "yearly" && <s>$179.88</s>}
                <span>{plan.period}</span>
              </div>

              {/* Features included in this plan */}
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              {/* Subscribe button for this plan */}
              <a
                className={`button ${plan.highlight ? "button-primary" : "button-secondary"}`}
                href="https://signup.oliveapp.com/olive-onboarding/"
              >
                Subscribe
              </a>
            </article>
          ))}
        </div>
      </div>

      <section className="protection-showcase">
        <div className="showcase-slider-window" aria-label="Healthy food lifestyle gallery">
          <div className="showcase-slider-track">
            {showcaseLoopSlides.map((src, index) => (
              <article className="showcase-slide-item" key={`${src}-${index}`}>
                <img src={src} alt="Healthy food and family lifestyle" />
              </article>
            ))}
          </div>
        </div>

        <div className="showcase-dots" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <h2>
          Protect Your Family
          <br />
          From Hidden Toxins
        </h2>
        <a
          className="button button-secondary"
          href="https://signup.oliveapp.com/olive-onboarding/"
        >
          Sign up for Olive today
        </a>
      </section>

      <section className="independent-pledge">
        <h2>
          100% Independent.
          <br />
          Always.
        </h2>
        <p>
          We <span>never monetize</span> through brand deals, affiliate links, or
          ads - so you can trust our recommendations are always aligned with our
          users.
        </p>
      </section>
    </section>
  );
};

export default Pricing;
