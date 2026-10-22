import "./About.css";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "JavaScript", "C++", "HTML", "CSS"] },
  {
    label: "Frameworks & Tools",
    items: ["React", "Vue.js", "Tailwind CSS", "Vite", "FastAPI", "SQLModel", "Supabase", "Git", "GitHub", "Vercel", "REST APIs", "JWT Auth", "Linux"],
  },
  { label: "Spoken", items: ["Spanish"] },
];

const About = () => {
  const [printed, setPrinted] = useState(false);
  const boothRef = useRef(null);

  // the photo only starts printing once the booth scrolls into view
  useEffect(() => {
    const el = boothRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setPrinted(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPrinted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
      <section id="about" className="about-container">
        <img
          src="/images/gems/gem-flower-diamond.png"
          alt=""
          className="gem-accent"
          style={{ width: "46px", top: "18px", right: "6%", transform: "rotate(8deg)" }}
        />
        <img
          src="/images/gems/gem-bow-pink.png"
          alt=""
          className="gem-accent"
          style={{ width: "38px", bottom: "24px", left: "4%", transform: "rotate(-10deg)" }}
        />
        <img
          src="/images/gems/gem-cherry.png"
          alt=""
          className="gem-accent"
          style={{ width: "26px", top: "16px", left: "5%", transform: "rotate(10deg)" }}
        />
        <img
          src="/images/gems/gem-heart-skyblue.png"
          alt=""
          className="gem-accent"
          style={{ width: "26px", bottom: "22px", right: "4%", transform: "rotate(-8deg)" }}
        />
        <div className="about-content">

          {/* Photobooth (right side on desktop, via CSS order) — the photo prints out of the slot */}
          <div className={`photobooth${printed ? " is-printed" : ""}`} ref={boothRef}>
            <div className="booth-face">
              <i className="booth-screw booth-screw-tl" aria-hidden="true" />
              <i className="booth-screw booth-screw-tr" aria-hidden="true" />
              <i className="booth-screw booth-screw-bl" aria-hidden="true" />
              <i className="booth-screw booth-screw-br" aria-hidden="true" />
              <div className="booth-plate">
                <span>Photos</span>
                <span>delivered here</span>
                <span>in 4 minutes</span>
                <i className="booth-arrow" aria-hidden="true" />
              </div>
              <div className="booth-led" aria-hidden="true" />
              <div className="booth-bezel">
                <div className="booth-slot" />
                <div className="booth-window">
                  <figure className="booth-photo">
                    <img
                      src="/images/about/me-photo.webp"
                      alt="Jade smiling on the beach at sunset"
                      decoding="async"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side */}
          <div className="about-text-container">
            <h2 className="about-title">About Me</h2>

            <p className="about-text">
              Hi, I’m Jade Quinonez. I grew up knowing I wanted to do something creative,
              and software engineering gives me that same creativity with more structure
              and real-world impact.
            </p>

            <p className="about-text">
              I enjoy the constant stimulation of finding new solutions. At the Snap
              Engineering Academy I built an F1 trivia game with live race data and a
              mental-health journal for Snapchat, and I’ve also built a FastAPI backend
              with JWT auth. I’ve collaborated with others and taken on leadership roles
              when needed.
            </p>

            <p className="about-text">
              I’m currently looking for a software engineering internship where I can
              contribute to a team and keep growing as a developer.
            </p>

            <div className="about-skills">
              {skillGroups.map((g) => (
                <div key={g.label} className="skill-group">
                  <h3 className="skill-label">{g.label}</h3>
                  <ul className="skill-list">
                    {g.items.map((item) => (
                      <li key={item} className="skill-chip">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ASCII Art (disabled — replaced by the photobooth above)
          <div className="ascii-art">
            <pre>
              {`⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢰⣿⡿⠗⠀⠠⠄⡀⠀⠀⠀⠀
⠀⠀⠀⠀⡜⢁⣀⡀⠀⠀⠀⠈⠑⢶⣶⡄
⢀⣶⣦⣸⠈⢿⣟⡇⠀⠀⣀⣀⠀⠘⡿⠃
⠀⢿⣿⣿⣄⠒⠀⠠⢶⡂⢫⣿⢇⢀⠃⠀
⠀⠈⢿⡿⣿⣿⣶⣤⣀⣄⣀⣂⡠⠊⠀⠀
⠀⠀⠀⡇⠀⠀⠉⠙⠛⠿⣿⣿⣧⠀⠀⠀
⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠘⣿⣿⡇⠀⠀
⠀⠀⠀⣿⣧⡤⠄⣀⣀⣀⣴⡟⠿⠃⠀⠀
⠀⠀⠀⢻⣿⣿⠉⠉⢹⣿⣿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠉⠁⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀`}
            </pre>
          </div>
          */}

        </div>
      </section>
  );
};

export default About;