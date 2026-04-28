import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <Hero />
      </main>
    </div>
  );
}

export default App;
