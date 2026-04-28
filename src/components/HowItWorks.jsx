import { howItWorksSteps } from "../data/siteContent";

// HowItWorks section - shows the three simple steps of using Olive app
// Each step is displayed as a card with a number, title, and description
const HowItWorks = () => {
  return (
    <section className="section" id="how-it-works">
      {/* Section header with title and intro text */}
      <div className="section-header">
        <span className="eyebrow">How Olive works</span>
        <h2>Simple steps for safer grocery shopping</h2>
        <p className="section-subtitle">
          Olive makes food decisions easier with a quick scan, a trusted
          ingredient review, and clear next steps.
        </p>
      </div>

      {/* Grid showing all three steps - Loop through each step and create a card */}
      <div className="steps-grid">
        {howItWorksSteps.map((step, index) => (
          <article className="step-card card" key={step.title}>
            <span className="step-number">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
