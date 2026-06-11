import BaseCard from "./BaseCard"

import "../styles/ProjectCard.css"

function ProjectCard({ thumbnail, desc, title, onClick }) {
    return (
        <>
            <BaseCard className="base-card" onClick={onClick}>
                <img className="thumbnail" src={thumbnail} alt="thumbnail" />
                <div className="text-container">
                    <h3 id="title">{title}</h3>
                    <p id="description">{desc}</p>
                </div>
            </BaseCard>
        </>
    )
}

export default ProjectCard