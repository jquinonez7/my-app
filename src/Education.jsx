import "./Education.css";

const Education = () => {
  return (
    <section id="education">
      <div className="education-container">
        <div className="education-grid">

          {/* LEFT SIDEBAR */}
          <div className="education-sidebar">
            <h3 className="education-title">Education</h3>
            <p className="education-subtitle">Classes:</p>
            <ul className="education-list">
              <li>Algorithms</li>
              <li>System Programming</li>
              <li>Discrete Structures</li>
              <li>Discrete Structures II</li>
              <li>Digital Logic & Assembly</li>
              <li>Data Structures</li>
              <li>C++</li>
              <li>C++ II</li>
              <li>Java Programming</li>
            </ul>
          </div>

          {/* RIGHT SIDE — CARDS */}
          <div className="education-content">

            <div className="education-card">
              <h2 className="degree">Associates of Science in Computer Science</h2>
              <p className="school">Orange Coast College</p>
              <p className="date">August 2022 – May 2025</p>
              <ul className="detail-list">
                <li>Focused coursework in programming, algorithms, and systems fundamentals.</li>
                <li>Developed foundational skills in software engineering and problem-solving.</li>
              </ul>
            </div>

            <div className="education-card">
              <h2 className="degree">Bachelor of Science in Computer Science</h2>
              <p className="school">Cal State University Long Beach</p>
              <p className="date">August 2025 – May 2027</p>
              <ul className="detail-list">
                <li>Software Engineering focus.</li>
                <li>Member of ACM (Association for Computing Machinery).</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
