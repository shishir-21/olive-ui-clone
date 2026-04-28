import { useState } from "react";
import "./App.css";
import Benefits from "./components/Benefits";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Scanner from "./components/Scanner";
import Testimonials from "./components/Testimonials";

function App() {
  const [showScanner, setShowScanner] = useState(false);

  return (
    // Main page wrapper - creates the overall page structure and styling
    <div className="page-shell">
      {/* Navigation bar at the top - visible on all pages */}
      <Navbar />
      
      <main className="page-main">
        {showScanner ? (
          <Scanner onClose={() => setShowScanner(false)} />
        ) : (
          <>
            {/* Landing page sections in order:
                1. Hero - Main headline and call to action
                2. HowItWorks - Three step explanation of how Olive works
                3. Benefits - Health benefits and what Olive does for families
                4. Testimonials - Real customer reviews and success stories
                5. Pricing - Subscription plans and comparison
                6. FAQ - Frequently asked questions with answers
            */}
            <Hero onOpenScanner={() => setShowScanner(true)} />
            <HowItWorks />
            <Benefits />
            <Testimonials />
            <Pricing />
            <Faq />
          </>
        )}
      </main>

      {/* Footer at the bottom - shows final CTA and site links */}
      <Footer />
    </div>
  );
}

export default App;
