import { ChevronDownIcon } from "@heroicons/react/16/solid";
import "./Contact.css";

export default function Contact() {
  return (
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
            <input id="first-name" name="first-name" type="text" autoComplete="given-name" />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last-name">Last name</label>
            <input id="last-name" name="last-name" type="text" autoComplete="family-name" />
          </div>

          {/* Email */}
          <div className="span-2">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" />
          </div>

          {/* Phone */}
          <div className="span-2">
            <label htmlFor="phone-number">Phone number</label>
            <div className="phone-input">
              <select id="country" name="country">
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
              <ChevronDownIcon className="icon" aria-hidden="true" />
              <input id="phone-number" name="phone-number" type="text" placeholder="123-456-7890" />
            </div>
          </div>

          {/* Message */}
          <div className="span-2">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} />
          </div>

          {/* Checkbox */}
          <div className="span-2 checkbox-group">
            <input id="agree-to-policies" type="checkbox" />
            <label htmlFor="agree-to-policies">
              By selecting this, you agree to our{" "}
              <a href="#">privacy policy</a>.
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="submit">
          <button type="submit">Let's talk</button>
        </div>
      </form>
    </div>
  );
}