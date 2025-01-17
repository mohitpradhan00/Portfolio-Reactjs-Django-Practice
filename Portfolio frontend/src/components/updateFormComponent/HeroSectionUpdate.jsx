import React, { useState, useEffect } from "react";
import api from "../../api"; // Import the api.js file
import "../../styles/UpdateFormCss/UpdateHero.css";

const HeroSectionUpdate = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    github: "",
    twitter: "",
    insta: "",
    facebook: "",
    image: null,
  });
  const [currentData, setCurrentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch current Hero Section data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/update/hero/"); // Use the api instance
        if (response.data.length > 0) {
          setCurrentData(response.data[response.data.length-1]); // Update current data
        }
      } catch (err) {
        console.error("Failed to fetch Hero Section data:", err);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await api.post("/update/hero/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Hero section updated successfully!");
      setCurrentData(response.data); // Update the card with the new data
    } catch (err) {
      setError("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero-section-container">
      <div className="hero-form-container">
        <form className="hero-form" onSubmit={handleSubmit}>
          <h2>Hero Section Form</h2>
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>GitHub</label>
            <input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              type="url"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Instagram</label>
            <input
              type="url"
              name="insta"
              value={formData.insta}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Facebook</label>
            <input
              type="url"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input type="file" name="image" onChange={handleFileChange} />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {currentData && (
        <div className="hero-card">
          <h2>Current Hero Section</h2>
          <p>
            <strong>Name:</strong> {currentData.fname} {currentData.lname}
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href={currentData.github} target="_blank" rel="noreferrer">
              {currentData.github}
            </a>
          </p>
          <p>
            <strong>Twitter:</strong>{" "}
            <a href={currentData.twitter} target="_blank" rel="noreferrer">
              {currentData.twitter}
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>{" "}
            <a href={currentData.insta} target="_blank" rel="noreferrer">
              {currentData.insta}
            </a>
          </p>
          <p>
            <strong>Facebook:</strong>{" "}
            <a href={currentData.facebook} target="_blank" rel="noreferrer">
              {currentData.facebook}
            </a>
          </p>
          {currentData.image && (
            <div className="hero-image">
              <strong>Image:</strong>
              <img
                src={currentData.image}
                alt="Hero"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeroSectionUpdate;
