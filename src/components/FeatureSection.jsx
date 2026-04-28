import "./FeatureSection.css";
import AnalysisCard from "./AnalysisCard";
import InsightCard from "./InsightCard";
import ScanCard from "./ScanCard";

const FeatureSection = () => {
  return (
    <div className="feature-grid">
      <ScanCard />
      <AnalysisCard />
      <InsightCard />
    </div>
  );
};

export default FeatureSection;
