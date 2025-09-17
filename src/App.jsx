import "./App.css";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      {/* Home Section */}
      <Home />

      {/* About Section */}
      <section className="section">
        <About />
      </section>

      {/* You can add more sections later */}
      {/* <Education /> */}
      <section className="section">
        <Education />
      </section>
      {/* <Contact /> */}
      <section className="section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
