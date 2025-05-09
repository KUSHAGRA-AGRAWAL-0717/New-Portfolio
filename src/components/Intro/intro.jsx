import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import hire from "../assets/hire.jpg";
// import profileph from "../assets/latpro2.png";
import profileLatest from "../assets/bgnew.png"

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello ,</span>
        <span className="introText">
          I'm <span className="introName">Kushagra</span>
          <br />
          Aspiring Dev
        </span>
        <p className="introPara">
        Skilled in web development exploring<br /> AI/ML to create innovative solutions
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
