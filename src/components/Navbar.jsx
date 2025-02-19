import React, { useEffect } from 'react'
import logo from '../assets/logo.png'
import './navbar.css'
import {useLocation, useNavigate} from 'react-router-dom'
import gsap from 'gsap'

const Navbar = () => {
  const navigate=useNavigate();
  const location=useLocation();

  useEffect(()=>{
    const tl=gsap.timeline();
    
    if (document.querySelector('.active')) {
        tl.set('.active', { opacity: 0 });
    }

    tl.from('.nav-links a', {
        y: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });

},[]);


useEffect(()=>{
  const activeLink = document.querySelector('.active'); // ✅ Ensure element exists

  if (activeLink) {
      gsap.to(activeLink, { opacity: 1 });
  }
}, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-outer">
      <div className="nav-links">
        <div className={`bg-circle ${isActive('/') ? 'active' : ''}`}>
        <a onClick={()=>{
          navigate('/')
        }
        }>Home</a>
        </div>
        <div className={`bg-circle ${isActive('/about') ? 'active' : ''}`}>
        <a onClick={()=>{
          navigate('/about')
        }}>About Me</a>
        </div>
        <div className={`bg-circle ${isActive('/skills') ? 'active' : ''}`}>
        <a onClick={()=>{
          navigate('/skills')
        }}>Skills</a>
        </div>
        <div className={`bg-circle ${isActive('/my-works') ? 'active' : ''}`}>
        <a onClick={()=>{
          navigate('/my-works')
        }}>My Works</a>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar