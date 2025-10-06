import React, { useEffect, useRef, useCallback } from "react";
import "./skill.css";
import webpage from "../assets/webpage.jpg";
import ui from "../assets/ui-ux.png";
import ml from "../assets/ml.jpg";

// Small reusable ProgressRing component using SVG (no external deps)
// Accepts `id` (unique identifier) and `image` (url) to render the photo inside the ring.
const ProgressRing = ({
  id = "ring",
  size = 72,
  stroke = 8,
  progress = 80,
  image = null,
  className = "",
}) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  // calculate inner image size so it's fully inside the stroke
  const innerDiameter = size - 2 * stroke - 6; // 6px extra padding inside the stroke
  const imgPos = (size - innerDiameter) / 2;

  return (
    <svg
      className={`progressRing ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={`Skill proficiency ${progress} percent`}
    >
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffdf00" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffb400" stopOpacity="0.9" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <circle cx={size / 2} cy={size / 2} r={innerDiameter / 2} />
        </clipPath>
      </defs>

      {/* track + progress circle */}
      <g>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={`url(#${id}-grad)`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.8s ease" }}
        />
      </g>

      {/* embedded image clipped to circle so it's perfectly inside the ring */}
      {image && (
        <image
          href={image}
          x={imgPos}
          y={imgPos}
          width={innerDiameter}
          height={innerDiameter}
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${id}-clip)`}
          role="presentation"
        />
      )}
    </svg>
  );
};

const Skill = () => {
  const skillsRef = useRef(null);

  // Intersection observer to add animate class with stagger using data-delay
  useEffect(() => {
    const items = skillsRef.current
      ? skillsRef.current.querySelectorAll(".skillBar")
      : [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseInt(el.dataset.delay || "0", 10);
            setTimeout(() => el.classList.add("animate"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  // Simple tilt effect on mouse move for each skill bar (no library)
  const attachTilt = useCallback((el) => {
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateX(${(-y * 6).toFixed(
        2
      )}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
    };
    const reset = () => {
      el.style.transform = "";
    };
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section id="skills" ref={skillsRef} aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="skillTitle">
        What I Do
      </h2>
      <p className="skillDesc">
        I'm a MERN stack developer focused on building fast, accessible, and
        delightful user experiences. I also explore AI/ML to bring intelligent
        features to apps.
      </p>

      <div className="skillsBars">
        <div
          className="skillBar"
          data-delay="0"
          ref={attachTilt}
          tabIndex={0}
          role="article"
          aria-label="UI UX skill"
        >
          <div className="skillVisual">
            <ProgressRing
              id="ring-ui"
              size={72}
              stroke={8}
              progress={88}
              image={ui}
            />
          </div>
          <div className="skillBarText">
            <h3>UI/UX Design</h3>
            <p>
              Designing intuitive interfaces that prioritize clarity and
              delight.
            </p>
          </div>
        </div>

        <div
          className="skillBar"
          data-delay="150"
          ref={attachTilt}
          tabIndex={0}
          role="article"
          aria-label="Web development skill"
        >
          <div className="skillVisual">
            <ProgressRing
              id="ring-web"
              size={72}
              stroke={8}
              progress={92}
              image={webpage}
            />
          </div>
          <div className="skillBarText">
            <h3>Web Development</h3>
            <p>
              Building performant, maintainable web apps using modern stacks.
            </p>
          </div>
        </div>

        <div
          className="skillBar"
          data-delay="300"
          ref={attachTilt}
          tabIndex={0}
          role="article"
          aria-label="AI and machine learning skill"
        >
          <div className="skillVisual">
            <ProgressRing
              id="ring-ml"
              size={72}
              stroke={8}
              progress={72}
              image={ml}
            />
          </div>
          <div className="skillBarText">
            <h3>AI / ML</h3>
            <p>
              Applying machine learning techniques to solve real problems and
              prototype intelligent features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
