import "./App.css";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <section id="home">
        <Home />
      </section>

      <section id="about" className="section">
        <About />
      </section>

      <section id="education" className="section">
        <Education />
      </section>

      <section id="projects" className="section">
        <Projects />
      </section>

      {/* <section id="contact" className="section">
        <Contact />
      </section> */}
    </div>
  );
}

export default App;