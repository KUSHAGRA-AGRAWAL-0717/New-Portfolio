import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import hire from "../assets/hire.jpg";
// import profileph from "../assets/latpro2.png";
import profileLatest from "../assets/newProfile4.jpg"

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello ,</span>
        <span className="introText">
          I'm <span className="introName">Kushagra</span>
          <br />
          Web Developer
        </span>
        <p className="introPara">
        Skilled web developer exploring AI/ML to <br />create innovative solutions
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <img src={hire} alt="Hire" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={profileLatest} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
