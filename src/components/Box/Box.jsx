import { useState } from 'react'
import './Box.css';
import Card from '../Card/Card';

function Box({ children, title }) {
    return (
        <div className="box shadow-5">
            <div className="box-container">
                <div className="box-title">
                    <h1 className='title'>{title}</h1>
                </div>
                <div className="box-body">
                    {/*seu html do sobremim aqui */}

                    <p>Somos apaixonados por tecnologia e movidos pela inovação. Nossa equipe, formada por dedicados alunos e alunas da Etec Jaraguá, mergulhou de cabeça no mundo do desenvolvimento de sistemas.  
                    Em nossa missão está a convicção de que a força de vontade é o motor que impulsiona mudanças significativas. Acreditamos que cada indivíduo possui um potencial extraordinário esperando para ser descoberto e desenvolvido.</p>
                    <br/>
                    <p> Na Etec Jaraguá, não apenas cultivamos habilidades técnicas, mas também nutrimos mentes criativas.</p>
                    <br/>
                    <div className="cards-container">
                        <Card number="one" title="Alta Demanda" description="Profissionais são altamente procurados em várias indústrias, garantindo estabilidade e oportunidades de emprego."></Card>
                        <Card number="two" title="Diversidade" description="Possui diversas àreas, como web, aplicativos móveis, segurança cibernética e inteligência artificial, oferecendo escolhas alinhadas aos interesses."></Card>
                        <Card number="three" title="Salário Alto" description="Desenvolvimento de Sistemas é uma das àreas com os melhores pagamentos e benefícios, valorizando habilidades e experiência."></Card>
                        <Card number="four" title="Flexibilidade" description="Muitas posições permitem home office, proporcionando um equilíbrio saudável entre vida profissional e pessoal."></Card>
                    </div>
                    
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Box
