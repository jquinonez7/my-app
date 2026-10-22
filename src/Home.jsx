import "./Home.css";
import { useState, useEffect } from "react";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
// import PhysicsStickerWall from "./PhysicsStickerWall";
// import InteractivePet from "./InteractivePet";
import JadeScript from "./assets/jade-quinonez-jeweled.png";
import { GITHUB_URL, LINKEDIN_URL } from "./links";

const Home = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="home-wrapper">
      <header className="navbar-container">
        <nav className="navbar">
          <div className="nav-links">
            <a href="#home" className="nav-item">Home</a>
            <a href="#about" className="nav-item">About</a>
            <a href="#education" className="nav-item">Education</a>
            <a href="#projects" className="nav-item">My Work</a>
            <a href="#contact" className="nav-item nav-cta">Contact</a>
          </div>

          <button className="dark-mode-btn" onClick={toggleDarkMode}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </header>

      <section id="home" className="home-container" style={{ position: "relative", overflow: "hidden" }}>
        {/* sticker wall fills the whole hero section, sits behind everything */}
        {/* <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <PhysicsStickerWall
            background="transparent"
            stickerCount={10}
            stickerSize={90}
          />
        </div> */}

        {/* text sits above it, clicks pass through to stickers except on the button */}
        <div
          className="hero-container"
          style={{ position: "relative", zIndex: 1, pointerEvents: "none" }}
        >
          <img
            src="/images/gems/gem-marquise-pink.png"
            alt=""
            className="gem-accent"
            style={{ width: "30px", top: "-20px", left: "10%", transform: "rotate(-12deg)" }}
          />
          <img
            src="/images/gems/gem-heart-pink.png"
            alt=""
            className="gem-accent hero-low-heart"
            style={{ width: "40px", bottom: "-10px", right: "10%", transform: "rotate(10deg)" }}
          />
          <img
            src="/images/gems/gem-star-pink.png"
            alt=""
            className="gem-accent"
            style={{ width: "26px", top: "60px", right: "20%", transform: "rotate(14deg)" }}
          />
          <img
            src="/images/gems/gem-pearl.png"
            alt=""
            className="gem-accent hero-low-pearl"
            style={{ width: "22px", bottom: "50px", left: "16%", transform: "rotate(-6deg)" }}
          />
          <img
            src="/images/gems/gem-flower-gold.png"
            alt=""
            className="gem-accent"
            style={{ width: "32px", top: "20px", left: "30%", transform: "rotate(8deg)" }}
          />
          <img
            src="/images/gems/gem-round-diamond.png"
            alt=""
            className="gem-accent hero-low-diamond"
            style={{ width: "24px", bottom: "10px", right: "2%", transform: "rotate(-14deg)" }}
          />
          <img
            src="/images/hero/code.webp"
            alt=""
            className="gem-accent"
            style={{ width: "clamp(40px, 8vw, 60px)", top: "-54px", left: "19%", transform: "rotate(-8deg)" }}
          />
          <img
            src="/images/hero/terminal.webp"
            alt=""
            className="gem-accent"
            style={{ width: "clamp(44px, 9vw, 66px)", top: "30px", right: "93%", transform: "rotate(7deg)" }}
          />
          <img
            src="/images/hero/laptop.webp"
            alt=""
            className="gem-accent hero-tech-gem-laptop"
            style={{ width: "clamp(50px, 10vw, 76px)", top: "174px", left: "77%", transform: "rotate(-6deg)" }}
          />
          <img
            src="/images/hero/gear.webp"
            alt=""
            className="gem-accent hero-tech-gem-gear"
            style={{ width: "clamp(38px, 7vw, 56px)", top: "176px", right: "-1%", transform: "rotate(12deg)" }}
          />
          <h1 className="hero-title">
            <img src={JadeScript} alt="" aria-hidden="true" className="hero-title-img" />
            <span className="visually-hidden">Jade Quinonez</span>
          </h1>
          <p className="hero-description">Aspiring Software Engineer</p>
          <p className="hero-subline">CS @ CSULB · Snap Engineering Academy Alum</p>
          <div className="hero-socials">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="Jade on GitHub">
              <Github size={16} aria-hidden="true" />
              <span>GitHub</span>
            </a>
            {LINKEDIN_URL && (
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Jade on LinkedIn">
                <Linkedin size={16} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;