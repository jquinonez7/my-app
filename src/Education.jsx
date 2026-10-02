import "./Education.css";

const Education = () => {
  return (
    <section id="education">
      <img
        src="/images/gems/gem-square-rose.png"
        alt=""
        className="gem-accent"
        style={{ width: "34px", top: "20px", left: "4%", transform: "rotate(-10deg)" }}
      />
      <img
        src="/images/gems/gem-marquise-pink.png"
        alt=""
        className="gem-accent"
        style={{ width: "28px", top: "150px", right: "3%", transform: "rotate(10deg)" }}
      />
      <img
        src="/images/gems/gem-flower-gold.png"
        alt=""
        className="gem-accent"
        style={{ width: "36px", bottom: "150px", left: "3%", transform: "rotate(6deg)" }}
      />
      <img
        src="/images/gems/gem-heart-skyblue.png"
        alt=""
        className="gem-accent"
        style={{ width: "28px", bottom: "20px", right: "4%", transform: "rotate(-8deg)" }}
      />

      <h1 className="education-title">Education</h1>

      <div className="education-container">

        <div className="education-card">
          <img
            src="/images/gems/gem-bow-pink.png"
            alt=""
            className="gem-accent gem-accent-behind"
            style={{ width: "40px", top: "-18px", right: "-14px", transform: "rotate(12deg)" }}
          />
          <h2>California State University, Long Beach</h2>
          <p className="degree">B.S. Computer Science</p>
          <p className="date">Aug 2025 – May 2027</p>

          <p className="course-title">Relevant Coursework</p>
          <p className="courses">
            Algorithms • System Programming • Computer Architecture •
            Programming Languages • Software Engineering • Computer Security •
            Discrete Structures • Digital Logic
          </p>
        </div>

        <div className="education-card">
          <img
            src="/images/gems/gem-round-diamond.png"
            alt=""
            className="gem-accent gem-accent-behind"
            style={{ width: "34px", bottom: "-16px", left: "-12px", transform: "rotate(-10deg)" }}
          />
          <h2>Orange Coast College</h2>
          <p className="degree">A.S. Computer Science</p>
          <p className="date">Aug 2022 – May 2025</p>

          <p className="course-title">Relevant Coursework</p>
          <p className="courses">
            Data Structures • Object-Oriented Programming • Discrete Structures •
            Intro to Programming
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;
