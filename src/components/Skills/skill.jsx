import React, { useEffect, useRef } from 'react';
import './skill.css';
import webpage from '../assets/webpage.jpg';
import ui from "../assets/ui-ux.png";
import ml from "../assets/ml.jpg";

const Skill = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.2 });

    const skillBars = document.querySelectorAll('.skillBar');
    skillBars.forEach(bar => {
      observer.observe(bar);
    });

    return () => {
      skillBars.forEach(bar => {
        observer.unobserve(bar);
      });
    };
  }, []);

  return (
    <section id="skills" ref={skillsRef}>
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        As a MERN stack developer, I specialize in building dynamic web applications with a focus on user-friendly interfaces. I also explore AI/ML technologies and am currently enhancing my skills <br /> in data structures to integrate innovative solutions into my projects.
      </span>
      <div className="skillsBars">
        <div className="skillBar" data-delay="0">
          <div className="skillBarImgContainer">
            <img src={ui} alt="UI/UX Design" className="skillBarImg" />
          </div>
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Passionate about creating seamless and beautiful interfaces for users.</p>
          </div>
        </div>
        <div className="skillBar" data-delay="200">
          <div className="skillBarImgContainer">
            <img src={webpage} alt="App Development" className="skillBarImg" />
          </div>
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>Building high-quality web applications with modern technologies.</p>
          </div>
        </div>
        <div className="skillBar" data-delay="400">
          <div className="skillBarImgContainer">
            <img src={ml} alt="AI/ML" className="skillBarImg" />
          </div>
          <div className="skillBarText">
            <h2>AI/ML</h2>
            <p>Applying AI and machine learning to create data-driven solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;