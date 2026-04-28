import { comparisonItems, pricingPlans } from "../data/siteContent";

// Pricing section - shows what makes Olive different and pricing plans
// Left side: comparison showing Olive's advantages
// Right side: two subscription options (monthly and yearly)
const Pricing = () => {
  return (
    <section className="section" id="pricing">
      <div className="pricing-layout">
        {/* Left column - comparison showing Olive advantages */}
        <article className="comparison-panel card">
          <span className="eyebrow">Olive vs. the rest</span>
          <h2>Healthy choices with honest pricing</h2>
          <p className="section-subtitle">
            Olive focuses on ingredient safety, clear product scores, and
            practical recommendations for everyday families.
          </p>

          {/* List of features that make Olive unique */}
          <ul className="comparison-list">
            {comparisonItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        {/* Right column - pricing plans with subscribe buttons */}
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
                Choose {plan.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
