import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <div className="about-text-container">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            Hi! I’m Jade Quinonez. I am a student at CSULB studying Computer Science 
            with a concentration in Software Development. I am familiar working with Python, Java, HTML, CSS, Javascript,
            and C++. I have used tools/frameworks such as React, Vue.js, Tailwind CSS, Git, Github, and Linux.
            Beyond coding, I enjoy spending time with my dog, Butters. She is a 4 year-old Aussie. I also enjoy 
            fashion, the world of cars, and traveling.
          </p>

        </div>
      </div>
    </section>
  );
};
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
