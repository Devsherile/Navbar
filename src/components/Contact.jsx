import React from "react";
import "./Contact.css";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact">
      <div className="contact">
        <h1 className="title">Contact Me</h1>
        <div className="form">
          <form action="submit">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="contact-info">
        <p className="email">
          <span>Email:</span>{" "}
          <a href="mailto:cheptoosherile@gmail.com">
            cheptoosherile@gmail.com
          </a>
        </p>
        <p className="phone">
          <span>Phone:</span>{" "}
          <a href="tel:+254 793 721 334"> +254 793 721 334 </a>
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
    </div>
  );
}

export default Contact;
