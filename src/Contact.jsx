import { Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "./links";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <img
        src="/images/gems/gem-heart-pink.png"
        alt=""
        className="gem-accent"
        style={{ width: "34px", top: "26px", left: "6%", transform: "rotate(-10deg)" }}
      />
      <img
        src="/images/gems/gem-bow-pink.png"
        alt=""
        className="gem-accent"
        style={{ width: "40px", top: "40px", right: "7%", transform: "rotate(12deg)" }}
      />
      <img
        src="/images/gems/gem-cherry.png"
        alt=""
        className="gem-accent"
        style={{ width: "30px", bottom: "30px", left: "8%", transform: "rotate(-8deg)" }}
      />
      <img
        src="/images/gems/gem-flower-diamond.png"
        alt=""
        className="gem-accent"
        style={{ width: "38px", bottom: "36px", right: "6%", transform: "rotate(8deg)" }}
      />

      <h2 className="contact-title">Contact</h2>
      <p className="contact-lead">Questions, ideas, or opportunities? I'd love to hear from you ♡</p>

      <ul className="contact-links">
        <li>
          <a href={`mailto:${EMAIL}`}>
            <Mail size={18} aria-hidden="true" />
            <span className="contact-email">{EMAIL}</span>
          </a>
        </li>
        <li>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <Github size={18} aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
