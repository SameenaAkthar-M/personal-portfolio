import React from "react";
import "./contact.css";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="contact-box">
      <h3>Contact</h3>
      <div className="contact-links">
      <a href="tel:+916384499699"><RiPhoneFill /></a>
      <a href="mailto:sameenaaktharm@gmail.com"><FaEnvelope /></a>
      <a href="https://www.linkedin.com/in/sameena-akthar-m-3239a0317/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/SameenaAkthar-M" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      </div>
    </div>
  );
};

export default Contact;
