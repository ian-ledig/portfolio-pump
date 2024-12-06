import React from "react";
import Image from "next/image";
import "./project-card.css";

const ProjectCardComponent: React.FC = ({ src, alt }) => {
    return (
        <div className="project-card">
            <div className="project-card-background">
                <img src={src} alt={alt} />
            </div>
            <div className="project-card-details">

            </div>
        </div>
    );
};

export default ProjectCardComponent;
