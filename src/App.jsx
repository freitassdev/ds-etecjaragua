import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Box from './components/Box/Box';
import { Steps } from 'primereact/steps';
import './App.css';
import shape1 from './assets/shape1.svg';
import Card from './components/Card/Card';
import campus from './assets/campus_party.png';
import hacktoon from './assets/hacktoon.png';
import tecsesp from './assets/tecsesp.jpg';
import obi from './assets/obi.jpg';

function App() {
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    setAtivo(true);
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
  return (
    <>
      <div className={`entrada content content-blur scroll-container ${ativo ? "ativo" : ""}`}>
        <Navbar />
        <section id="home">
          <div className='background'>
            <div className='home-container'>
              <h1 className='home-title'>Se descubra no mundo da programação!</h1>
              <p className='home-description'>Sua porta de entrada para o emocionante mundo do desenvolvimento de sistemas. Nosso objetivo não é apenas apresentar um pouco sobre o nosso curso, nós cultivamos mentes criativas, inspiramos inovação e capacitamos futuros desenvolvedores a transformarem suas paixões em soluções digitais. Explore o mundo da tecnologia com a nossa comunidade de programadores. Juntos, na Etec Jaraguá.</p>
            </div>
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

        <section id="about">
          <div className="about-container">
            <div className='bbox'>
              <Box title="Sobre Nós">
              </Box>

            </div>

          </div>
        </section>

        <section id="events">
          <div className='title-etec'>
            <h1>Etec</h1>
          </div>
          <div className='txt-etec'>
            <p>A sigla ETEC significa Escola Técnica Estadual, e é um tipo de instituição de ensino pública localizada no estado de São Paulo, no Brasil. Com cursos técnicos e cursos técnicos integrado ao ensino médio, ou seja, você faz o ensino médio junto com o curso técnico. A ETEC é uma escola especializada em ensinar conhecimentos práticos e habilidades específicas em áreas como informática, administração, mecânica, eletrônica, entre outras. Os cursos geralmente duram alguns anos, e os estudantes aprendem tanto na sala de aula quanto na prática, em laboratórios e estágios.
            </p>
          </div>
          <div className='images-container'>
            <div className='image-item '>
              <div className='image'>
                <img src="https://media.discordapp.net/attachments/1122234389867286640/1160315031838265475/3152072_orig.png" />
              </div>
              <div className='image-text'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis, deserunt quae nihil deleniti magni commodi quia eius quibusdam amet odit aliquid culpa vitae veritatis? Laboriosam delectus culpa obcaecati eveniet.
                </p>
              </div>
            </div>
            <div className='image-item reverse'>
              <div className='image'>
                <img src="https://media.discordapp.net/attachments/1122234389867286640/1160315031838265475/3152072_orig.png" />
              </div>
              <div className='image-text'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis, deserunt quae nihil deleniti magni commodi quia eius quibusdam amet odit aliquid culpa vitae veritatis? Laboriosam delectus culpa obcaecati eveniet.
                </p>
              </div>
            </div>
            <div className='image-item '>
              <div className='image'>
                <img src="https://media.discordapp.net/attachments/1122234389867286640/1160315031838265475/3152072_orig.png" />
              </div>
              <div className='image-text'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis, deserunt quae nihil deleniti magni commodi quia eius quibusdam amet odit aliquid culpa vitae veritatis? Laboriosam delectus culpa obcaecati eveniet.
                </p>
              </div>
            </div>
            <div className='image-item reverse'>
              <div className='image'>
                <img src="https://media.discordapp.net/attachments/1122234389867286640/1160315031838265475/3152072_orig.png" />
              </div>
              <div className='image-text'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis, deserunt quae nihil deleniti magni commodi quia eius quibusdam amet odit aliquid culpa vitae veritatis? Laboriosam delectus culpa obcaecati eveniet.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="etec">
          <div className='txt-events'>
            <h1>eventos que participamos</h1>
          </div>
          <div className='img-events'>
            <a href="https://brasil.campus-party.org"><img src={campus} alt="" /></a>
            <a href="http://www.robotica.cpscetec.com.br"><img src={hacktoon}/></a>
            <a href="https://www.cps.sp.gov.br/tag/tecsesp"><img src={tecsesp} /></a> 
            <a href="https://olimpiada.ic.unicamp.br"><img src={obi}/></a> 
          </div>
          <p>
            
          </p>
        </section>
        <section id="vestibulinho">
          <h1>Vestibulinho Etec</h1>

          <Steps className="p-highlight" model={items} />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;