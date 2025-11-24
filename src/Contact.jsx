import { ChevronDownIcon } from "@heroicons/react/16/solid";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-wrapper">
        <div aria-hidden="true" className="contact-background">
          <div className="contact-gradient" />
        </div>

        <div className="contact-header">
          <h2>Contact Me</h2>
          <p>Let's connect!</p>
        </div>

        <form action="#" method="POST" className="contact-form">
          <div className="form-grid">
            {/* First Name */}
            <div>
              <label htmlFor="first-name">First name</label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="last-name">Last name</label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
              />
            </div>

            {/* Email */}
            <div className="span-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
              />
            </div>

            {/* Message */}
            <div className="span-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="submit">
            <button type="submit">Let's talk!</button>
          </div>
        </form>
      </div>
    </section>
  );
}
