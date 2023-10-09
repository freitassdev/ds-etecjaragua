import './Card.css';
import VanillaTilt from 'vanilla-tilt';
function Card({ title, number, description }) {
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5
    })
    return (
        <div className={`card shadow-5 ${number}`} id='card'>
            <div className="card-title">
                <h1>{title}</h1>
            </div>
            <div className="card-description">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
