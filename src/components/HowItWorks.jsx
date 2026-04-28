import { groceryProducts, howItWorksSteps, recipeSuggestions } from "../data/siteContent";
import ProductPhone from "./ProductPhone";

// HowItWorks section - shows the three simple steps of using Olive app
// Each step has a visual panel so the page feels close to the live site
const HowItWorks = () => {
  return (
    <section className="section" id="how-it-works">
      {/* Section title follows the short heading used on Olive */}
      <div className="section-header center-header">
        <h2>How the Olive Food Scanner App Works</h2>
      </div>

      <div className="work-stack">
        <article className="work-card work-card--scan">
          <ProductPhone />
          <div>
            <h3>{howItWorksSteps[0].title}</h3>
            <p>{howItWorksSteps[0].description}</p>
          </div>
        </article>

        <article className="work-card work-card--data">
          <div className="mini-product-grid">
            {groceryProducts.slice(0, 10).map((product) => (
              <div className="mini-product" key={product}>
                <span>{product.slice(0, 2)}</span>
              </div>
            ))}
          </div>
          <div>
            <span className="safe-pill">Safe to consume</span>
            <h3>{howItWorksSteps[1].title}</h3>
            <p>{howItWorksSteps[1].description}</p>
          </div>
        </article>

        <article className="work-card work-card--recipes">
          <div className="recipe-rail">
            {recipeSuggestions.map((recipe) => (
              <span key={recipe}>{recipe}</span>
            ))}
          </div>
          <div>
            <h3>{howItWorksSteps[2].title}</h3>
            <p>{howItWorksSteps[2].description}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HowItWorks;
