import React from 'react';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import bgImage1 from '../assets/images/high-angle-adult-searching-stock-images-laptop.jpg';
import bgImage2 from '../assets/images/group-young-people-are-looking-map-where-they-are-while-walking-autumn-forest.jpg';
import bgImage3 from '../assets/images/eating-popcorn-watching-tv.jpg';
import ArrowIco from '../assets/images/arrow (16).svg';


import '../css/index.css';

function News() {

    return (
        <div id='news' className='news-container-content'>
            <Container className='d-flex custom-hero-content'>
                <Row className='row-gap-5 d-flex'>
                    <Col xl={4} >
                        <Row className='row align-items-start gap-3 mt-0 mb-0 pt-0 pb-0'>
                            <Row>
                                <Col className='d-flex gap-3 align-content-center'>
                                    <div className='feature-ico-line'></div>
                                    <h3>JAUNIMI</h3>
                                </Col>                        
                            </Row>
                            <Row>
                                <Col md={12} xs={12}>
                                    <h2>Kompānijas un nozares jaunumi</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col className=''>
                                    <a className='foot-link' href="/">Skatīt visus jaunumus
                                    <img src={ArrowIco} 
                                        style={{ width: '30px', height: '18px', paddingLeft: '10px' }} alt='' /></a>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                    <Col className='container d-flex gap-4 row-custom'>
                        <Row className='cards-custom'>
                            <Col class="card-custom">
                                <Card.Img className='card-img'
                                    variant="top" 
                                    src={bgImage1} 
                                />
                                
                                <p class="card-text pt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                            </Col>
                            <Col class="card-custom">
                            <Card.Img className='card-img'
                                variant="top" 
                                src={bgImage2} />                                
                                
                                <p class="card-text pt-3">Lorem ipsum dolor sit ameter, consetetur sadipscing elitr,</p>
                            </Col>
                            <Col class="card-custom">
                            <Card.Img className='card-img'
                                variant="top" 
                                src={bgImage3} />                                
                                
                                <p class="card-text pt-3">Lorem ipsum dolor sit conset tur sadipscing elitr, sed diam nonumy</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='d-block'>
                    <hr style={{
                        border: '1px solid white',
                        width: '100%',
                        height: '2px',
                        margin: '70px 0'
                    }}/>
                </Row>
            </Container>
            <Container>
                <Footer />
            </Container>
        <div className='deco-foot-1'></div>
        </div>
    );
}

export default News;
