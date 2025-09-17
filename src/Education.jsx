import "./Education.css";

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="education-grid">
          {/* Sidebar */}
          <div className="education-sidebar">
            <h3 className="education-title">Education</h3>
            <p className="education-subtitle">Classes:</p>
            <ul className="education-list">
              <li>Algorithms</li>
              <li>System Programming</li>
              <li>Discrete Structures</li>
              <li>Discrete Structures II</li>
              <li>Digital Logic and Assembly Programming</li>
              <li>Data Structures</li>
              <li>C++</li>
              <li>C++ II</li>
              <li>Java Programming</li>
            </ul>
          </div>

          {/* Main content */}
          <div className="education-content">
            {/* MMath */}
            <div className="education-card">
              <h2 className="degree">Associates of Science in Computer Science</h2>
              <p className="school">Orange Coast College</p>
              <p className="date">August 2022 - May 2025</p>
              <ul className="detail-list">
                <li>Thesis-based master’s program co-supervised by Prof. Daniel Vogel &amp; Prof. Craig Kaplan</li>
                <li>Research area: Human-Computer Interaction, XR and creativity</li>
                <li>
                </li>
              </ul>
            </div>

            {/* HBSc */}
            <div className="education-card">
              <h2 className="degree"> Bachelor of Science in Computer Science</h2>
              <p className="school">Cal State University Long Beach</p>
              <p className="date">August 2025 - May 2027</p>
              <ul className="detail-list">
                <li>Specialist in Computer Science with a Software Engineering focus</li>
                <li>
                  Member of Association for Computing Machinery 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
