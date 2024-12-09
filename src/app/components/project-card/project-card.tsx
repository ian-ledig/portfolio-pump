import React from "react";
import Image from "next/image";
import "./project-card.css";

const ProjectCardComponent: React.FC = ({ src, title, description, technologies, links }) => {
    return (
        <article className="project-card">
            <div className="project-card-background">
                <img src={src} alt={title} />
            </div>
            <div className="project-card-detail">
                <h3 className="subtitle-1">{title}</h3>
                <div className="project-card-detail-container">
                    {technologies.map((technology) => (
                        <div className="chip">{technology}</div>
                    ))}
                </div>
                <div className="subtitle-2 text-justify">{description}</div>
                {links && links.length > 0 && (
                    <>
                        <div>Links</div>
                        <div className="project-card-detail-container">
                            {links.map((link) => (
                                <a href={link.href} target="_blank">
                                    <Image 
                                        src={link.image}
                                        alt={`${title} icon`}
                                        width={40}
                                        height={40}
                                        priority
                                    />
                                </a>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </article>
    );
};

export default ProjectCardComponent;
