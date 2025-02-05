import React from "react";
import "./style.css";

function Portf() {
  return (
    <div>
      <div className="container">
        <header>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Profile"
            className="profile-pic"
          />
          <h1>Prashant</h1>
          <p>React Developer | Frontend Engineer</p>
        </header>

        <section id="about">
          <h2>About Me</h2>
          <p>
            Passionate React developer skilled in building interactive and
            scalable web applications.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>React Chat App</h3>
            <p>
              A real-time chat application using React, Node.js, and Socket.io.
            </p>
          </div>
          <div className="project">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio showcasing React projects and skills.</p>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: prashant121@example.com</p>
          <p>GitHub: github.com/harry</p>
        </section>
      </div>
    </div>
  );
}

export default Portf;
