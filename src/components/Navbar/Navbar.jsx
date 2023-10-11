import { useState, useEffect } from 'react'
import './Navbar.css';
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.svg';
import { Button } from 'primereact/button'
import { BiLogoTiktok, BiLogoInstagram } from 'react-icons/bi';
import { HiBars3BottomRight } from 'react-icons/hi2';
function Navbar() {
    const [mobile, setMobile] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        console.log(window.innerWidth <= 1150);
        if (window.innerWidth <= 1150) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };
    useEffect(() => {
        handleResize();
    }, []);
    useEffect(() => {
        window.removeEventListener('resize', handleResize);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <nav className={mobile && isMobile ? 'navbar shadow-4' : 'navbar'}>
            <div className='nav-content'>
                <div className="nav-logo">
                    <img className='logo' src={logo} alt="DS LOGO" />
                </div>
                <div className={mobile && isMobile ? 'navbar-items-container-mobile shadow-4' : 'nav-items-container'} style={{ transitionDuration: "0.2s", transitionTimingFunction: "ease-in-out" }}>
                    <Scrollspy items={['home', 'about', 'etec', 'events']} currentClassName="active" className={mobile && isMobile ? 'navbar-items-mobile' : 'nav-items'}>
                        <li className='nav-item'>
                            <Link to="home" offset={-64} spy={true} smooth={true} duration={500}>INÍCIO</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="about" offset={50} spy={true} smooth={true} duration={500}>Sobre Nós</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="etec" offset={-64} spy={true} smooth={true} duration={500}>Etec Jaraguá</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="events" offset={-64} spy={true} smooth={true} duration={500}>Eventos</Link>
                        </li>
                    </Scrollspy>
                    {mobile && isMobile ?
                        <div className="button-mobile">
                            <ul className='social-icons-mobile'>
                                <li className='social-icon'>
                                    <a href='https://www.tiktok.com/@mds.etec' target='blank'><BiLogoTiktok size={25} color='64b5f6' /></a>
                                </li>
                                <li className='social-icon'>
                                    <a href='https://www.instagram.com/ds.etecjaragua' target='blank'><BiLogoInstagram size={25} color='64b5f6' /></a>
                                </li>
                            </ul>
                            <a href='https://www.etecjaragua.com' target='blank'><Button className="navbar-external-button-mobile" label="&nbsp; Etec Jaraguá" icon="pi pi-external-link" style={{ whiteSpace: "nowrap" }} /></a>
                        </div>
                        : null}
                </div>
                <div className="nav-button">
                    <ul className='social-icons'>
                        <li className='social-icon'>
                            <a href='https://www.tiktok.com/@mds.etec' target='blank'><BiLogoTiktok size={25} color='64b5f6' /></a>
                        </li>
                        <li className='social-icon'>
                            <a href='https://www.instagram.com/ds.etecjaragua' target='blank'><BiLogoInstagram size={25} color='64b5f6' /></a>
                        </li>
                    </ul>

                    <a href='https://www.etecjaragua.com' target='blank'><Button className="navbar-external-button" label="&nbsp; Etec Jaraguá" icon="pi pi-external-link" style={{ whiteSpace: "nowrap" }} /></a>
                    <button className='button-toggle' onClick={() => {
                        setMobile(!mobile)
                    }}><HiBars3BottomRight color="64b5f6" size={35} /></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
