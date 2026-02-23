import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        {/* Left Side - About Text */}
        <div className="about-text-container">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            Hi! I’m Jade Quinonez. I’m a Computer Science student at CSULB with a
            concentration in Software Development. I have experience working with
            Python, Java, HTML, CSS, JavaScript, and C++. I’ve used tools and
            frameworks such as React, Vue.js, Tailwind CSS, Git, GitHub, and Linux.
            Beyond coding, I enjoy spending time with my dog, Butters — she’s a
            4-year-old Aussie. I also love fashion, cars, and traveling.
          </p>
        </div>

        {/* Right Side - ASCII Art */}
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
      </div>
    </section>
  );
};

export default About;