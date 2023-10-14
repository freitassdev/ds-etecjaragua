/*

FREITAS SUPREMACY

*/
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Box from './components/Box/Box';
import { Steps } from 'primereact/steps';
import './App.css';
import { Accordion, AccordionTab } from 'primereact/accordion';
import VantagesCard from './components/Card/Card';
import campus from './assets/campus_party.png';
import hacktoon from './assets/hacktoon.png';
import tecsesp from './assets/tecsesp.jpg';
import obi from './assets/obi.jpg';
import cartaz from './assets/cartaz.png';
import { Galleria } from 'primereact/galleria';
import Fade from 'react-reveal/Fade';
import { Card } from 'primereact/card';

function App() {
  const [images, setImages] = useState(null);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    setAtivo(true);
    setImages([
      {
        itemImageSrc: 'https://media.discordapp.net/attachments/1122234389867286640/1160315031838265475/3152072_orig.png',
        thumbnailImageSrc: 'https://media.discordapp.net/attachments/1122234389867286640/1160315031838265475/3152072_orig.png',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6s.jpg',
        alt: 'Description for Image 6',
        title: 'Title 6'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7s.jpg',
        alt: 'Description for Image 7',
        title: 'Title 7'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8s.jpg',
        alt: 'Description for Image 8',
        title: 'Title 8'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9s.jpg',
        alt: 'Description for Image 9',
        title: 'Title 9'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10s.jpg',
        alt: 'Description for Image 10',
        title: 'Title 10'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11s.jpg',
        alt: 'Description for Image 11',
        title: 'Title 11'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12s.jpg',
        alt: 'Description for Image 12',
        title: 'Title 12'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria13.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria13s.jpg',
        alt: 'Description for Image 13',
        title: 'Title 13'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria14s.jpg',
        alt: 'Description for Image 14',
        title: 'Title 14'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria15.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria15s.jpg',
        alt: 'Description for Image 15',
        title: 'Title 15'
      }
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

  const header1 = () => {
    return <img className='img-projeto' src="https://media.discordapp.net/attachments/1122234389867286640/1162852497971495072/image.png"/>
  }
  const header2 = () => {
    return <img className='img-projeto' src="https://media.discordapp.net/attachments/1122234389867286640/1162876573964325016/image.png"/>
  }
  const header3 = () => {
    return <img className='img-projeto' src="https://media.discordapp.net/attachments/1122234389867286640/1162849713826037884/image.png" />
  }
  return (
    <>
      <div className={`entrada content content-blur scroll-container ${ativo ? "ativo" : ""}`}>
        <Navbar />
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
        <section id="curse">
          <div className="curse-container curse-box">
            <div className="curse-title">
              <h1 className="title-bold">
                Desenvolvimento de Sistemas
              </h1>
            </div>
            <Accordion activeIndex={0}>
              <AccordionTab header="Design Digital">
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </AccordionTab>
              <AccordionTab header="Programação Web">
                <p className="m-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
              </AccordionTab>
              <AccordionTab header="Banco de Dadoos">
                <p className="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
              </AccordionTab>
              <AccordionTab header="Aplicativos Mobile">
                <p className="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
              </AccordionTab>
              <AccordionTab header="Análise e Projeto de Sistemas">
                <p className="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
              </AccordionTab>
              <AccordionTab header="Programação de Aplicativos Mobile">
                <p className="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
              </AccordionTab>
              <AccordionTab header="Sistemas Embarcados">
                <p className="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
              </AccordionTab>
              <AccordionTab header="Protocólos e Segurança">
                <p className="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
              </AccordionTab>
              <AccordionTab header="Fundamentos da Informática">
                <p className="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
              </AccordionTab>
              <AccordionTab header="Desenvolvimento de Sistemas">
                <p className="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
              </AccordionTab>
              <AccordionTab header="Fundamentos da Informática">
                <p className="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
              </AccordionTab>
            </Accordion>
            <Fade up>
              <div className="cards-container">
                <VantagesCard number="one" title="Alta Demanda" description="Profissionais são altamente procurados em várias indústrias, garantindo estabilidade e oportunidades de emprego."></VantagesCard>
                <VantagesCard number="two" title="Diversidade" description="Possui diversas àreas, como web, aplicativos móveis, segurança cibernética e inteligência artificial, oferecendo escolhas alinhadas aos interesses."></VantagesCard>
                <VantagesCard number="three" title="Salário Alto" description="Desenvolvimento de Sistemas é uma das àreas com os melhores pagamentos e benefícios, valorizando habilidades e experiência."></VantagesCard>
                <VantagesCard number="four" title="Flexibilidade" description="Muitas posições permitem home office, proporcionando um equilíbrio saudável entre vida profissional e pessoal."></VantagesCard>
              </div>
            </Fade>
            <div className='title-projetos'>Confira nossos projetos</div>

            <div className='projects-cards'>
              <Card title="Discord Bot" subTitle="Michel de Freitas" header={header1} className="md:w-25rem">
                <p className="m-0" >
                  
                </p>
              </Card>
              <Card title="Calculadora de Tempo" subTitle="Daniel da Silva" header={header2} className="md:w-25rem">
                <p className="m-0" >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                  numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
              </Card>
              <Card title="Portfolio" subTitle="Natan Santos" header={header3} className="md:w-25rem">
                <p className='link-projeto' >
                No meu primeiro projeto, mergulhei no universo do desenvolvimento web, criando um site incrível do zero usando HTML e CSS. Explorei diversos caminhos, dando vida para minhas ideias com o objetivo de tornar o projeto mais atraente.
                </p>
                <br />
                <p className='link-projeto-natan'>
                <a href="https://primeiro-projeto-alura-natan.vercel.app"> Conferir projeto</a>
                </p>
              </Card>
            </div>

          </div>
        </section>

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
        <section id="about">
          <div className="about-container">
            <div className='bbox'>
              <Box title="Sobre nós">
              </Box>
            </div>
          </div>
        </section>
        <section id="events">
          <div className='txt-events'>
            <h1 className='title-bold'>EVENTOS QUE PARTICIPAMOS</h1>
          </div>
          <div className=''>
            <div className='img-events'>
              <a href="https://brasil.campus-party.org" target='blank'><img src={campus} alt="" /></a>
              <a href="http://www.robotica.cpscetec.com.br" target='blank'><img src={hacktoon} /></a>
              <a href="https://www.cps.sp.gov.br/tag/tecsesp" target='blank'><img src={tecsesp} /></a>
              <a href="https://olimpiada.ic.unicamp.br" target='blank'><img src={obi} /></a>
            </div>
          </div>
        </section>
        <section id="vestibulinho">
          <div className='txt-vestibulinho'>
            <h1 className='title-bold'>VESTIBULINHO ETEC</h1>
          </div>
          <div className='container-vestibulinho'>
            <a target='blank' href="https://www.vestibulinhoetec.com.br/home/"><img className='img-vestibulinho' src={cartaz} /></a>
          </div>
          <div className="steps-vestibulinho">
            <h1>Etapas</h1>
            <Steps className="p-highlight" model={items} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;