import "./App.css";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import Stars from "./Components/Stars";
import About from "./Sections/About";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Stars />
      <Navbar />
      <Hero />
      <About/>
    </main>
  );
}

export default App;
