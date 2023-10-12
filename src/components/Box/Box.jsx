import { useState } from 'react'
import './Box.css';
import Card from '../Card/Card';
import Fade from 'react-reveal/Fade';
function Box({ children, title }) {
    return (
        <div className="box shadow-5">
            <div className="box-container">
                <Fade up>
                    <div className="box-title">
                        <h1 className='title'>{title}</h1>
                    </div>
                </Fade>
                <div className="box-body">
                    {/*seu html do sobremim aqui */}

                    <Fade up>
                        <p style={{ textAlign: "center" }}>Somos apaixonados por tecnologia e movidos pela inovação. Nossa equipe, formada por dedicados alunos e alunas da Etec Jaraguá, mergulhou de cabeça no mundo do desenvolvimento de sistemas.
                            Em nossa missão está a convicção de que a força de vontade é o motor que impulsiona mudanças significativas. Acreditamos que cada indivíduo possui um potencial extraordinário esperando para ser descoberto e desenvolvido. <br />  Na Etec Jaraguá, não apenas cultivamos habilidades técnicas, mas também nutrimos mentes criativas.</p>
                    </Fade>
                    <br />
                    {children}
                </div>
            </div>
        </div >
    )
}

export default Box
