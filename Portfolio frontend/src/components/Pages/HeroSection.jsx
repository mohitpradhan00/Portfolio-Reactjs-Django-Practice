import React, { useEffect, useRef, useState } from "react";
import logo from "../../images/photo.png";
import "../../styles/hero.css";
import api from "../../api";

const HeroSection = () => {
  const texts = ["DEVELOPER", "CODER", "ENGINEER"];
  const typewriterRef = useRef(null);
  const charIndexRef = useRef(0);
  const textIndexRef = useRef(0);
  const isErasingRef = useRef(false);
  const typingIntervalRef = useRef(null);
  const [currentData, setCurrentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/update/hero/");
        if (response.data.length > 0) {
          setCurrentData(response.data[response.data.length - 1]);
        } else {
          setError("No data found for the Hero Section.");
        }
      } catch (err) {
        console.error("Failed to fetch Hero Section data:", err);
        setError("Failed to fetch Hero Section data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const speed = 100; // Typing speed
    const eraseSpeed = 50; // Erasing speed
    const delayBetweenWords = 1000; // Delay before erasing or typing next word

    const typeWriter = () => {
      if (typewriterRef.current) {
        const currentText = texts[textIndexRef.current];
        if (!isErasingRef.current) {
          if (charIndexRef.current < currentText.length) {
            typewriterRef.current.innerHTML += currentText.charAt(
              charIndexRef.current
            );
            charIndexRef.current++;
          } else {
            isErasingRef.current = true;
            clearInterval(typingIntervalRef.current);
            setTimeout(() => {
              typingIntervalRef.current = setInterval(typeWriter, eraseSpeed);
            }, delayBetweenWords);
          }
        } else {
          if (charIndexRef.current > 0) {
            typewriterRef.current.innerHTML = currentText.slice(
              0,
              charIndexRef.current - 1
            );
            charIndexRef.current--;
          } else {
            isErasingRef.current = false;
            textIndexRef.current = (textIndexRef.current + 1) % texts.length;
            clearInterval(typingIntervalRef.current);
            setTimeout(() => {
              typingIntervalRef.current = setInterval(typeWriter, speed);
            }, 500);
          }
        }
      }
    };

    typingIntervalRef.current = setInterval(typeWriter, speed);

    return () => clearInterval(typingIntervalRef.current);
  }, [texts]);

  return (
    <div className="hero-section-container">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="main-container">
          <div className="image" data-aos="zoom-out" data-aos-duration={3000}>
            <img src={currentData.image || logo} alt="Profile" />
          </div>
          <div className="content">
            <h1
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-delay={700}
            >
              Hey I'm <span>{currentData.fname}</span>
            </h1>
            <div
              className="typewriter"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-delay={900}
            >
              I'm a <span className="typewriter-text" ref={typewriterRef} />
              <label>|</label>
            </div>
            <p
              data-aos="flip-down"
              data-aos-duration={1500}
              data-aos-delay={1100}
            >
              I seek challenging opportunities where I can fully use my skills
              for the success of the organization and where I can enhance my
              technical skills along with non-technical skills and contribute to
              the growth of the organization by delivering efficient and
              effective solutions.
            </p>
            <div className="social-links">
              <a
                href={currentData.github}
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={1300}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                href={currentData.facebook}
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={1400}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook" />
              </a>
              <a
                href={currentData.insta}
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={1500}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a
                href={currentData.twitter}
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={1600}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter" />
              </a>
            </div>
            <div
              className="btn"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-delay={1800}
            >
              <a href="Resume.pdf" download="mohit_pradhan_resume">
                <button>Download CV</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
