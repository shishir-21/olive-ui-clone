import "./App.css";
import Benefits from "./components/Benefits";
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
        <Hero />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <Pricing />
      </main>
    </div>
  );
}

export default App;
