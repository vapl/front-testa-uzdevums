import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoGrandem from '../assets/images/logo-grandem-white.svg';


import '../css/index.css';

function News() {

    return (
        <div id='footer'>
            <Container className=''>
                <Row className='d-flex justify-content-end custom-hero-content'>
                    <Col md={3} className='foot-link-visible'>
                        <h5>Par mums</h5>
                        <div>
                            <a className='foot-link' href='#/'><p>Lorem ipsum</p></a>
                            <a className='foot-link' href='#/'><p>Lorem ipsum dolor</p></a>
                            <a className='foot-link' href='#/'><p>Lorem ipsum</p></a>
                            <a className='foot-link' href='#/'><p>Lorem ipsum dolor</p></a>
                        </div>
                    </Col>
                    <Col md={3} className='foot-link-visible'>
                        <h5>Uzzini vairāk</h5>
                        <div>
                            <a className='foot-link' href='#/'><p>Lorem ipsum</p></a>
                            <a className='foot-link' href='#/'><p>Lorem ipsum dolor</p></a>
                            <a className='foot-link' href='#/'><p>Lorem ipsum</p></a>
                            <a className='foot-link' href='#/'><p>Lorem ipsum dolor</p></a>
                        </div>
                    </Col>
                    <Col className='d-flex flex-column align-items-center gap-2 w-100'>
                        <img src={logoGrandem} alt="" className='foot-logo-lg'/>
                        <p>© 2024 Grandem Group</p>
                        <div className='d-flex justify-content-center align-items-center gap-2'>
                            <div><p style={{color: '#ffffffc7', fontSize: '16px'}}>Web developed by:</p></div>
                            <div><img src={logoGrandem} alt="" className='foot-logo-sm' /></div>                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default News;
