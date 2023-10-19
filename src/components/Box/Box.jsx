import { useState } from 'react'
import './Box.css';
import foto1 from "../../assets/etec1.png";

function Box({ title }) {
    return (
        <div className="box shadow-5">
            <div className="box-container">
                    <div className="box-title">
                        <h1 className='title'>{title}</h1>
                    </div>
                <div className="box-body">
                    {/*seu html do sobre mim aqui */}

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
                        
                        
                        <img className='box-img' src={foto1}/>
                    <br />
                </div>
            </div>
        </div >
    )
}

export default Box
