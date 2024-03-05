import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../css/index.css';

function Heroe() {

    const handleNavLinkClick = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    
    return (
    <div className='custom-heroe-container'>
        <Container className='d-flex align-items-center justify-content-start custom-hero-content'>
            <div className="house-image">
                <div className="deco-lines"></div>
                <div className="deco-1"></div>
                <div className="deco-2"></div>
                <div className="deco-4"></div>
                <div className="deco-5"></div>
            </div>
            <Row className='custom-hero-bg'>
                <Col xl={8} md={10} xs={12} className='row gap-3 z-3 heroe-content-container'>
                        <h1>Lorem ipsum dolor sit amet, consetetur <span className='custom-w-color'>sadipscing</span></h1>
                        <Col md={7} className='pb-3'>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takim.</p>
                        </Col>
                        <div>
                            <Button href="#contacts" onClick={() => handleNavLinkClick('#faq')} className='rounded-pill px-5 pt-2 pb-2 border-2' variant="outline-light">Uzzini vairāk</Button>
                        </div>
                </Col>
            </Row>
        </Container>
    </div >

    );
}

export default Heroe;