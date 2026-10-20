import { useState } from "react";
import "./Education.css";

const Education = () => {
  // on touch screens a tap zooms a card (hover isn't available there)
  const [activeId, setActiveId] = useState(null);
  const toggleOnTouch = (id) => (e) => {
    if (e.pointerType === "mouse") return;
    setActiveId((cur) => (cur === id ? null : id));
  };

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

      {/* Trinket tin — one ID card in the lid, one in the tray */}
      <div className="tin">
        <img className="tin-base" src="/images/education/tin.webp" alt="" />

        {/* trinkets tucked behind the cards */}
        <img
          src="/images/gems/gem-heart-ruby.png"
          alt=""
          className="tin-trinket tin-trinket-behind"
          style={{ left: "17%", top: "59%", width: "7%", transform: "translate(-50%,-50%) rotate(-12deg)" }}
        />
        <img
          src="/images/gems/gem-flower-diamond.png"
          alt=""
          className="tin-trinket tin-trinket-behind"
          style={{ left: "84%", top: "12%", width: "8%", transform: "translate(-50%,-50%) rotate(14deg)" }}
        />

        <figure
          className={`tin-card tin-card-lid${activeId === "csulb" ? " is-active" : ""}`}
          tabIndex={0}
          onPointerUp={toggleOnTouch("csulb")}
        >
          <img
            src="/images/education/card-gold.webp"
            alt="ID card: Jade Quinonez, California State University, Long Beach, B.S. Computer Science, Aug 2025 to May 2027. Relevant coursework: Algorithms, System Programming, Computer Architecture, Programming Languages, Software Engineering, Computer Security, Discrete Structures, Digital Logic."
            draggable="false"
          />
        </figure>

        <figure
          className={`tin-card tin-card-tray${activeId === "occ" ? " is-active" : ""}`}
          tabIndex={0}
          onPointerUp={toggleOnTouch("occ")}
        >
          <img
            src="/images/education/card-orange.webp"
            alt="Orange and blue ID card: Jade Quinonez, California State University, Long Beach, B.S. Computer Science, Aug 2025 to May 2027. Relevant coursework: Algorithms, System Programming, Computer Architecture, Programming Languages, Software Engineering, Computer Security, Discrete Structures, Digital Logic."
            draggable="false"
          />
        </figure>

        {/* trinkets lying on top of the cards' edges */}
        <img
          src="/images/gems/gem-bow-pink.png"
          alt=""
          className="tin-trinket"
          style={{ left: "81%", top: "9%", width: "9%", transform: "translate(-50%,-50%) rotate(14deg)" }}
        />
        <img
          src="/images/gems/gem-cherry.png"
          alt=""
          className="tin-trinket"
          style={{ left: "11%", top: "45%", width: "7%", transform: "translate(-50%,-50%) rotate(-12deg)" }}
        />
        <img
          src="/images/gems/gem-pearl.png"
          alt=""
          className="tin-trinket"
          style={{ left: "85%", top: "42%", width: "3.6%", transform: "translate(-50%,-50%)" }}
        />
        <img
          src="/images/gems/gem-heart-pink.png"
          alt=""
          className="tin-trinket"
          style={{ left: "16%", top: "92%", width: "8%", transform: "translate(-50%,-50%) rotate(10deg)" }}
        />
        <img
          src="/images/gems/gem-round-diamond.png"
          alt=""
          className="tin-trinket"
          style={{ left: "90%", top: "63%", width: "5.5%", transform: "translate(-50%,-50%) rotate(-10deg)" }}
        />

        {/* keychain lying across the tray */}
        <img
          src="/images/education/keychain.webp"
          alt=""
          className="tin-trinket tin-keychain"
          style={{ left: "87%", top: "85%", width: "19%", transform: "translate(-50%,-50%) rotate(32deg)" }}
        />

        {/* washi tape holding the tin's corners down */}
        <img
          src="/images/washi-tape.webp"
          alt=""
          className="tin-tape"
          style={{ left: "9%", top: "6%", transform: "translate(-50%,-50%) rotate(-36deg)" }}
        />
        <img
          src="/images/washi-tape.webp"
          alt=""
          className="tin-tape"
          style={{ left: "93%", top: "97%", transform: "translate(-50%,-50%) rotate(-34deg)" }}
        />
      </div>

      <p className="tin-hint" aria-hidden="true">
        <span className="hint-hover">hover a card to zoom ♡</span>
        <span className="hint-tap">tap a card to zoom ♡</span>
      </p>
    </section>
  );
};

export default Education;

/* =====================================================================
   PREVIOUS VERSION (disabled) — the two plain education cards.
   To bring it back, replace the <div className="tin"> ... </p> block
   above (the tin and its hint) with this:

      <div className="education-container">

        <div className="education-card">
          <img
            src="/images/washi-tape.webp"
            alt=""
            className="tape-accent"
            style={{ top: "-17px", left: "50%", transform: "translateX(-50%) rotate(-4deg)" }}
          />
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
            src="/images/washi-tape.webp"
            alt=""
            className="tape-accent"
            style={{ top: "-17px", right: "10%", transform: "rotate(5deg)" }}
          />
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
   ===================================================================== */
