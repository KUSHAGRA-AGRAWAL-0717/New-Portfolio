import React, { useRef } from 'react';
import './contact.css';
import tech1 from '../assets/tech1.png';
import tech2 from '../assets/tech2.jpg';
import tech3 from '../assets/tech3.png';
import tech4 from '../assets/tech4.jpg';
import tech5 from '../assets/tech5.webp';
import tech6 from '../assets/tech6.png';
import tech7 from '../assets/tech7.png';
import tech8 from '../assets/tech8.jpg';
import tech9 from '../assets/tech9.jpg';
import tech10 from '../assets/tech10.jpg';
import info1 from '../assets/info1.jpg';
import info2 from '../assets/info2.png';
import info3 from '../assets/info3.png';
import info4 from '../assets/info4.webp';
import info5 from '../assets/info5.jpeg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const techStack = [
    tech1, tech2, tech3, tech4, tech5, 
    tech6, tech7, tech8, tech9, tech10
  ];

  const info = [
    [info1, "https://github.com/KUSHAGRA-AGRAWAL-0717","Github"],
    [info2, "https://www.linkedin.com/in/kushagraagrawal017/","LinkedIn"],
    [info3, "https://leetcode.com/u/Kushagra_0717/","LeetCode"],
    [info4, "https://drive.google.com/file/d/1mqF_jSQnIjogfrhj9vG7JuZYeewptNIW/view?usp=sharing","Resume"],
    [info5, "https://www.instagram.com/kushagra_agrawal0717/","Instagram"]
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent, thanks for contacting Kushagra Agrawal!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <section id="contactPage">
      {/* Tech Stack Section */}
      <div id="clients">
        <h1 className="contactPageTitle">Tech Stack</h1>
        <p className="clientDesc">
          Equipped with a dynamic tech stack that bridges cutting-edge web development and AI/ML innovation, 
          I blend MERN expertise with Python-driven intelligence to craft seamless user experiences and data-powered solutions.
        </p>
        <div className="clientImgs">
          {techStack.map((tech, index) => (
            <img 
              src={tech} 
              alt={`Tech ${index + 1}`} 
              className="clientImg" 
              key={index} 
            />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="contactDesc">
          Have a question or want to collaborate? Drop me a message below, <br />and I’ll get back to you!
        </p>
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <input 
            type="text" 
            className="name" 
            placeholder="Your Name" 
            name="your_name" 
            required 
          />
          <input 
            type="email" 
            className="email" 
            placeholder="Your Email" 
            name="your_email" 
            required 
          />
          <textarea 
            name="message" 
            className="msg" 
            rows="5" 
            placeholder="Your Message" 
            required
          ></textarea>
          <button type="submit" className="submitBtn">Submit</button>
          <div className="links">
            {info.map(([image, link], index) => (
              <a href={link} target="_blank" rel="noopener noreferrer" key={index}>
                <img 
                  src={image} 
                  alt={`Link ${index + 1}`} 
                  className="link" 
                />
              </a>
              
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
