import "./App.css";
import Benefits from "./components/Benefits";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        {/* Main landing page sections */}
        <Hero />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>

      {/* Footer CTA and bottom info */}
      <Footer />
    </div>
  );
}

export default App;
