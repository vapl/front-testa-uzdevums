import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ReactComponent as LogoSm} from '../assets/images/logo-grandem.svg';
import {ReactComponent as LogoMd} from '../assets/images/logo-grandem-2.svg';
import {ReactComponent as ContactIcon} from '../assets/images/chat-audio-svgrepo-com.svg';
import {ReactComponent as NavToggle} from '../assets/images/menu_5259008.svg';
import {ReactComponent as NavToggleClose} from '../assets/images/Group 529.svg';
import { useEffect, useState } from 'react';
import '../css/index.css';
import Overly from './Overly';

function NavBarTop() {
  const [isSmallScreen, setIsSmallScree] = useState(window.innerWidth < 992);
  const [expanded, setExpanded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleNavLinkClick = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Start - Toggle function to switch between white and black text color
  const colorBlack = 'var(--unnamed-color-000000)';
  const colorWhite = 'var(--unnamed-color-ffffff)';
  document.documentElement.style.setProperty('--navbar-color-var', 
  (isSmallScreen && expanded) || scrollY > 10 ? colorBlack : colorWhite);
  // End - Toggle function to switch between white and black text color

  // Start - Handle screen width size
  useEffect(() => {
    const handleScreenSize = () => {
      setIsSmallScree(window.innerWidth < 992);
    };
    window.addEventListener('resize', handleScreenSize);
  }, []);
  // End - Handle screen width size
  
  // Start - Handle scroll event
  window.addEventListener('scroll', () => {
    setScrollY(window.scrollY);
  });
  // End - Handle scroll event
  
  return (
    <>
      { (expanded && isSmallScreen) && <Overly /> }
      <Navbar 
        collapseOnSelect expand="lg" 
        className={`bg-${(expanded && scrollY > 10) || (isSmallScreen && expanded) || scrollY > 10 ? 'white shadow-sm' : 'transparent'} ${scrollY > 10 ? 'pt-2' : 'pt-5'}`} 
        onToggle={() => setExpanded(
          isSmallScreen ? !expanded : expanded === false)} sticky="top"
      >
        <Container>
          <Navbar.Brand href="#root" className=''>
            {(isSmallScreen || scrollY < 10) 
              ? <LogoMd className={`logo-color-var ${scrollY > 10 ? 'ps-0 pt-2 pb-2 be-5 me-0' : ''}`} />
              : <LogoSm className='logo-color-var' />
            }
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={`d-flex nowrap border-0 pe-0 ${isSmallScreen && !expanded && scrollY > 10 ? 'toggle-deco' : ''}`}>
            {(!expanded && isSmallScreen && scrollY > 10) && (
                <div className='nav-contact-link pe-5'>
                  <Nav.Link href="#contacts" onClick={() => handleNavLinkClick('#form')} className={`d-flex align-items-center gap-3`}>
                    Kontakti
                      <ContactIcon className='logo-color-var'/>
                  </Nav.Link>
                </div>
            )}
            
            {isSmallScreen && (
              !expanded
              ? <NavToggle className='logo-color-var' /> 
              : <NavToggleClose className='logo-color-var' />
              )}
            
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className={`ms-auto mx-4 flex-nowrap ${(expanded && isSmallScreen) ? 'ps-4 mt-5 mb-5 fw-bolder' : ''}`}>
              <Nav className="gap-3 navbar-links-color d-flex flex-nowrap text-nowrap">
                <Nav.Link href="#home" onClick={() => handleNavLinkClick('#root')}>Sākums</Nav.Link>
                <Nav.Link href="#faq" onClick={() => handleNavLinkClick('#faq')}>BUJ</Nav.Link>
                <Nav.Link href="#properties" onClick={() => handleNavLinkClick('#properties')}>Īpašības</Nav.Link>
                <Nav.Link href="#how-to-apply" onClick={() => handleNavLinkClick('#how-to-apply')}>Kā pieteikties?</Nav.Link>
                <Nav.Link href="#news" onClick={() => handleNavLinkClick('#news')}>Jaunumi</Nav.Link>
                <div className={`d-flex ${(expanded) ? '' : 'rounded-pill px-5 navbar-border-color'}`}>
                  <Nav.Link href="#form" onClick={() => handleNavLinkClick('#form')} className={`d-flex align-items-center gap-3 show`}>
                    Kontakti
                      {!isSmallScreen && <ContactIcon className='logo-color-var'/>}
                  </Nav.Link>
                </div>
              </Nav>
            </div>
          </Navbar.Collapse>
                
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarTop;