import React, { useLayoutEffect, useRef } from "react";
import "./home.css";
import myPhoto from "../../assets/avatar.svg";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Home = () => {
  const homeRef = useRef(null);
  const location = useLocation(); // Get the current route

  useLayoutEffect(() => {
    if (!homeRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

      tl.from(".main-content h2", { y: -30, opacity: 0, delay: 0.5 })
        .from(".fixed-text", { opacity: 0, y: 40 }, "-=0.5")
        .from(".change", { opacity: 0, x: 20 }, "-=0.5")
        .from(".my-image", { x: "100%", opacity: 0, scale: 0 }, "-=0.5");
    }, homeRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div className="home-page" ref={homeRef}>
      <div className="content">
        <div className="main-content">
          <div className="content1">
            <h2>SAMEENA AKTHAR M</h2>
            <p>
              <span className="fixed-text">Bringing imagination to life through</span>
              <span className="change"></span>
            </p>
            <button className="resume">Download Resume</button>
          </div>
          <div className="image-my">
            <img src={myPhoto} alt="Sameena Akthar" className="my-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
