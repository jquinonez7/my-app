import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        {/* Left Side - About Me Text */}
        <div className="about-text-container">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hi! I’m <span className="about-highlight">Jade Quinonez</span>. I am
            <span className="about-highlight"> a student at CSULB studying Computer Science with a concentration in Software Development. </span>
            <span className="about-highlight"> software engineering.</span> 
            I use <span className="about-highlight">C++, Java, Python, React, JavaScript, HTML, CSS, and Tailwind CSS.</span>
          </p>
          <p className="about-text">
            Beyond coding, I spend time in the realms of <span className="about-highlight">fitness, cars, and traveling</span>.
          </p>
        </div>

        {/* Right Side - ASCII Art */}
        <div className="ascii-art">
          <pre>
            {`
⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢰⣿⡿⠗⠀⠠⠄⡀⠀⠀⠀⠀
⠀⠀⠀⠀⡜⢁⣀⡀⠀⠀⠀⠈⠑⢶⣶⡄
⢀⣶⣦⣸⠈⢿⣟⡇⠀⠀⣀⣀⠀⠘⡿⠃
⠀⢿⣿⣿⣄⠒⠀⠠⢶⡂⢫⣿⢇⢀⠃⠀
⠀⠈⢿⡿⣿⣿⣶⣤⣀⣄⣀⣂⡠⠊⠀⠀
⠀⠀⠀⡇⠀⠀⠉⠙⠛⠿⣿⣿⣧⠀⠀⠀
⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠘⣿⣿⡇⠀⠀
⠀⠀⠀⣿⣧⡤⠄⣀⣀⣀⣴⡟⠿⠃⠀⠀
⠀⠀⠀⢻⣿⣿⠉⠉⢹⣿⣿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠉⠁⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀
            `}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default About;
