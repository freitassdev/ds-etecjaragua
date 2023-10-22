import { useState } from 'react'
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-scroll';
import { BiLogoTiktok, BiLogoInstagram } from 'react-icons/bi';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-content">
            <div className="footer-grids">
                <div className="footer one">
                    <h3>Mais sobre o site</h3>
                    <p>Este site foi criado com o intuito de divulgar e promover nosso curso (Desenvolvimento de Sistemas) da Etec Jaraguá. Somos a quarta turma a ingressar após a criação do curso em nossa Etec.</p>
                    <div className="clear"></div>
                </div>
                <div className="footer two">
                    <h3>Mantenha-se conectado</h3>
                    <ul>
                        <li><a className="footer-icon" href="https://www.instagram.com/ds.etecjaragua/" target='blank'><i className='pi pi-instagram'></i></a>Instagram</li>
                        <li><a className="footer-icon" href="https://www.tiktok.com/@mds.etec" target='blank'><BiLogoTiktok size={20}></BiLogoTiktok></a>TikTok</li>
                        <li><a className="footer-icon" href="https://www.etecjaragua.com" target='blank'><i className='pi pi-external-link'></i></a>Site Etec Jaraguá</li>
                    </ul>
                </div>
                <div className="footer three">
                    <h3>Informações de Contato</h3>
                    <ul>

                        <li><a href="https://maps.app.goo.gl/BoB1Hxvh3XPXt2hY7" target='blank'><span><i className='pi pi-map-marker'></i> R. Jairo de Almeida Machado, 401 - </span>Jaraguá, São Paulo - SP, 02998-060</a></li>

                        <li><a href="tel:+55113941-7242"><i className='pi pi-phone'></i> (11) 3941-7242</a></li>
                        <li><a href="tel:+55113941-8319"><i className='pi pi-phone'></i> (11) 3941-8319</a></li>
                        <li><a href="mailto:e228acad@cps.sp.gov.br"><i className='pi pi-envelope'></i> e228acad@cps.sp.gov.br</a> </li>
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
            <div className="copy-right-grids">
                <div className="copy-left">
                    <p className="footer-gd">© 2023 Todos os Direitos Reservados | Feito por <a>Michel,</a> <a>Natan</a> e <a>Daniel</a> - 1º MDS</p>
                </div>
                <div className="copy-right">
                    <Scrollspy items={['home', 'curse', 'about']} currentClassName="active">
                        <li><Link to="home" offset={-64} spy={true} smooth={true} duration={500}>Início</Link></li>
                        <li><Link to="curse" offset={-64} spy={true} smooth={true} duration={500}>Nosso Curso</Link></li>
                        <li><Link to="about" offset={-64} spy={true} smooth={true} duration={500}>Sobre Nós</Link></li>
                    </Scrollspy>
                </div>
                <div className="clear"></div>
            </div>
        </div>

    )
}

export default Footer
