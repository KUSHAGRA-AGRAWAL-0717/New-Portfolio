import React, { useState } from 'react';
import logo from '../assets/logo.png';
import contact from '../assets/contact.jpg';
import menu from '../assets/menu.png';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      
      <div className="desktopMenu">
        <Link to="intro" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link to="skills" activeClass="active" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link to="works" activeClass="active" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link to="clients" activeClass="active" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Tech Stack</Link>
      </div>

      <button className="desktopMenuBtn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
        <img src={contact} alt="Contact Icon" className="desktopMenuImg" />
        Contact Me
      </button>

      <img src={menu} alt="Menu" className="nobMenu" onClick={() => setShowMenu(!showMenu)} />

      {showMenu && (
        <div className="navMenu">
          <Link to="intro" activeClass="active" spy={false} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
          <Link to="skills" activeClass="active" spy={false} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
          <Link to="works" activeClass="active" spy={false} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
          <Link to="clients" activeClass="active" spy={false} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Tech Stack</Link>
          <Link to="contact" activeClass="active" spy={false} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
