import React, { useEffect, useState } from 'react'
import "../../styles/navbar.css";
import { NavLink } from 'react-router-dom';
import api from "../../api";

const Navbar = () => {
  const [currentData, setCurrentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect   (() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/update/hero/");
        if (response.data.length > 0) {
          setCurrentData(response.data[response.data.length - 1]);
        } else {
          setError("No data found for the Nav Section.");
        }
      } catch (err) {
        console.error("Failed to fetch Nav Section data:", err);
        setError("Failed to fetch Hero Section data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
    function hamburg() {
      const navbar = document.querySelector(".dropdown");
      navbar.style.transform = "translateY(0px)";
    }

    function cancel() {
      const navbar = document.querySelector(".dropdown");
      navbar.style.transform = "translateY(-500px)";
    }
  return (
    <nav>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
      <div className="nav-container">
        <div className="logo" data-aos="zoom-in" data-aos-duration={1500}>
          {currentData.fname} <span>{currentData.lname}</span>
        </div>
        <div className="links">
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-delay={100}
          >
            <a href="#">Home</a>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-delay={200}
          >
            <a href="#about">About</a>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-delay={300}
          >
            <a href="#projects">Projects</a>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-delay={400}
          >
            <a href="#contact">Contact</a>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-delay={400}
          >
            <NavLink to="/updateform">Update Form</NavLink>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-delay={500}
          />
          <a href="/logout">Logout</a>
        </div>
        
        <i className="fa-solid fa-bars hamburg" onClick={hamburg} />
      <div className="dropdown">
        <div className="links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <i className="fa-solid fa-xmark cancel" onClick={cancel} />
        </div>
      </div>
      </div> )}
    </nav>
  );
}

export default Navbar
