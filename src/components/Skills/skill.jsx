import React from 'react';
import './skill.css';
import webpage from '../assets/webpage.jpg';
import ui from "../assets/ui-ux.png"
import ml from "../assets/ml.jpg"

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
      As a MERN stack developer, I specialize in building dynamic web applications with a focus on user-friendly interfaces. I also explore AI/ML technologies and am currently enhancing my skills <br /> in data structures to integrate innovative solutions into my projects.
      </span>
      <div className="skillsBars">
        <div className="skillBar">
          <img src={ui} alt="UI/UX Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Passionate about creating seamless and beautiful interfaces for users.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webpage} alt="App Development" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>Building high-quality web applications with modern technologies.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={ml} alt="AI/ML" className="skillBarImg" />
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
