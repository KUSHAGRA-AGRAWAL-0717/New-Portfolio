import React from 'react';
import { Briefcase, Award, Calendar } from 'lucide-react';
import './experience.css';

const Experience = () => {
  const experienceData = [
    {
      role: 'React.js Intern',
      company: 'Vitraga Solutions',
      duration: 'Mar 2025 - Present',
      type: 'work',
    },
    {
      role: 'Web Core Team Member',
      company: 'Google Developer Student Clubs NIT Jalandhar',
      duration: 'Nov 2024 - Present',
      type: 'work',
    },
    {
      role: 'Frontend Developer',
      company: 'Digiglobe Solutions',
      duration: 'Aug 2024 - Sep 2024',
      type: 'work',
    }
  ];
  
  return (
    <section id="experiencePage" className="experience-section">
      <div className="container">
        <h1 className="section-title">Experience</h1>
        <p className="section-description">
          A journey of continuous learning and innovation, shaping my expertise in web development, AI, and competitive programming.
        </p>
        
        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className={`timeline-dot ${exp.type === 'work' ? 'work-dot' : 'achievement-dot'}`}>
                {exp.type === 'work' ? <Briefcase size={20} /> : <Award size={20} />}
              </div>
              <div className="timeline-content">
                <h2 className="experience-role">{exp.role}</h2>
                <p className="experience-company">{exp.company}</p>
                <div className="experience-duration">
                  <Calendar size={16} className="duration-icon" />
                  <span>{exp.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;