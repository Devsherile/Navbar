import React from "react";
import "./Services.css";
import { CgWebsite } from "react-icons/cg";
import { PiDeviceMobileFill } from "react-icons/pi";
import { IoPlaySkipBackCircleSharp } from "react-icons/io5";
function Services() {
  return (
    <div id="services">
      <h1 className="title">My Services</h1>
      <div className="services">
        <div className="web">
          <CgWebsite />
          <h1>Web Development</h1>
          <p>
            I can help you build a website from scratch. I have experience
            working with HTML, CSS, JavaScript and React.
          </p>
        </div>
        <div className="mobile">
          <PiDeviceMobileFill />
          <h1>Mobile Development</h1>
          <p>
            I can help you build a mobile app using React Native. I can also
            help you build a cross-platform app using Flutter.
          </p>
        </div>
        <div className="backend">
          <IoPlaySkipBackCircleSharp />
          <h1>Backend Development</h1>
          <p>
            I can help you build a scalable backend using Node.js. I can also
            help you build a RESTful API.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Services;
