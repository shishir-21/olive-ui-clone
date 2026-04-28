import {
  goodTags,
  insightCards,
  outcomes,
  warningTags,
} from "../data/siteContent";

// Benefits section - shows the health benefits and real outcomes of using Olive
// It mirrors the live page with benefit text, scoring UI, and ingredient chips
const Benefits = () => {
  return (
    <section className="section" id="benefits">
      {/* Section header explaining why Olive helps families */}
      <div className="section-header center-header">
        <h2>Health Benefits of Using Olive</h2>
        <p className="section-subtitle">
          Olive proactively flags harmful ingredients and offers personalized
          recommendations, empowering you to make better choices for your
          family's health.
        </p>
        <a
          className="button button-primary"
          href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
        >
          Download for iOS
        </a>
      </div>

      {/* Two column layout: cards on left, score example on right */}
      <div className="grid-two benefits-grid">
        {/* Left column - Two insight cards about Olive's main benefits */}
        <div className="benefit-stack">
          {insightCards.map((card) => (
            <article className="benefit-card card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>

              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Right column - Example score card showing how a product is rated */}
        <div className="benefit-side">
          <article className="score-panel card">
            <div className="score-panel-top">
              <div>
                <span className="mini-label">Product score</span>
                <h3>Straus Ice Cream</h3>
              </div>
              <div className="big-score">
                <strong>90</strong>
                <span>/100</span>
              </div>
            </div>

            {/* Green tags showing positive ingredients and properties */}
            <div className="tag-panel">
              <h4>Positive signals</h4>
              <div className="chip-wrap good">
                {goodTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Red tags showing warnings and harmful ingredients to watch for */}
            <div className="tag-panel">
              <h4>Warnings Olive checks</h4>
              <div className="chip-wrap warning">
                {warningTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>

          <article className="outcomes-card card">
            <span className="mini-label">Real family outcomes</span>
            <h3>Real Health Outcomes for Your Family</h3>
            <ul>
              {outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
