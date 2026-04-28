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
    // page-shell makes the whole landing page feel like one clean card
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        {/* This is the main landing page flow for the Olive clone */}
        <Hero />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>

      {/* Footer shows the final call to action and site bottom info */}
      <Footer />
    </div>
  );
}

export default App;
