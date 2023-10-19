/*

FREITAS SUPREMACY

*/
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Box from './components/Box/Box';
import { Steps } from 'primereact/steps';
import './App.css';
import AccordionsCurse from './components/Accordion/Accordion';
import cartaz from './assets/cartaz.png';
import { Galleria } from 'primereact/galleria';
import Fade from 'react-reveal/Fade';
import etec1 from "./assets/etec1.png";
import foto2 from "./assets/foto2.jpeg";
import foto3 from "./assets/foto3.jpeg";
import foto4 from "./assets/foto4.jpeg";
import ProjectCard from "./components/Card/Card"
function App() {
  const [images, setImages] = useState(null);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    setAtivo(true);
    setImages([
      {
        itemImageSrc: etec1,
        thumbnailImageSrc: etec1,
        alt: 'Foto 1',
        title: 'Etec Jaraguá'
      },
      {
        itemImageSrc: foto2,
        thumbnailImageSrc: foto2,
        alt: 'Foto 2',
        title: 'Etec Jaraguá'
      },
      {
        itemImageSrc: foto3,
        thumbnailImageSrc: foto3,
        alt: 'Foto 3',
        title: 'Etec Jaraguá'
      },
      {
        itemImageSrc: foto4,
        thumbnailImageSrc: foto4,
        alt: 'Foto 4',
        title: 'Etec Jaraguá'
      },
    ])
  }, []);

  const items = [
    {
      label: 'Inscrição',
    },
    {
      label: 'Prova',
    },
    {
      label: 'Resultado',
    }
  ];

  const itemTemplate = (item) => {
    return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block', }} />;
  };

  return (
    <>
      <div className={`entrada content content-blur scroll-container ${ativo ? "ativo" : ""}`}>
        <Navbar />
        {/* SECTION HOME: Michel */}
        <section id="home">
          <div className='background'>
            <Fade up>
              <div className='home-container'>
                <h1 className='home-title'>Se descubra no mundo da programação!</h1>
                <p className='home-description'>Sua porta de entrada para o emocionante mundo do desenvolvimento de sistemas. Nosso objetivo não é apenas apresentar um pouco sobre o nosso curso, nós cultivamos mentes criativas, inspiramos inovação e capacitamos futuros desenvolvedores a transformarem suas paixões em soluções digitais. Explore o mundo da tecnologia com a nossa comunidade de programadores. Juntos, na Etec Jaraguá.</p>
              </div>
            </Fade>
          </div>
        </section>
        <section id="divisor" className="divisor">
          <div className="divisor-container">
            <h1 className='title'>Faça parte do curso que irá transformar sua vida!</h1>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#64b5f6" d="M0,32L120,26.7C240,21,480,11,720,10.7C960,11,1200,21,1320,26.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
          </svg>
        </section >
        {/* SECTION CURSE: Michel */}
        <section id="curse">
          <div className="curse-container curse-box">
            <div className="curse-title">
              <h1 className="title-bold">
                Desenvolvimento de Sistemas
              </h1>
            </div>
            <div className="accordions-container">
              <AccordionsCurse />
            </div>

            <div className='title-projetos'>Confira nossos projetos</div>

            <div className='projects-cards'>
              <ProjectCard title="Inteligência Artificial" subtitle="Michel de Freitas" description="Quando participei do Hackathon 2023 do centro paula souza, fui encarregado de desenvolver uma inteligência artificial para o reconhecimento de objetos em tempo real." image="michel" disabled={true} github="https://github.com/freitassdev" />

              <ProjectCard title="Age Calculator" subtitle="Daniel Bueno" description="O Age Calculator calcula sua idade precisamente, em anos, meses e dias. Realizei o desafio com os conhecimentos que aprendi em Programação Web e Técnicas de Programação e Algoritmos." image="daniel" link="https://danielsrbueno.github.io/age-calculator" github="https://github.com/danielsrbueno" />

              <ProjectCard title="Portfólio" subtitle="Natan Santos" description="No meu primeiro projeto, mergulhei no universo do desenvolvimento web, criando um site incrível do zero usando HTML e CSS. Explorei diversos caminhos, dando vida para minhas ideias com o objetivo de tornar o projeto mais atraente." image="natan" link="https://primeiro-projeto-alura-natan.vercel.app" github="https://github.com/NatanRib12" />
            </div>
          </div>
        </section>
        {/* SECTION ETEC: Natan */}
        <section id="etec">
          <Fade left>
            <div className='title-etec'>
              <h1>Etec Jaraguá</h1>
            </div>
          </Fade>
          <Fade right>
            <div className='txt-etec'>
              <p>
                A sigla ETEC significa Escola Técnica Estadual, e é um tipo de instituição de ensino pública localizada em SP. Nela há cursos técnicos e cursos técnicos integrado ao ensino médio.
                A ETEC é uma escola especializada em ensinar conhecimentos práticos e habilidades específicas em várias áreas como na informática. Os cursos duram alguns anos, e os estudantes aprendem na sala de aula, em laboratórios, estágios e visitas técnicas.
              </p>
            </div>
          </Fade>
          <Fade up>
            <div className="galleria-container">
              <Galleria value={images} style={{ maxWidth: '500px' }} showThumbnails={false} showIndicators item={itemTemplate} autoPlay />
            </div>
          </Fade>

        </section>
        {/* SECTION ABOUT: Daniel */}
        <section id="about">
          <div className="about-container">
            <div className='bbox'>
              <Box title="Sobre nós">
              </Box>
            </div>
          </div>
        </section>
        {/* SECTION HOME: Daniel */}
        <section id="vestibulinho">
          <div className='txt-vestibulinho'>
            <h1 className='title-bold'>VESTIBULINHO ETEC</h1>
          </div>
          <div className="vestibulinho-container">
            <div className="vestibulinho-image">
              <a target='blank' href="https://www.vestibulinhoetec.com.br/home/"><img className='img-vestibulinho' src={cartaz} /></a>
            </div>
            <div className="vestibulinho-rules">
              <ul className="rules-list">
                <li className='rule-item'><i className='pi pi-id-card'></i> Necessário RG para realizar a prova</li>
                <li className='rule-item'><i className="pi pi-arrow-right-arrow-left"></i> No momento da prova, não é permitido pedir algum emprestado a outro concorrente</li>
                <li className='rule-item'><i className="pi pi-volume-up"></i> Caso o celular do participante emita algum som durante a prova, será desclassificado</li>
                <li className='rule-item'><i className="pi pi-calculator"></i> Não é permitido o uso de calculadora</li>
                <li className='rule-item'><i className="pi pi-clock"></i> Caso o concorrente chegue atrasado, será desclassificado</li>
              </ul>
            </div>
          </div>
          <div className="steps-vestibulinho">
            <h1>Etapas</h1>
            <Steps className="p-highlight" model={items} />
          </div>
        </section>
      </div>
      {/* FOOTER: Daniel */}
      <Footer />
    </>
  );
}

export default App;