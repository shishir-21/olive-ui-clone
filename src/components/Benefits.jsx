import {
  goodTags,
  insightCards,
  outcomes,
  warningTags,
} from "../data/siteContent";

// Benefits shows what Olive gives parents and why it matters
const Benefits = () => {
  return (
    <section className="section" id="benefits">
      <div className="section-header">
        <span className="eyebrow">Health benefits</span>
        <h2>Ingredient clarity that busy families can actually use</h2>
        <p className="section-subtitle">
          Olive helps parents understand product quality, avoid harmful
          ingredients, and make healthier food choices faster.
        </p>
      </div>

      <div className="grid-two benefits-grid">
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

        <div className="benefit-side">
          <article className="score-panel card">
            <div className="score-panel-top">
              <div>
                <span className="mini-label">Food score</span>
                <h3>Straus Ice Cream</h3>
              </div>
              <div className="big-score">88</div>
            </div>

            <div className="tag-panel">
              <h4>Positive signals</h4>
              <div className="chip-wrap good">
                {goodTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

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
            <h3>Feel more confident every time you shop</h3>
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
