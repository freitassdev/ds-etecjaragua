/*
$$$$$$$$$$$$
FREITAS SUPREMACY
$$$$$$$$$$$$
*/

import './Card.css';
import Button from '../Button/Button';
import michel from "../../assets/michel.png";
import natan from "../../assets/natan.png";
import daniel from "../../assets/daniel.png";
import { BiLogoGithub, BiLinkExternal } from 'react-icons/bi';
// eslint-disable-next-line react/prop-types
function ProjectCard({ title, subtitle, description, image, disabled, github, link }) {
    var imagesrc;
    switch (image) {
        case "michel":
            imagesrc = <img src={michel} alt='IA' />;
            break;
        case "natan":
            imagesrc = <img src={natan} alt="Natan" />;
            break;
        case "daniel":
            imagesrc = <img src={daniel} alt="Daniel" />;
            break;
    }
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-header">
                    {imagesrc}
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h2>{title}</h2>
                    </div>
                    <div className="card-subtitle">
                        <p>{subtitle}</p>
                    </div>
                    <div className="card-description">
                        <p>{description}</p>
                    </div>
                    <div className="card-buttons">
                        {disabled ? (
                            <a href={github}>
                                <Button className="project-button" label="Github" ><BiLogoGithub size={23} color='ffffff' /></Button>
                            </a>
                        ) : (
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <a href={disabled ? "#" : link}><Button className="project-button" label="Visitar" ><BiLinkExternal size={23} color='ffffff' /></Button></a>

                                <a href={github} style={{ marginLeft: '0.5em' }}>
                                    <Button className="project-button" label="Github" ><BiLogoGithub size={23} color='ffffff' /></Button>
                                </a>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;