import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import bgImage1 from '../assets/images/beautiful-green-landscape-with-plantations-trees-cloudy-sky.jpg';
import bgImage2 from '../assets/images/vansu-bridge-daugava-river-during-sunset-riga-latvia.jpg';
import bgImage3 from '../assets/images/riga-20-july-2020-amazing-aerial-view-statue-liberty-milda-riga-latvia-during-sunset-statue-liberty-holding-three-golden-stars.jpeg';


import { useState } from 'react';
import '../css/index.css';

function Properties() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
    };

    const handleNavLinkClick = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    const slideCount = `${activeIndex + 1}/${3}`;

    return (
        <div className='bg-color-light-grey custom-pb-100'>
            <Container id='properties' className='custom-container-caurusel'>
                <div className="deco-6"></div>
                <Carousel className='caurusel-bg-overly' activeIndex={activeIndex} onSelect={handleSelect}>
                    <Carousel.Item className='caurusel-container-radius'>
                        <Image src={bgImage1} className='custom-carousel custom-caurusel-img caurusel-container-radius'
                        />
                        <Carousel.Caption className='z-1'>
                            <Row style={{color: 'var(--unnamed-color-ffffff)'}} >
                                <Col xl={7} md={10} sm={12} className='row caurusel-content-gap'>
                                    <Col className='d-flex justify-content-start align-items-center gap-3'>
                                        <div className='feature-ico-line'></div>
                                        <h3>ĪPAŠĪBAS</h3>
                                    </Col>

                                    <h2 className=''>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
                                    <Col md={12}>
                                        <p className='p-heroe'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo du</p>
                                    </Col>
                                    <div className='mt-2'>
                                        <Button onClick={() => handleNavLinkClick('#form')} className='rounded-pill px-5 pt-3 pb-3 apply-btn text-nowrap btn-text-custom'>Sazinies ar mums</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='caurusel-container-radius'>
                        <Image src={bgImage2} className='custom-carousel custom-caurusel-img caurusel-container-radius'
                        />
                        <Carousel.Caption className='z-1'>
                            <Row style={{color: 'var(--unnamed-color-ffffff)'}} >
                                <Col xl={7} md={10} sm={12} className='row caurusel-content-gap'>
                                    <Col className='d-flex justify-content-start align-items-center gap-3'>
                                        <div className='feature-ico-line'></div>
                                        <h3>ĪPAŠĪBAS</h3>
                                    </Col>

                                    <h2 className=''>Lorem ipsum dolor sit amet, co setetur sadipscing</h2>
                                    <Col md={12}>
                                        <p className='p-heroe'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo du</p>
                                    </Col>
                                    <div className='mt-2'>
                                        <Button onClick={() => handleNavLinkClick('#form')} className='rounded-pill px-5 pt-3 pb-3 apply-btn text-nowrap btn-text-custom'>Sazinies ar mums</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='caurusel-container-radius'>
                        <Image src={bgImage3} className='custom-carousel custom-caurusel-img caurusel-container-radius'
                        />
                        <Carousel.Caption className='z-1'>
                            <Row style={{color: 'var(--unnamed-color-ffffff)'}} >
                                <Col xl={7} md={10} sm={12} className='row caurusel-content-gap'>
                                    <Col className='d-flex justify-content-start align-items-center gap-3'>
                                        <div className='feature-ico-line'></div>
                                        <h3>ĪPAŠĪBAS</h3>
                                    </Col>

                                    <h2 className=''>Lorem ipsum dol or sit amet, consetetu</h2>
                                    <Col md={12}>
                                        <p className='p-heroe'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo du</p>
                                    </Col>
                                    <div className='mt-2'>
                                        <Button onClick={() => handleNavLinkClick('#form')} className='rounded-pill px-5 pt-3 pb-3 apply-btn text-nowrap btn-text-custom'>Sazinies ar mums</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>                
                <div className="slide-count">{slideCount}</div>
            </Container>
        </div>
        
    );
}

export default Properties;