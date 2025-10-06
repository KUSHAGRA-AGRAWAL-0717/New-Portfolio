import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import contact from "../assets/contact.jpg";
import menu from "../assets/menu.png";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [visible, setVisible] = useState(true);
  const hideTimeoutRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      // If user scrolls down, hide navbar; if up, show navbar briefly
      if (currentY > lastScrollY.current && currentY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
        // auto-hide after a short delay when user scrolls up and reveals it
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = setTimeout(() => setVisible(false), 3500);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  // Show navbar for a short time when the hotspot is clicked or navbar clicked
  const revealNavbar = (duration = 4000) => {
    clearTimeout(hideTimeoutRef.current);
    setVisible(true);
    hideTimeoutRef.current = setTimeout(() => setVisible(false), duration);
  };

  return (
    <>
      {/* Hotspot shown when navbar is hidden - subtle thin bar at top */}
      {!visible && (
        <button
          className="nav-hotspot"
          aria-label="Show navigation"
          onClick={() => revealNavbar(5000)}
        />
      )}

      <nav
        className={`navbar ${visible ? "visible" : "hidden"}`}
        onClick={() => revealNavbar(4000)}
      >
        <img src={logo} alt="Logo" className="logo" />

        <div className="desktopMenu">
          <Link
            to="intro"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            About
          </Link>
          <Link
            to="works"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            Projects
          </Link>
          <Link
            to="clients"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            Tech Stack
          </Link>
        </div>

        <button
          className="desktopMenuBtn"
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <img src={contact} alt="Contact Icon" className="desktopMenuImg" />
          Contact Me
        </button>

        <img
          src={menu}
          alt="Menu"
          className="nobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />

        {showMenu && (
          <div className="navMenu">
            <Link
              to="intro"
              activeClass="active"
              spy={false}
              smooth={true}
              offset={-100}
              duration={500}
              className="listItem"
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
            <Link
              to="skills"
              activeClass="active"
              spy={false}
              smooth={true}
              offset={-50}
              duration={500}
              className="listItem"
              onClick={() => setShowMenu(false)}
            >
              About
            </Link>
            <Link
              to="works"
              activeClass="active"
              spy={false}
              smooth={true}
              offset={-50}
              duration={500}
              className="listItem"
              onClick={() => setShowMenu(false)}
            >
              Projects
            </Link>
            <Link
              to="clients"
              activeClass="active"
              spy={false}
              smooth={true}
              offset={-50}
              duration={500}
              className="listItem"
              onClick={() => setShowMenu(false)}
            >
              Tech Stack
            </Link>
            <Link
              to="contact"
              activeClass="active"
              spy={false}
              smooth={true}
              offset={-50}
              duration={500}
              className="listItem"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
