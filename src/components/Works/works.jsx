import React from 'react';
import './works.css';
import pr1 from "../assets/pr1.png";
import pr2 from "../assets/pr2.png";
import pr3 from "../assets/pr3.png";
import pr4 from "../assets/pr4.png";
import pr5 from "../assets/pr5.png";

const Works = () => {
  const prjcts = [
    { img: pr1, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/Hero_Web_app" ,name: "Hero app"},
    { img: pr2, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/mailMaster" ,name:"Mail Master"},
    { img: pr3, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/Admin-Panel" ,name:"Admin Panel"},
    { img: pr4, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/Chat_site-MERN-",name:"Chat App" },
    { img: pr5, link: "https://github.com/KUSHAGRA-AGRAWAL-0717/Face_recognition_system" ,name:"Face recogn. ML"}
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
