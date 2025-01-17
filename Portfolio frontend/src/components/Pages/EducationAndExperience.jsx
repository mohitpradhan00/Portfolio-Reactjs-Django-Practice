import React from 'react'
import "../../styles/eduandexp.css";

const EducationAndExperience = () => {
  return (
    <div className="container-ee">
      <div class="ExpEdu">
        <section class="experience EECOL">
          <header class="title">
            <h2>Experience</h2>
          </header>
          <div class="ExpEduContent">
            <div class="card">
              <h4>Oct 2024 - Present</h4>
              <h3>Auriga IT</h3>
              <h3>(Associate Software Engineer)</h3>
              <p>
                I actively contribute to designing, developing, and maintaining
                software solutions. My role involves collaborating with
                cross-functional teams to build high-quality, scalable
                applications while continuously learning and implementing new
                technologies.
              </p>
            </div>
            <div class="card">
              <h4>May 2024 - July 2025</h4>
              <h3>Arkle Consultancy Pvt. Ltd</h3>
              <h3>(IT Intern)</h3>
              <p>
                Developed responsive websites with React.js, improving user
                experience. Integrated Node.js and Express.js for backend APIs
                and MongoDB for optimized data management. Utilized Cloudinary
                for media handling and performed testing, debugging, and
                performance tuning to ensure scalable, high-quality solutions.
              </p>
            </div>
          </div>
        </section>
        <section class="education EECOL">
          <header class="title">
            <h2>Education</h2>
          </header>
          <div class="ExpEduContent">
            <div class="card">
              <h4>2023 - 2025</h4>
              <h3>Master's of Computer Application</h3>
              <p>
                CGPA - 9.25,
                <br />
                Poornima University, Jaipur
              </p>
            </div>
            <div class="card">
              <h4>2019 - 2022</h4>
              <h3>Bachlore's in Commerce</h3>
              <p>
                Percentage - 60.00%,
                <br />
                University of Kota
              </p>
            </div>
            <div class="card">
              <h4>2018 - 2019</h4>
              <h3>12th ( Commerce )</h3>
              <p>
                Percentage - 86.60%,
                <br />
                Kendriya Vidyalaya Baran
              </p>
            </div>
            <div class="card">
              <h4>2016 - 2017</h4>
              <h3>10th Class</h3>
              <p>
                CGPA - 8.0,
                <br />
                Kendriya Vidyalaya Baran
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EducationAndExperience
