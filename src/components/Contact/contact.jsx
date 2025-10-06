import React, { useRef, useEffect, useState } from "react";
import "./contact.css";
import tech1 from "../assets/tech1.png";
import tech2 from "../assets/tech2.jpg";
import tech3 from "../assets/tech3.png";
import tech4 from "../assets/tech4.jpg";
import tech5 from "../assets/tech5.webp";
import tech6 from "../assets/tech6.png";
import tech7 from "../assets/tech7.png";
import tech8 from "../assets/tech8.jpg";
import tech9 from "../assets/tech9.jpg";
import tech10 from "../assets/tech10.jpg";
import info1 from "../assets/info1.jpg";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import info4 from "../assets/info4.webp";
import emailjs from "@emailjs/browser";
import twitter from "../assets/Twitter.png";

const Contact = () => {
  const techStack = [
    tech1,
    tech2,
    tech3,
    tech4,
    tech5,
    tech6,
    tech7,
    tech8,
    tech9,
    tech10,
  ];

  const info = [
    [info1, "https://github.com/KUSHAGRA-AGRAWAL-0717", "Github"],
    [info2, "https://www.linkedin.com/in/kushagraagrawal017/", "LinkedIn"],
    [info3, "https://leetcode.com/u/Kushagra_0717/", "LeetCode"],
    [
      info4,
      "https://drive.google.com/file/d/1jqwGeHHoR3ouCSyF3lJ2ccrJbMI3RN3D/view?usp=sharing",
      "Resume",
    ],
    [twitter, "https://x.com/KushagraAg0717", "Twitter X"],
  ];

  const form = useRef();
  const techSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  // Controlled fields for floating labels and status
  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [msgVal, setMsgVal] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Animation on scroll functionality
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const techImgsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const images = entry.target.querySelectorAll(".clientImg");
          images.forEach((img, index) => {
            img.style.animationDelay = `${index * 0.1}s`;
            img.classList.add("animate-in");
          });
        }
      });
    }, observerOptions);

    const formObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("form-animate");
        }
      });
    }, observerOptions);

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("title-animate");
        }
      });
    }, observerOptions);

    // Store current ref values in variables
    const currentTechSection = techSectionRef.current;
    const currentContactSection = contactSectionRef.current;

    if (currentTechSection) {
      techImgsObserver.observe(currentTechSection);
      const techTitle = currentTechSection.querySelector(".contactPageTitle");
      if (techTitle) titleObserver.observe(techTitle);
    }

    if (currentContactSection) {
      const contactForm = currentContactSection.querySelector(".contactForm");
      if (contactForm) formObserver.observe(contactForm);

      const contactTitle =
        currentContactSection.querySelector(".contactPageTitle");
      if (contactTitle) titleObserver.observe(contactTitle);
    }

    return () => {
      if (currentTechSection) {
        techImgsObserver.unobserve(currentTechSection);
      }
      if (currentContactSection) {
        const contactForm = currentContactSection.querySelector(".contactForm");
        if (contactForm) formObserver.unobserve(contactForm);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          // reset fields
          setNameVal("");
          setEmailVal("");
          setMsgVal("");
          // hide success after a short delay
          setTimeout(() => setSuccess(false), 3200);
        },
        (err) => {
          setSending(false);
          console.log("FAILED...", err.text || err);
          setError("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <section id="contactPage">
      {/* background animated blobs */}
      <div className="contactBlobs" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>

      {/* Tech Stack Section */}
      <div id="clients" ref={techSectionRef}>
        <h1 className="contactPageTitle">Tech Stack</h1>
        <p className="clientDesc">
          Equipped with a dynamic tech stack that bridges cutting-edge web
          development and AI/ML innovation, I blend MERN expertise with
          Python-driven intelligence to craft seamless user experiences and
          data-powered solutions.
        </p>
        <div className="clientImgs">
          {techStack.map((tech, index) => (
            <img
              src={tech}
              alt={`Tech ${index + 1}`}
              className="clientImg"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" ref={contactSectionRef}>
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="contactDesc">
          Have a question or want to collaborate? Drop me a message below,{" "}
          <br />
          and I'll get back to you!
        </p>
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <div className={`input-container ${nameVal ? "filled" : ""}`}>
            <input
              type="text"
              className="name"
              placeholder=""
              name="your_name"
              value={nameVal}
              onChange={(e) => setNameVal(e.target.value)}
              aria-label="Your name"
              required
            />
            <label className="floating-label">Your Name</label>
            <span className="focus-border"></span>
          </div>

          <div className={`input-container ${emailVal ? "filled" : ""}`}>
            <input
              type="email"
              className="email"
              placeholder=""
              name="your_email"
              value={emailVal}
              onChange={(e) => setEmailVal(e.target.value)}
              aria-label="Your email"
              required
            />
            <label className="floating-label">Your Email</label>
            <span className="focus-border"></span>
          </div>

          <div className={`input-container ${msgVal ? "filled" : ""}`}>
            <textarea
              name="message"
              className="msg"
              rows="5"
              placeholder=""
              value={msgVal}
              onChange={(e) => setMsgVal(e.target.value)}
              aria-label="Your message"
              required
            ></textarea>
            <label className="floating-label">Your Message</label>
            <span className="focus-border textarea"></span>
          </div>

          <button type="submit" className="submitBtn" disabled={sending}>
            <span>{sending ? "Sending..." : "Submit"}</span>
            <div className="button-effect"></div>
          </button>

          {success && (
            <div className="submitSuccess" role="status" aria-live="polite">
              <div className="checkmark">✓</div>
              <div className="successText">Message sent — thank you!</div>
            </div>
          )}

          {error && <div className="submitError">{error}</div>}

          <div className="links">
            {info.map(([image, link, name], index) => (
              <div
                className="link-wrapper"
                key={index}
                data-tooltip={name}
                style={{ "--i": index }}
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img src={image} alt={name} className="link" />
                </a>
              </div>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
