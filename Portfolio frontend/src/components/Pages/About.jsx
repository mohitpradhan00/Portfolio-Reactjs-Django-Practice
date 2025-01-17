import React from 'react'
import "../../styles/about.css";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h1>About Me</h1>
        <p>
          Hi, I'm Mohit Pradhan, a passionate and dedicated software developer.
          With strong expertise in Java, Python, JavaScript, and MERN stack
          technologies, I have hands-on experience in both front-end and
          back-end development. I thrive on solving complex problems and
          developing scalable, efficient solutions that enhance business
          performance. I am currently pursuing a Master's degree in Computer
          Applications from Poornima University, where I have maintained a CGPA
          of 9.25.
        </p>
        <section
          id="skills"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "50px 0",
          }}
        >
          <div className="container">
            <h2 className="section-title" style={{ color: "#077b32" }}>
              Skills
            </h2>
            <div className="skills-wrapper">
              {/* Skill Card 1 */}
              <div className="skill-card">
                <h3>Frontend Development</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              {/* Skill Card 2 */}
              <div className="skill-card">
                <h3>Backend Development</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>SQL</li>
                </ul>
              </div>
              {/* Skill Card 3 */}
              <div className="skill-card">
                <h3>Other Skills</h3>
                <ul>
                  <li>Git &amp; GitHub</li>
                  <li>REST API</li>
                  <li>Socket.io</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About
