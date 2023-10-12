import { useState } from 'react'
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-scroll';
import { BiLogoTiktok, BiLogoInstagram } from 'react-icons/bi';
import './Footer.css';

function Footer() {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#1e2836" fillOpacity="1" d="M0,288L60,282.7C120,277,240,267,360,266.7C480,267,600,277,720,282.7C840,288,960,288,1080,272C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <div className='footer'>
                <div className="footer-button">
                    <ul className='social-icons'>
                        <li className='social-icon'>
                            <a href='https://www.tiktok.com/@mds.etec' target='blank'><BiLogoTiktok size={32} color='fff' /></a>
                        </li>
                        <li className='social-icon'>
                            <a href='https://www.instagram.com/ds.etecjaragua/' target='blank'><BiLogoInstagram size={32} color='fff' /></a>
                        </li>
                    </ul>
                </div>
                <Scrollspy items={['home', 'about', 'events', 'etec']} currentClassName="active" className='footer-items'>
                    <li className='footer-item'>
                        <Link to="home" offset={-64} spy={true} smooth={true} duration={500}>Início</Link>
                    </li>
                    <li className='footer-item'>
                        <Link to="about" offset={-64} spy={true} smooth={true} duration={500}>Sobre Nós</Link>
                    </li>
                    <li className='footer-item'>
                        <Link to="etec" offset={-64} spy={true} smooth={true} duration={500}>Etec Jaraguá</Link>
                    </li>
                    <li className='footer-item'>
                        <Link to="events" offset={-64} spy={true} smooth={true} duration={500}>Eventos</Link>
                    </li>
                </Scrollspy>
                <div className='footer-infos'>
                    <div className="footer-info">
                        <a className="footer-info" href="https://maps.app.goo.gl/BoB1Hxvh3XPXt2hY7" target='blank'>
                            <i className='pi pi-map-marker'></i>
                            <p>R. Jairo de Almeida Machado, 401 - Jaraguá, São Paulo - SP, 02998-060</p>
                        </a>
                    </div>
                    <div className="footer-phones">
                        <div className="footer-info">
                            <a className="footer-info" href="tel:+551139417242" target='blank'>
                                <i className='pi pi-phone'></i>
                                <p>(11) 3941-7242</p>
                            </a>
                        </div>
                        <div className="footer-info">
                            <a className="footer-info" href="tel:+551139418319" target='blank'>
                                <i className='pi pi-phone'></i>
                                <p>(11) 3941-8319</p>
                            </a>
                        </div>
                    </div>
                    <div className="footer-info">
                    <a className="footer-info" href="mailto:e228acad@cps.sp.gov.br" target='blank'>
                        <i className='pi pi-envelope'></i>
                        <p>e228acad@cps.sp.gov.br</p>
                    </a>
                </div>
                </div>
                
                <div className='footer-copyright'>
                    <p>&copy; 2023 | Desenvolvido por Natan, Daniel e Michel - 1ºMDS</p>
                </div>
            </div>
        </div>

    )
}

export default Footer
