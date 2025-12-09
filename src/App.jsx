import "./App.css";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Contact from "./Contact";

function App() {
  useEffect(() => {
    document.title = "Jade Quinonez";
  }, []);
  return (
    <div className="App">
      {/* Home (put your navbar inside Home or above it) */}
      <section id="home">
        <Home />
      </section>

      <section id="about" className="section">
        <About />
      </section>

      <section id="education" className="section">
        <Education />
      </section>

      {/* <section id="contact" className="section">
        <Contact />
      </section> */}
    </div> 
  );
} 

export default App;
