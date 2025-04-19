import React, { useLayoutEffect, useRef } from "react";
import "./about.css";
import uiux from "../../assets/uiux.png";
import web from "../../assets/mobile.png";
import ps from "../../assets/initiative.png";
import avatar from "../../assets/avatar.svg";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const About = () => {
  const aboutRef = useRef(null);
  const location = useLocation(); // Detect route changes

  useLayoutEffect(() => {
    if (!aboutRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.8 } });

      tl.from(".about-page h1", { y: 30, opacity: 0, duration: 1 })
        .from(".part1 h4", { y: -30, opacity: 0, stagger: 0.2 }, "-=0.5")
        .from(".avatar-image", { y: "100%", x: "100%", opacity: 0, duration: 1 }, "-=0.5")
        .from(".image", { opacity: 0, stagger: 0.2 }, "-=0.3")
        .from(".part1 p", { y: 30, scale: 0, opacity: 0, stagger: 0.3 }, "-=0.2");
    }, aboutRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div className="about-page" ref={aboutRef}>
      <div className="container">
        <h1>About Me</h1>
        <div className="about-me-section">
          <div className="about-content">
            <div className="part1">
              <h4>I am a passionate MERN Stack Developer with a strong focus on frontend development</h4>
              <p>As a Frontend Developer, I specialize in building user-friendly, interactive, and visually engaging web applications. My expertise includes:</p>
              <div className="about-image">
                <div className="cont">
                  <div className="image">
                    <img src={uiux} alt="" className="uiicon" />
                  </div>
                  <div className="txt-content">
                    <h4>UI/UX Design</h4>
                    <p>Creating intuitive, user-centered designs</p>
                  </div>
                </div>
                <div className="cont">
                  <div className="image">
                    <img src={web} alt="" className="webicon" />
                  </div>
                  <div className="txt-content">
                    <h4>Frontend Development</h4>
                    <p>Building visually stunning, user-friendly websites</p>
                  </div>
                </div>
                <div className="cont">
                  <div className="image">
                    <img src={ps} alt="" className="webicon" />
                  </div>
                  <div className="txt-content">
                    <h4>Problem Solving</h4>
                    <p>Finding efficient, creative solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="part2">
              <div className="avatar-image">
                <img src={avatar} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
