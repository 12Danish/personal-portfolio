import "./App.css";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import Stars from "./Components/Stars";
import About from "./Sections/About";
import Work from "./Sections/Work";
import Projects from "./Sections/Projects";
import Technologies from "./Sections/Technologies";
import Contact from "./Sections/Contact";
function App() {
  return (
    <main className="max-w-7xl mx-auto space-y-20">
      <Stars/>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  );
}

export default App;
