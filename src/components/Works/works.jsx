import React, { useEffect, useState } from "react";
import "./works.css";
import mailmaster from "../assets/mailmaster.png";
import coldmail from "../assets/coldemail.png";
import tomato from "../assets/tomato.png";
import faceRecog from "../assets/face.jpeg";
import chatApp from "../assets/chatApp.png";

const Works = () => {
  const projects = [
    {
      img: mailmaster,
      link: "https://github.com/KUSHAGRA-AGRAWAL-0717/mailMaster",
      name: "Mail Master",
      delay: 0,
      desc: "An email automation tool with templating and tracking",
      tags: ["MERN", "Automation"],
      demo: "https://drive.google.com/file/d/1IQpjvHysibnD7rTzYZfNbp4-LhMZQxnu/preview",
    },
    {
      img: coldmail,
      link: "https://github.com/KUSHAGRA-AGRAWAL-0717/AutoPitch",
      name: "AutoPitch",
      delay: 0.08,
      desc: "Cold-email automation and personalization platform",
      tags: ["Node", "Email"],
      demo: "https://drive.google.com/file/d/1-Xw-yVQKy8ghiDfYFo-KHn6CX-QMgXRj/preview",
    },
    {
      img: tomato,
      link: "https://github.com/KUSHAGRA-AGRAWAL-0717/Tomato-disease-detector/tree/master",
      name: "TomAIto",
      delay: 0.16,
      desc: "Tomato disease detector using computer vision",
      tags: ["Python", "CV", "ML"],
      demo: "https://drive.google.com/file/d/1-Xw-yVQKy8ghiDfYFo-KHn6CX-QMgXRj/preview",
    },
    {
      img: faceRecog,
      link: "https://github.com/KUSHAGRA-AGRAWAL-0717/Face_recognition_system",
      name: "FaceMatrix",
      delay: 0.24,
      desc: "Face recognition system with live webcam demo",
      tags: ["Python", "OpenCV"],
      demo: "https://drive.google.com/file/d/1-Xw-yVQKy8ghiDfYFo-KHn6CX-QMgXRj/preview",
    },
    {
      img: chatApp,
      link: "https://github.com/KUSHAGRA-AGRAWAL-0717/Chat_site-MERN-",
      name: "Chat App",
      delay: 0.32,
      desc: "Realtime chat app built with MERN and sockets",
      tags: ["MERN", "Realtime"],
      demo: "",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  const openDemo = (src) => {
    setModalSrc(src);
    setModalOpen(true);
  };

  const closeDemo = () => {
    setModalOpen(false);
    setModalSrc("");
  };

  // Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <p className="worksDesc">
        Explore a variety of projects that showcase my skills and creativity.
        Each project represents my dedication to delivering quality work.
      </p>
      <div className="worksGrid">
        {projects.map((project, index) => (
          <article
            className="projectCard hidden"
            key={index}
            style={{ animationDelay: `${project.delay}s` }}
            aria-labelledby={`proj-${index}-title`}
          >
            <div className="cardMedia">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} on GitHub`}
              >
                <img src={project.img} alt={project.name} className="cardImg" />
                <div className="cardOverlay">
                  <div className="overlayActions">
                    {project.demo ? (
                      <button
                        type="button"
                        className="overlayBtn"
                        onClick={(e) => {
                          e.preventDefault();
                          openDemo(project.demo);
                        }}
                      >
                        Demo
                      </button>
                    ) : null}
                    <a
                      className="overlayLink"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <div className="cardBody">
              <h3 id={`proj-${index}-title`} className="cardTitle">
                {project.name}
              </h3>
              <p className="cardDesc">{project.desc}</p>
              <div className="cardTags">
                {project.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <a
        href="https://github.com/KUSHAGRA-AGRAWAL-0717"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="workBtn">See More</button>
      </a>
      {modalOpen && (
        <div
          className="videoModal"
          role="dialog"
          aria-modal="true"
          aria-label="Project demo"
        >
          <div className="videoModalInner">
            <button
              className="modalClose"
              onClick={closeDemo}
              aria-label="Close demo"
            >
              ✕
            </button>
            <iframe
              src={modalSrc}
              title="Project Demo"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="videoBackdrop" onClick={closeDemo} />
        </div>
      )}
    </section>
  );
};

export default Works;
