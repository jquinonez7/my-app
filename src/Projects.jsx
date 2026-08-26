import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-container">

        <div className="project-card">
          <h2>Lights Out!</h2>
          <p className="project-subtitle">F1 Grid Guesser</p>
          <div className="project-tags">
            <span className="tag">React</span>
            <span className="tag">Material UI</span>
            <span className="tag">JavaScript</span>
            <span className="tag">Vite</span>
          </div>
          <p className="project-desc">
            A Formula 1 trivia game built during the Snap Engineering Academy. 
            Pick a season from 2018–2026, then race a 30-second clock to guess 
            which driver finished in a given championship position 
            — with live standings pulled from a racing API, a lives system, 
            teammate-based decoy answers, and a confetti celebration for high scores.
          </p>
          <div className="project-links">
            <a href="https://github.com/jquinonez7/game-show-app" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h2>Dog Tracker</h2>
          <p className="project-subtitle">Pet Management REST API</p>
          <div className="project-tags">
            <span className="tag">FastAPI</span>
            <span className="tag">SQLModel</span>
            <span className="tag">SQLite</span>
            <span className="tag">JWT</span>
            <span className="tag">Python</span>
          </div>
          <p className="project-desc">
            REST API for tracking dog health profiles, built with FastAPI, SQLModel, and SQLite.
            REST API for tracking dog health profiles, built with FastAPI, SQLModel, and SQLite. Features JWT authentication,
            bcrypt password hashing, and full CRUD with a React + TypeScript frontend in progress.
          </p>
          <div className="project-links">
            <a href="https://github.com/jquinonez7/DogTracker" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h2>My Journal</h2>
          <p className="project-subtitle">Mental Health Hub for Snapchat</p>
          <div className="project-tags">
            <span className="tag">React Native</span>
            <span className="tag">Expo</span>
            <span className="tag">Supabase</span>
            <span className="tag">JavaScript</span>
          </div>
          <p className="project-desc">
            Built during the Snap Engineering Academy
            to bring mental health support directly into Snapchat.
            Features proactive friend check-ins that nudge you to
            reconnect after 48 hours of silence with a best friend,
            plus an interactive video diary recorded through Snapchat's camera
            — tag entries by mood, share one for advice, or delete it as a symbolic "let go."
          </p>
          <div className="project-links">
            <a href="https://github.com/jquinonez7/finalShowcase" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};
export default Projects;