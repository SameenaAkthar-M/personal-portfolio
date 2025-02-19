import React, { useLayoutEffect, useRef } from "react";
import bd from "../../assets/bd.jpg";
import fs from "../../assets/fs2.jpg";
import food from "../../assets/food.jpg";
import travel from "../../assets/travel.jpg";
import clock from "../../assets/clock.jpg";
import "./project.css";
import gsap from "gsap";

const Projects = () => {
  const projectRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".my-works h1", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
      })
        .from(".grid-container", {
          opacity: 0,
          duration: 1,
          stagger: 0.3,
        }, "-=0.5");
    }, projectRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <div className="my-works" ref={projectRef}>
      <h1>My Works</h1>
      <div className="grid-container">
        <div className="card">
          <div className="card-image">
            <img src={bd} alt="" />
          </div>
          <div className="about-image">
            <h4>Blood Donation Website💫</h4>
            <p>A platform that connects blood donors, admins, and hospitals.</p>
            <a href="https://github.com/SameenaAkthar-M/Blood-Donation">Take a look</a>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={fs} alt="" />
          </div>
          <div className="about-image">
            <h4>Flower Shop🌹</h4>
            <p>A delightful platform to discover fresh flowers and send heartfelt gifts to loved ones.</p>
            <a href="https://github.com/SameenaAkthar-M/Flower-Shop">Take a look</a>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={food} alt="" />
          </div>
          <div className="about-image">
            <h4>Food Ordering Website🍔</h4>
            <p>A convenient platform to explore and order delicious meals.</p>
            <a href="https://github.com/SameenaAkthar-M/Food-Delivery-Web">Take a look</a>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={travel} alt="" />
          </div>
          <div className="about-image">
            <h4>Travelling Website ✈️</h4>
            <p>Perfect platform to discover destinations, plan trips for an unforgettable journey.</p>
            <a href="https://ttraveller.netlify.app/">Take a look</a>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={clock} alt="" />
          </div>
          <div className="about-image">
            <h4>Digital Clock⏰</h4>
            <p>A sleek and modern digital clock displaying real-time hours, minutes, and seconds.</p>
            <a href="https://github.com/SameenaAkthar-M/Digital-Clock">Take a look</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
