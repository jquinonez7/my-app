import "./Education.css";

const Education = () => {
  return (
    <section id="education">
      <h1 className="about-title">Education</h1>

      <div className="education-container">

        <div className="education-card">
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