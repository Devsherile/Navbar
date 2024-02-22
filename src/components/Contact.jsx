import React from "react";
import "./Contact.css";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact">
      <div className="contact-info">
        <h1>Contact Information</h1>
        <p>
          <span>Email:</span>{" "}
          <a href="mailto:sherilecheptoo@outlook.com">
            sherilecheptoo@outlook.com
          </a>
        </p>
        <p>
          <span>Phone:</span> <a href="tel:+254793721334"> +254 793 721 334 </a>
        </p>
        <div className="social">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <IoLogoGithub />
          </a>
          <a href="https://shorturl.at/gwZ67" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="contact">
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
