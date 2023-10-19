/*
$$$$$$$$$$$$
FREITAS SUPREMACY
$$$$$$$$$$$$
*/

import './Card.css';
import { Button } from 'primereact/button';
import michel from "../../assets/michel.png";
import natan from "../../assets/natan.png";
import daniel from "../../assets/daniel.png";
// eslint-disable-next-line react/prop-types
function ProjectCard({ title, subtitle, description, image, disabled, github, link }) {
    var imagesrc;
    switch(image) {
        case "michel":
            imagesrc = <img src={michel} alt='IA'/>;
            break;
        case "natan": 
            imagesrc = <img src={natan} alt="Natan"/>;
            break;
        case "daniel":
            imagesrc = <img src={daniel} alt="Daniel"/>;
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
                            <a href={github}><Button label="GitHub" className='project-button' severity="secondary" icon="pi pi-github" /></a>
                        ) : (
                            <div>
                                <a href={disabled ? "#" : link}><Button disabled={disabled} label="Visitar" className='project-button' icon="pi pi-external-link" /></a>
                                <a href={github}><Button label="GitHub" className='project-button' severity="secondary" icon="pi pi-github" style={{ marginLeft: '0.5em' }} /></a>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;