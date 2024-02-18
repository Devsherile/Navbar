import React from "react";
import './Contact.css';

function Contact() {
  return (
    <div>
      <div id="contact">
        <h1 className="title">Contact Me</h1>
        <div className="contact">
          <div className="form">
            <form action="submit">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="contact-info">
            <h1>Contact Information</h1>
            <p>
              <span>Email:</span> sherilecheptoo@outlook.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
