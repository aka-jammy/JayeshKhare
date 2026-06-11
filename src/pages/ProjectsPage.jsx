import ProjectCard from "../components/ProjectCard"
import "./ProjectsPage.css"

import { useState } from "react";
import { projects } from "../data/projects";
import Button from "../components/Button";
import IconButton from "../components/IconButton";

import CloseIcon from "../assets/icons/ic_cross.svg";


function ProjectsPage() {
    const [activeProject, setActiveProject] = useState(null);

    function openInBehance(link) {
        if (!link) return;

        window.open(link, '_blank', 'noopener,noreferrer');
    }

    return (
        <div id='projects'>
            <section id="projects-section">

                <h1 className="section-title">Projects</h1>

                <div className="projects-container">
                    {projects.map((project) => (
                        <ProjectCard
                            title={project.title}
                            desc={project.description}
                            thumbnail={project.thumbnail}
                            key={project.id}
                            link={project.link}


                            onClick={() => setActiveProject(project)}
                        />
                    ))}
                </div>



                {
                    activeProject && (
                        <div
                            className="modal-overlay"
                            onClick={() => setActiveProject(null)}
                        >
                            <div
                                className="modal-window"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="modal-top-bar">
                                    <h2 id="title">{activeProject.title}</h2>

                                    <IconButton
                                        hoverColor={"--button-background-negative"}
                                        className={"close-button"}
                                        background={CloseIcon}
                                        onClick={() => setActiveProject(null)}
                                        
                                    />
                                </div>

                                <div className="project-content">
                                    {activeProject.caseStudyImages.map((item, index) =>
                                        item.includes("video") ? (
                                            <div
                                                key={index}
                                                className="iframe-container">
                                                <iframe
                                                    className="case-study-video"
                                                    loading="lazy"
                                                    src={item}
                                                    frameBorder="0"
                                                    allow="autoplay"
                                                    sandbox="allow-same-origin
                                                    allow-scripts allow-pointer-lock
                                                    allow-forms allow-popups
                                                    allow-popups-to-escape-sandbox" />
                                            </div>

                                        ) : (
                                            <img
                                                key={index}
                                                src={item}
                                                className="case-study-image"
                                                draggable="false"
                                                loading="lazy"
                                            />
                                        )
                                    )}
                                </div>

                                <Button className="open-in-behance-btn" onClick={() => openInBehance(activeProject.link)}>Open In Behance</Button>
                            </div>
                        </div>
                    )
                }

            </section>
        </div>
    )

}

export default ProjectsPage

