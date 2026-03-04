import "./Education.css";

import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";

const Education = () => {
  return (
    <section id="education">

      <AccordionGroup size="lg" className="education-accordion">

        <Accordion>
          <AccordionSummary>
            Orange Coast College
          </AccordionSummary>

          <AccordionDetails>
            <p><strong>Associates of Science in Computer Science</strong></p>
            <p>August 2022 – May 2025</p>

            <ul>
              <li>Focused coursework in programming, algorithms, and systems fundamentals.</li>
              <li>Developed strong foundations in software engineering and problem solving.</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            California State University, Long Beach
          </AccordionSummary>

          <AccordionDetails>
            <p><strong>Bachelor of Science in Computer Science</strong></p>
            <p>August 2025 – May 2027</p>

            <ul>
              <li>Software Engineering focus.</li>
              <li>Member of ACM (Association for Computing Machinery).</li>
            </ul>
          </AccordionDetails>
        </Accordion>

      </AccordionGroup>

    </section>
  );
};

export default Education;