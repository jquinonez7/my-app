import "./Home.css"; // Import CSS styles
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react"; // Import Moon & Sun Icons


const Home = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  // Apply Theme on Load
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="home-wrapper">
      {/* Navigation Bar */}
      <header className="navbar-container">
        <nav className="navbar">
          <div className="nav-links">
            <a href="#home" className="nav-item">Home</a>
            <a href="#about" className="nav-item">About</a>
            <a href="#education" className="nav-item">Education</a>
            <a href="#work" className="nav-item">My Work</a>
            <a href="#contact" className="nav-item">Contact</a>
          </div>
           {/* Dark Mode Toggle Button */}
           <button className="dark-mode-btn" onClick={toggleDarkMode}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </header>


      {/* Hero Section */}
      <section id="home" className="home-container">
        <div className="hero-container">
          <h1 className="hero-title">Jade Quinonez</h1>
          <p className="hero-description">Computer Science Student</p>
          <div className="hero-buttons">
            <a href="#work" className="button-primary">My Work</a>
            <a href="#contact" className="button-secondary">Contact Me →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
