import { comparisonItems, pricingPlans } from "../data/siteContent";

const Pricing = () => {
  return (
    <section className="section" id="pricing">
      <div className="pricing-layout">
        <article className="comparison-panel card">
          <span className="eyebrow">Olive vs. the rest</span>
          <h2>Healthy choices with honest pricing</h2>
          <p className="section-subtitle">
            Olive focuses on ingredient safety, clear product scores, and
            practical recommendations for everyday families.
          </p>

          <ul className="comparison-list">
            {comparisonItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article
              className={`pricing-card card${plan.highlight ? " pricing-card--featured" : ""}`}
              key={plan.name}
            >
              {plan.badge && <span className="pricing-badge">{plan.badge}</span>}
              <h3>{plan.name}</h3>
              <div className="pricing-value">
                <strong>{plan.price}</strong>
                <span>{plan.period}</span>
              </div>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

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
