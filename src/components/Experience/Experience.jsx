import React from "react";
import { Briefcase, Award, Calendar } from "lucide-react";
import "./experience.css";

const Experience = () => {
  const experienceData = [
    {
      role: "Full Stack Developer Intern",
      company: "Global Holani Tradelink",
      duration: "June 2025 - July 2025",
      type: "work",
      certUrl:
        "https://drive.google.com/file/d/1ndQh7pHEdMxxEhKY-K6_xXdwXvKGhU1T/view",
    },
    {
      role: "React.js Intern",
      company: "Vitraga Solutions",
      duration: "April 2025 - May 2025",
      type: "work",
      certUrl:
        "https://drive.google.com/file/d/1n3eH_5caNiAPCVsQNzwL242eArXxXniJ/view",
    },
    {
      role: "Web Core Team Member",
      company: "Google Developer Student Clubs NIT Jalandhar",
      duration: "Nov 2024 - Present",
      type: "work",
      certUrl: "",
    },
    {
      role: "Frontend Developer",
      company: "Digiglobe Solutions",
      duration: "Aug 2024 - Sep 2024",
      type: "work",
      certUrl:
        "https://drive.google.com/file/d/1yR9lvQOTFPuY8UPlVNsDwVkfXWYtJWz1/view",
    },
  ];

  return (
    <section id="experiencePage" className="experience-section">
      <div className="container">
        <h1 className="section-title">Experience</h1>
        <p className="section-description">
          A journey of continuous learning and innovation, shaping my expertise
          in web development, AI, and competitive programming.
        </p>

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div
                className={`timeline-dot ${
                  exp.type === "work" ? "work-dot" : "achievement-dot"
                }`}
              >
                {exp.type === "work" ? (
                  <Briefcase size={20} />
                ) : (
                  <Award size={20} />
                )}
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h2 className="experience-role">{exp.role}</h2>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <div className="experience-duration">
                    <Calendar size={16} className="duration-icon" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Certificate button (render only when certUrl exists) */}
                {exp.certUrl && (
                  <div className="cert-row">
                    <a
                      className="cert-link"
                      href={exp.certUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open certificate for ${exp.company} in new tab`}
                    >
                      <Award size={14} />
                      <span className="cert-text">View Work</span>
                      <span className="external-arrow">↗</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
