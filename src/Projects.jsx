import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-container">

        <div className="project-card">
          <h2>AimLab Vision</h2>
          <p className="project-subtitle">Real-Time CV Target Detection</p>
          <div className="project-tags">
            <span className="tag">Python</span>
            <span className="tag">YOLOv8</span>
            <span className="tag">CUDA</span>
            <span className="tag">OpenCV</span>
            <span className="tag">Win32</span>
          </div>
          <p className="project-desc">
          Built as a cybersecurity semester project to demonstrate how computer vision can 
          be used to identify vulnerabilities in game targeting systems. Served as data labeling 
          lead, annotating thousands of target objects in Supervisely and preparing gameplay data 
          for YOLO-based model training and real-time detection.
          </p>
          <div className="project-links">
          <a href="https://github.com/jquinonez7/Aimbot" target="_blank" rel="noopener noreferrer">
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
          <h2>Portfolio Site</h2>
          <p className="project-subtitle">Personal Developer Portfolio</p>
          <div className="project-tags">
            <span className="tag">React</span>
            <span className="tag">Vite</span>
            <span className="tag">Tailwind</span>
          </div>
          <p className="project-desc">
            Responsive portfolio showcasing projects, skills, and experience.
            Built with React and Vite, styled with Tailwind CSS.
          </p>
          <div className="project-links">
          <a href="https://github.com/jquinonez7/my-app" target="_blank" rel="noopener noreferrer">
  GitHub
</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;