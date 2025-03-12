import React from 'react';
import './works.css';
import mailmaster from "../assets/mailmaster.png";
import coldmail from "../assets/coldemail.png";
import tomato from "../assets/tomato.png";
import faceRecog from "../assets/faceRecog.png";
import chatApp from "../assets/chatApp.png";

const Works = () => {
  const prjcts = [
    { img: mailmaster, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/mailMaster" ,name: "Mail Master"},
    { img: coldmail, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/AutoPitch" ,name:"AutoPitch"},
    { img: tomato, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/Tomato-disease-detector/tree/master" ,name:"TomAIto"},
    { img: faceRecog, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/Face_recognition_system",name:"Face recognition app" },
    { img: chatApp, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/Chat_site-MERN-" ,name:"Chat Application"},
  ];

  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <p className="worksDesc">
        Explore a variety of projects that showcase my skills and creativity. Each project represents my dedication to delivering quality work.
      </p>
      <div className="worksImgs">
        {prjcts.map((project, index) => (
          <div className="workDiv"  key={index}>
            
            <a href={project.link}>
            <img src={project.img} alt={`Portfolio ${index + 1}`} className="worksImg" />
          </a>
          <p>{project.name}</p>
          </div>
          
        ))}
      </div>
      <a href="https://github.com/KUSHAGRA-AGRAWAL-0717"><button className="workBtn">See More</button></a>
    </section>
  );
};

export default Works;
