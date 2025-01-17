import React from 'react'
import "../../styles/contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form id="contact-form">
        <div className="form-group">
          <input type="text" id="name" placeholder="Your Name" required="" />
        </div>
        <div className="form-group">
          <input type="email" id="email" placeholder="Your Email" required="" />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            placeholder="Your Message"
            required=""
            defaultValue={""}
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact
