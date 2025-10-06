import React, { useEffect, useState } from "react";
import "./intro.css";
import { Link } from "react-scroll";
import hire from "../assets/hire.jpg";
// import profileph from "../assets/latpro2.png";
import profileLatest from "../assets/bgnew.png";

// Move static phrases to module scope so hooks don't need them as dependencies
const phrases = [
  "Aspiring Dev",
  "Web Developer",
  "AI/ML Engineer",
  "Frontend Engineer",
];

const Intro = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 40 : 100;
    const timeout = setTimeout(() => {
      const current = phrases[phraseIndex];
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((i) => i + 1);
        if (charIndex + 1 === current.length) setDeleting(true);
      } else {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((i) => i - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setPhraseIndex((p) => (p + 1) % phrases.length);
        }
      }
    }, speed + Math.random() * 60);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section id="intro" style={{ "--intro-bg": `url(${profileLatest})` }}>
      <div className="introContent">
        <div className="particles" aria-hidden="true">
          {/* Decorative floating dots generated in CSS */}
          <span className="p p1" />
          <span className="p p2" />
          <span className="p p3" />
          <span className="p p4" />
          <span className="p p5" />
        </div>

        <div className="intro-left">
          <span className="hello">Hello,</span>
          <h1 className="introText">
            I'm <span className="introName gradient">Kushagra</span>
          </h1>

          <div className="typewrap">
            <span className="typed">{text}</span>
            <span className="cursor" aria-hidden="true">
              |
            </span>
          </div>

          <p className="introPara">
            Skilled in web development exploring
            <br /> AI/ML to create innovative solutions
          </p>

          <Link to="contact" smooth={true} duration={500}>
            <button className="btn">
              <img src={hire} alt="Hire" className="btnImg" />
              <span className="btn-text">Hire Me</span>
              <span className="btn-sheen" />
            </button>
          </Link>
        </div>
      </div>
      <img src={profileLatest} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
