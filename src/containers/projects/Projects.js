import React, { useContext } from "react";
import "./Projects.css";
import { projects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{projects.title}</h1>
          <div className="startup-projects-main">
            {projects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={isDark ? "project-item-dark" : "project-item"}
                  onClick={() => openProjectInNewWindow(project.link)}
                >
                  <img alt="Bhavay Working" src={project.image} className="project-image"></img>
                  <div className="project-container-text">
                    <h5 className={isDark ? "project-text-dark" : "project-text"}>{project.name}</h5>
                    <p className={isDark ? "project-description-dark" : "project-description"}>{project.description}</p>
                    <p>
                      <span className={isDark ? "technologies-dark" : "technologies"}>Technologies Used: </span>{project.technologies}
                    </p>
                    <p>URL: <a href={project.link} rel="noopener noreferrer" target="_blank">{project.link}</a></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
