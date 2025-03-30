import React, { useEffect } from 'react';
import './works.css';
import mailmaster from "../assets/mailmaster.png";
import coldmail from "../assets/coldemail.png";
import tomato from "../assets/tomato.png";
import faceRecog from "../assets/faceRecog.png";
import chatApp from "../assets/chatApp.png";

const Works = () => {
  const projects = [
    { img: mailmaster, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/mailMaster", name: "Mail Master", delay: 0 },
    { img: coldmail, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/AutoPitch", name: "AutoPitch", delay: 0.1 },
    { img: tomato, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/Tomato-disease-detector/tree/master", name: "TomAIto", delay: 0.2 },
    { img: faceRecog, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/Face_recognition_system", name: "FaceMatrix", delay: 0.3 },
    { img: chatApp, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/Chat_site-MERN-", name: "Chat App", delay: 0.4 },
  ];

  // Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <p className="worksDesc">
        Explore a variety of projects that showcase my skills and creativity. Each project represents my dedication to delivering quality work.
      </p>
      <div className="worksImgs">
        {projects.map((project, index) => (
          <div 
            className="workDiv hidden" 
            key={index} 
            style={{ animationDelay: `${project.delay}s` }}
          >
            <div className="imgContainer">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img 
                  src={project.img} 
                  alt={project.name} 
                  className="worksImg" 
                />
                <div className="overlay">
                  <span>View Project</span>
                </div>
              </a>
            </div>
            <p className="projectName">{project.name}</p>
          </div>
        ))}
      </div>
      <a href="https://github.com/KUSHAGRA-AGRAWAL-0717" target="_blank" rel="noopener noreferrer">
        <button className="workBtn">See More</button>
      </a>
    </section>
  );
};

export default Works;