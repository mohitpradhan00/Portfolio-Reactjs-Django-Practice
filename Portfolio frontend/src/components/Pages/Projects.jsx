import React, { useState } from "react";
import "../../styles/project.css";

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const projects = [
    {
      id: 1,
      title: "Talk-A-Tive",
      image: "chatapp.png",
      description: `Developed a real-time and highly responsive chat application enabling one-to-one and group messaging functionalities to facilitate seamless communication between users. The application enables users to exchange text messages in real-time and offers an intuitive user interface for an enhanced user experience. Tech: ReactJs, NodeJs, ExpressJs, socket.io and MongoDB`,
    },
    {
      id: 2,
      title: "INoteBook",
      image: "inotebook.png",
      description: `- Try Me
        <a href="https://my-i-notebook.netlify.app/" target="_blank" rel="noopener noreferrer">https://my-i-notebook.netlify.app/</a>
        <br />- Created a cloud-based notes app for secure note storage.
        <br />- Utilized MongoDB Atlas for database management.
        <br />- Built REST API using Express.js and Node.js.
        <br />- Technologies Used: ReactJS, NodeJS, ExpressJS, MongoDB.`,
    },
    {
      id: 3,
      title: "Weather App",
      image: "weatherapp.png",
      description: `- Try Me
        <a href="https://weather24app7.netlify.app/" target="_blank" rel="noopener noreferrer">https://weather24app7.netlify.app/</a>
        <br />- Developed a Weather WebApp using OpenWeather API.
        <br />- Enabled searches for weather, humidity, wind speed, longitude, and latitude.
        <br />- Integrated geolocation for automatic weather data retrieval.
        <br />- Technologies Used: CSS, JavaScript, ReactJS.`,
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openModal(project.id)}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h2>{project.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {projects.map((project) => (
        <div
          key={project.id}
          className={`modal ${activeModal === project.id ? "show" : ""}`}
          onClick={(e) => {
            if (e.target.classList.contains("modal")) closeModal();
          }}
        >
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              ×
            </span>
            <h2>{project.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
