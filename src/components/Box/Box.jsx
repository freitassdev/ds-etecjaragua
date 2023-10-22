import { useState } from 'react'
import './Box.css';
import Fade from 'react-reveal/Fade';
import foto1 from "../../assets/etec1.png";
import image from "./base64.json"
function Box({ title }) {
    const base64_1mds = image.image;
    return (
        <div className="box shadow-5">
            <div className="box-container">
                <Fade up>
                    <div className="box-title">
                        <h1 className='title'>{title}</h1>
                    </div>
                </Fade>
                <div className="box-body">
                    {/*seu html do sobre mim aqui */}

                    <Fade up>
                        <div className="box-text">
                            <p>
                                Somos apaixonados por tecnologia e movidos pela inovação. Nossa equipe, formada por dedicados alunos e alunas da Etec Jaraguá, mergulhou de cabeça no mundo do desenvolvimento de sistemas.
                            </p>
                            <p>
                                Em nossa missão está a convicção de que a força de vontade é o motor que impulsiona mudanças significativas. Acreditamos que cada indivíduo possui um potencial extraordinário esperando para ser descoberto e desenvolvido.
                            </p>
                            <p>
                                Na Etec Jaraguá, não apenas cultivamos habilidades técnicas, mas também nutrimos mentes criativas.
                            </p>
                        </div>
                        
                        <div className="box-img-container">
                            <img className='box-img' src={base64_1mds} />
                        </div>
                    </Fade>
                    <br />
                </div>
            </div>
        </div >
    )
}

export default Box
