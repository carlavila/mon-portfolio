import React, { useState } from "react";
import "./project.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { DiGithubBadge } from "react-icons/di";
import { IoMdClose } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ProjectsData from "./ProjectData";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#f1e9ff",
  border: "none",
  boxShadow: 24,
  p: "2rem",
  borderRadius: "1.25rem",
  '@media screen and (max-width: 600px)': {
    width: '100%',
    maxWidth: '100%',
  }
};

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFilter = (category) => {
    setFilter(category);
  };

  const openGitHubLink = (link) => {
    window.open(link, "_blank");
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const filteredProjects = () => {
    // Suppose ProjectsData is defined elsewhere
    if (filter === "all") {
      return ProjectsData;
    } else if (filter === "web") {
      return ProjectsData.filter((project) =>
        [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12].includes(project.id)
      );
    } else if (filter === "design") {
      return ProjectsData.filter((project) => project.id === 6);
    } else if (filter === "accessibility_seo") {
      return ProjectsData.filter((project) => [2, 7, 13].includes(project.id));
    }
  };

  return (
    <div className="projects">
      <div className="bloc-titles">
        <h2 className="h2 h2-projects">Mes Projets</h2>
        <p className="p-projects-title">Portfolio</p>
      </div>

      <div className="filter-bloc-buttons">
        <button
          className={
            filter === "all" ? "button-filter active" : "button-filter"
          }
          onClick={() => handleFilter("all")}
        >
          Tous
        </button>
        <button
          className={
            filter === "web" ? "button-filter active" : "button-filter"
          }
          onClick={() => handleFilter("web")}
        >
          Web
        </button>
        <button
          className={
            filter === "design" ? "button-filter active" : "button-filter"
          }
          onClick={() => handleFilter("design")}
        >
          Design
        </button>
        <button
          className={
            filter === "accessibility_seo"
              ? "button-filter active"
              : "button-filter"
          }
          onClick={() => handleFilter("accessibility_seo")}
        >
          Accessibilité et SEO
        </button>
      </div>

      <section className="projects-list">
        {filteredProjects().map((project) => (
          <div className="item-project" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="img-projects"
            />
            <div className="bloc-description">
              <h3 className="title-projects">{project.title}</h3>
              <div className="bloc-buttons-links">
                <button
                  className="projects-link"
                  onClick={() => openModal(project)}
                >
                  {" "}
                  Description <IoIosArrowRoundForward className="icon-arrow" />{" "}
                </button>
                <button
                  className="projects-link"
                  onClick={() => openGitHubLink(project.link)}
                >
                  GitHub <DiGithubBadge className="icon-arrow" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal}
        onClose={closeModal}
        closeAfterTransition
      >
        <Fade in={showModal}>
          <Box sx={style}>
            <div style={{ display: "flex", justifyContent: "flex-end", fontSize: "17px" }}>
              <IoMdClose
                onClick={closeModal}
                style={{ cursor: "pointer" }}
              />
            </div>
            <Typography
              id="transition-modal-title"
              className="custom-title"
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              {selectedProject && selectedProject.title}
            </Typography>
            <div className="bloc-description">
              <Typography
                id="transition-modal-description"
                className="custom-description"
                style={{ fontFamily: "Lato, sans-serif", fontSize: "16px" }}
              >
                {selectedProject && selectedProject.description}
              </Typography>
            </div>
            <div className="bloc-stack-description">
              <Typography
                id="transition-modal-stack1"
                className="custom-stack"
                style={{ fontFamily: "Lato, sans-serif", fontSize: "14px", fontWeight: "300" }}
              >
                {selectedProject && selectedProject.stack1 ? (
                  <>
                    <div className="check-stack">
                      <GiCheckMark className="icon-check" />
                      {selectedProject.stack1}
                    </div>
                  </>
                ) : null}
              </Typography>

              <Typography
                id="transition-modal-stack1"
                className="custom-stack"
                style={{ fontFamily: "Lato, sans-serif", fontSize: "14px", fontWeight: "300" }}
              >
                {selectedProject && selectedProject.stack2 ? (
                  <>
                    <div className="check-stack">
                      <GiCheckMark className="icon-check" />
                      {selectedProject.stack2}
                    </div>
                  </>
                ) : null}
              </Typography>

              <Typography
                id="transition-modal-stack1"
                className="custom-stack"
                style={{ fontFamily: "Lato, sans-serif", fontSize: "14px", fontWeight: "300" }}
              >
                {selectedProject && selectedProject.stack3 ? (
                  <>
                    <div className="check-stack">
                      <GiCheckMark className="icon-check" />
                      {selectedProject.stack3}
                    </div>
                  </>
                ) : null}
              </Typography>

              <Typography
                id="transition-modal-stack1"
                className="custom-stack"
                style={{ fontFamily: "Lato, sans-serif", fontSize: "14px", fontWeight: "300" }}
              >
                {selectedProject && selectedProject.stack4 ? (
                  <>
                    <div className="check-stack">
                      <GiCheckMark className="icon-check" />
                      {selectedProject.stack4}
                    </div>
                  </>
                ) : null}
              </Typography>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Projects;
