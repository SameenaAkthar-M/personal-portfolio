import React, { useLayoutEffect, useRef } from "react";
import "./skills.css";
import c from "../../assets/cprogramming.svg";
import java from "../../assets/java.svg";
import python from "../../assets/python.svg";
import javascript from "../../assets/javascript.svg";
import htmlicon from "../../assets/html.svg";
import cssicon from "../../assets/css.svg";
import reacticon from "../../assets/react.svg";
import bootstrapicon from "../../assets/bootstrap.svg";
import expressicon from "../../assets/expressjs.svg";
import nodeicon from "../../assets/nodejs.svg";
import mongodbicon from "../../assets/mongodb.svg";
import mysqlicon from "../../assets/mysql.svg";
import gsap from "gsap";

const Skills = () => {
  const skillsRef = useRef(null);

  useLayoutEffect(() => {
    if (!skillsRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.8 } });

      tl.from("h1", { y: 30, opacity: 0, duration: 1, delay: 0.5 })
        .from(".programming h4", { x: "100%", opacity: 0, duration: 0.5 }, "-=0.4")
        .from(".technologies h4", { x: "-100%", opacity: 0, duration: 0.5 })
        .from(".up", { y: -30, opacity: 0, duration: 0.5, stagger: 0.2 }, "-=0.2")
        .from(".down", { y: 30, opacity: 0, duration: 1, stagger: 0.2 }, "-=0.3");

      gsap.to(".logos, .techlogos .section1, .techlogos .section2", {
        y: -10,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }, skillsRef);

    return () => ctx.revert(); // Cleanup GSAP animations on unmount
  }, []);

  return (
    <div className="skills-section" ref={skillsRef}>
      <h1>Skills</h1>
      <div className="programming">
        <h4>Programming Languages</h4>
        <div className="logos">
          <img src={java} alt="Java" className="up plogo" />
          <img src={javascript} alt="JavaScript" className="down plogo" />
          <img src={c} alt="C" className="up plogo" />
          <img src={python} alt="Python" className="down plogo" />
        </div>
      </div>
      <div className="technologies">
        <h4>Technologies</h4>
        <div className="techlogos">
          <div className="section1">
            <img src={htmlicon} alt="HTML" className="up" />
            <img src={cssicon} alt="CSS" className="down" />
            <img src={reacticon} alt="React" className="up" />
            <img src={bootstrapicon} alt="Bootstrap" className="down" />
          </div>
          <div className="section2">
            <img src={nodeicon} alt="Node.js" className="down" />
            <img src={expressicon} alt="Express.js" className="up" />
            <img src={mongodbicon} alt="MongoDB" className="down" />
            <img src={mysqlicon} alt="MySQL" className="up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
