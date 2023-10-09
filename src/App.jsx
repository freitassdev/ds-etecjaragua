import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Box from './components/Box/Box';
import { Steps } from 'primereact/steps';
import './App.css';
import shape1 from './assets/shape1.svg';
import Card from './components/Card/Card';

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
          <h1>etec</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quibusdam vel animi ratione neque, fugit culpa voluptatum laboriosam pariatur veniam hic nemo modi eum placeat amet quasi ut minus eligendi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam autem in, sequi eos quo perferendis illum nulla saepe mollitia. Consequatur quia illo maiores eligendi impedit sequi culpa, saepe voluptatem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laboriosam quo corporis est, atque sequi mollitia minima iste at nisi aliquam, laudantium, cum dignissimos iure enim a recusandae officiis repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quibusdam vel animi ratione neque, fugit culpa voluptatum laboriosam pariatur veniam hic nemo modi eum placeat amet quasi ut minus eligendi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam autem in, sequi eos quo perferendis illum nulla saepe mollitia. Consequatur quia illo maiores eligendi impedit sequi culpa, saepe voluptatem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laboriosam quo corporis est, atque sequi mollitia minima iste at nisi aliquam, laudantium, cum dignissimos iure enim a recusandae officiis repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quibusdam vel animi ratione neque, fugit culpa voluptatum laboriosam pariatur veniam hic nemo modi eum placeat amet quasi ut minus eligendi.</p>
        </section>
        <section id="etec">
          <h1>events</h1>
         
        </section>
        <section id="vestibulinho">
          <h1>Vestibulinho Etec</h1>
          
          <Steps className="p-highlight" model={items} />
        </section>
      </div >
      <Footer />
    </>
  );
}

export default App;