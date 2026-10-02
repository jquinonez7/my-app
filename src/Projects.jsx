import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: "lights-out",
    title: "Lights Out!",
    subtitle: "F1 Grid Guesser",
    tags: ["React", "Material UI", "JavaScript", "Vite"],
    desc: "A Formula 1 trivia game built during the Snap Engineering Academy. Pick a season from 2018–2026, then race a 30-second clock to guess which driver finished in a given championship position — with live standings pulled from a racing API, a lives system, teammate-based decoy answers, and a confetti celebration for high scores.",
    links: [
      { label: "GitHub", href: "https://github.com/jquinonez7/game-show-app" },
      { label: "Play it now!", href: "https://jquinonez7.github.io/game-show-app/" },
    ],
    photo: {
      src: "/images/polaroid/lights-out-screen.webp",
      alt: "Screenshot of the Lights Out! F1 trivia game and its starting lights",
      fill: true,
    },
    seal: "/images/gems/gem-heart-ruby.png",
    tape: { top: "-17px", left: "10%", transform: "rotate(-5deg)" },
    behind: {
      src: "/images/gems/gem-cherry.png",
      style: { width: "38px", top: "-16px", right: "-12px", transform: "rotate(-10deg)" },
    },
  },
  {
    id: "dog-tracker",
    title: "Dog Tracker",
    subtitle: "Pet Management REST API",
    tags: ["FastAPI", "SQLModel", "SQLite", "JWT", "Python"],
    desc: "REST API for tracking dog health profiles, built with FastAPI, SQLModel, and SQLite. Features JWT authentication, bcrypt password hashing, and full CRUD with a React + TypeScript frontend in progress.",
    links: [{ label: "GitHub", href: "https://github.com/jquinonez7/DogTracker" }],
    photo: { src: "/images/polaroid/terminal.webp", alt: "Jeweled terminal window" },
    seal: "/images/gems/gem-flower-gold.png",
    tape: { top: "-17px", left: "50%", transform: "translateX(-50%) rotate(3deg)" },
    behind: {
      src: "/images/gems/gem-heart-pink.png",
      style: { width: "34px", bottom: "-14px", left: "-10px", transform: "rotate(10deg)" },
    },
  },
  {
    id: "my-journal",
    title: "My Journal",
    subtitle: "Mental Health Hub for Snapchat",
    tags: ["React Native", "Expo", "Supabase", "JavaScript"],
    desc: `Built during the Snap Engineering Academy to bring mental health support directly into Snapchat. Features proactive friend check-ins that nudge you to reconnect after 48 hours of silence with a best friend, plus an interactive video diary recorded through Snapchat's camera — tag entries by mood, share one for advice, or delete it as a symbolic "let go."`,
    links: [{ label: "GitHub", href: "https://github.com/jquinonez7/finalShowcase" }],
    photo: {
      src: "/images/polaroid/journal-screen.webp",
      alt: "Screenshot of the My Journal video diary in Snapchat",
      fill: true,
    },
    seal: "/images/gems/gem-flower-red.png",
    tape: { top: "-17px", right: "12%", transform: "rotate(-4deg)" },
    behind: {
      src: "/images/gems/gem-heart-purple.png",
      style: { width: "34px", top: "-16px", left: "-12px", transform: "rotate(-8deg)" },
    },
  },
];

const Projects = () => {
  const [openId, setOpenId] = useState(null);

  const open = (id) => setOpenId(id);
  const close = (id) => setOpenId((cur) => (cur === id ? null : cur));

  return (
    <section id="projects">
      <img
        src="/images/gems/gem-flower-diamond.png"
        alt=""
        className="gem-accent"
        style={{ width: "40px", top: "24px", left: "4%", transform: "rotate(-8deg)" }}
      />
      <img
        src="/images/gems/gem-flower-red.png"
        alt=""
        className="gem-accent"
        style={{ width: "28px", top: "240px", right: "3%", transform: "rotate(10deg)" }}
      />
      <img
        src="/images/gems/gem-heart-ruby.png"
        alt=""
        className="gem-accent"
        style={{ width: "30px", bottom: "240px", left: "3%", transform: "rotate(8deg)" }}
      />
      <img
        src="/images/gems/gem-round-diamond.png"
        alt=""
        className="gem-accent"
        style={{ width: "26px", bottom: "24px", right: "4%", transform: "rotate(-10deg)" }}
      />

      <h1 className="projects-title">Projects</h1>

      <div className="projects-container">
        {projects.map((p) => (
          <div
            key={p.id}
            className={`project-card${openId === p.id ? " is-open" : ""}`}
            tabIndex={0}
            role="group"
            aria-label={`${p.title} project`}
            onPointerEnter={(e) => e.pointerType === "mouse" && open(p.id)}
            onPointerLeave={(e) => e.pointerType === "mouse" && close(p.id)}
            onPointerUp={(e) => {
              if (e.pointerType === "mouse" || e.target.closest("a")) return;
              setOpenId((cur) => (cur === p.id ? null : p.id));
            }}
            onFocus={() => open(p.id)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) close(p.id);
            }}
          >
            <img
              src="/images/washi-tape.webp"
              alt=""
              className="tape-accent"
              style={p.tape}
            />
            <img
              src={p.behind.src}
              alt=""
              className="gem-accent gem-accent-behind"
              style={p.behind.style}
            />

            <div className="envelope-letter">
              <p className="project-desc">{p.desc}</p>
              <div className="project-links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="envelope-body">
              <div className="envelope-label">
                <h2>{p.title}</h2>
                <p className="project-subtitle">{p.subtitle}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="envelope-flap" />
            <img src={p.seal} alt="" className="envelope-seal" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;

/* =====================================================================
   POLAROID VERSION (disabled) — tilted polaroid with the screenshot on top.
   To bring it back:
     1. delete the `useState` import and the useState/open/close lines at
        the top of Projects()
     2. swap the card markup inside projects.map(...) for the block below
     3. in Projects.css, comment out the ENVELOPE block and uncomment the
        POLAROID block at the bottom of that file.

          <div key={p.id} className="project-card" tabIndex={0}>
            <img src="/images/washi-tape.webp" alt="" className="tape-accent" style={p.tape} />
            <img src={p.behind.src} alt="" className="gem-accent gem-accent-behind" style={p.behind.style} />

            <div className={`polaroid-photo${p.photo.fill ? " is-photo" : ""}`}>
              <img
                src={p.photo.src}
                alt={p.photo.alt}
                loading="lazy"
                style={p.photo.position ? { objectPosition: p.photo.position } : undefined}
              />
            </div>

            <div className="polaroid-caption">
              <h2>{p.title}</h2>
              <p className="project-subtitle">{p.subtitle}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
   ===================================================================== */
