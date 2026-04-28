import { appSlides, comparisonItems, pricingPlans } from "../data/siteContent";

// Pricing section - shows what makes Olive different and pricing plans
// It includes comparison bullets, price cards, and the final toxin CTA
const Pricing = () => {
  return (
    <section className="section" id="pricing">
      <div className="comparison-strip">
        <div className="section-header center-header">
          <h2>Olive Food Scanner App vs. The Rest</h2>
          <a
            className="button button-primary"
            href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
          >
            Download for iOS
          </a>
        </div>

        {/* Feature pills show what Olive includes compared with simple scanners */}
        <div className="comparison-pills">
          {comparisonItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="pricing-layout">
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

      {/* Four phone cards stand in for the app screenshots on the original page */}
      <div className="app-slide-row" aria-label="Olive app screens">
        {appSlides.map((slide, index) => (
          <article className="app-slide" key={slide}>
            <span>Slide {index + 1}</span>
            <strong>{slide}</strong>
          </article>
        ))}
      </div>

      <section className="toxin-cta">
        <h2>
          Protect Your Family
          <br />
          From Hidden Toxins
        </h2>
        <a
          className="button button-primary"
          href="https://signup.oliveapp.com/olive-onboarding/"
        >
          Sign up for Olive today
        </a>
      </section>
    </section>
  );
};

export default Pricing;
