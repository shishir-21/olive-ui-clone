import HealthHeroSection from "./HealthHeroSection";
import NutritionCardSection from "./NutritionCardSection";
import ProductInsightCard from "./ProductInsightCard";
import "./HealthBenefitsSection.css";

const Benefits = () => {
  return (
    <div className="olive-benefits-wrapper">
      <HealthHeroSection />
      <NutritionCardSection />
      <section className="olive-bottom-section">
        <ProductInsightCard />
      </section>
    </div>
  );
};

export default Benefits;
