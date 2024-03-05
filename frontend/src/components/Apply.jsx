import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {ReactComponent as EmailIco} from '../assets/images/email-svgrepo-com.svg';
import {ReactComponent as LocationIco} from '../assets/images/location-svgrepo-com.svg';
import {ReactComponent as PhoneIco} from '../assets/images/phone.svg';
import {ReactComponent as Nr1IcoLg} from '../assets/images/Group 3738.svg';
import {ReactComponent as Nr2IcoLg} from '../assets/images/Group 3740.svg';
import {ReactComponent as Nr3IcoLg} from '../assets/images/Group 3739.svg';
import {ReactComponent as Nr1IcoSm} from '../assets/images/Group 3701.svg';
import {ReactComponent as Nr2IcoSm} from '../assets/images/Group 3702.svg';
import {ReactComponent as Nr3IcoSm} from '../assets/images/Group 3703.svg';
import uploadIcon from '../assets/images/upload-minimalistic-svgrepo-com.svg';

import '../css/index.css';
import { useEffect, useRef, useState } from 'react';
import News from './News';

function Apply() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        return e.target.files[0];
    }

    useEffect(() => {
        const handleScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 490)
        };

        window.addEventListener('resize', handleScreenSize);
    }, []);


    const handleNavLinkClick = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
    return (
        <div id='how-to-apply' className='apply-parent-bg'>
            <div className="apply-children-bg-top">
                <div className='apply-children-content d-flex justify-content-center align-items-center'>
                    <Container style={{color: '#ffffff'}} className='d-flex flex-column align-items-center gap-5 px-2 pb-4 z-3'>
                        <Row className='d-flex justify-content-center text-center'>
                            <Col xl={8} md={10} sm={12}>
                                <h2>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                                </h2>
                            </Col>
                        </Row>                
                        <Row className='justify-content-md-center d-flex align-items-center col-md-10'>
                            <Col>
                                <Row xs={1} xl={2} className='row-gap-4 align-items-center'>
                                    <Col className='text-center'>
                                        {isSmallScreen ? <Nr1IcoSm /> : <Nr1IcoLg className='svg-size' />}
                                    </Col>
                                    <Col>
                                        <p className='custom-text-align p2-text'>Lorem ipsum dolor sit amet, consetetu</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row xs={1} xl={2} className='row-gap-4 align-items-center'>
                                    <Col className='text-center'>
                                        {isSmallScreen ? <Nr2IcoSm /> : <Nr2IcoLg className='svg-size' />}
                                    </Col>
                                    <Col>
                                        <p className='custom-text-align p2-text'>Lorem ipsum dolor sit amet, consetetu</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row xs={1} xl={2} className='row-gap-4 align-items-center'>
                                    <Col className='text-center'>
                                        {isSmallScreen ? <Nr3IcoSm /> : <Nr3IcoLg className='svg-size' />}
                                    </Col>
                                    <Col>
                                        <p className='custom-text-align p2-text'>Lorem ipsum dolor sit amet, consetetu</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={() => handleNavLinkClick('#form')} className='rounded-pill px-5 pt-3 pb-3 apply-btn text-nowrap btn-text-custom'>Aizpildi pieteikuma formu</Button>
                            </Col>
                        </Row>
                    </Container>
                </div> 
            </div>
            <Container id='form' className='apply-children-mid'>
                <div className='parent-deco pt-5 pb-5'>
                    <div className='deco-3'></div>
                    <Row className='pt-5 pb-5 row-gap-5'>
                        <Col md={6} className='custom-p-10'>
                            <Row>
                                <Col md={{ span: 9, offset: 2 }}>
                                    <div>
                                        <h2 className='fw-semibold mb-5'>Sazinies ar mums jau šodien!</h2>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                                    </div>
                                    <div className='custom-h-divider mt-5 mb-5'></div>
                                    <div>
                                        <h5 className='mb-4 fw-semibold'>SIA GRANDEM GROUP</h5>
                                        <div className='d-flex flex-column gap-2'>
                                            <div className='d-flex gap-3 align-items-center justify-content-start'>
                                                <span clssName='pt-1 pb-1'><EmailIco /></span>
                                                <p>epasts@gmail.com</p>
                                            </div>
                                            <div className='d-flex gap-3 align-items-center justify-content-start'>
                                                <span><LocationIco /></span> 
                                                <p>Rīga, Latvija LV3401</p>
                                            </div>
                                            <div className='d-flex gap-3 align-items-center justify-content-start'>
                                                <span><PhoneIco /></span> 
                                                <p>+371 20000000</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>                            
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={{ span: 9, offset: 1 }}>
                                <Form>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3 d-flex flex-column gap-2" controlId="formHorizontalEmail">
                                            <Form.Select aria-label="Default select example">
                                                <option>Ziņas tēma</option>
                                                <option value="1">Pirmā tēma</option>
                                                <option value="2">Otrā tēma</option>
                                                <option value="3">Trešā tēma</option>
                                            </Form.Select>
                                            <Col>
                                                <Form.Control placeholder="Vārds" type='text' />
                                            </Col>
                                            <Col>
                                                <Form.Control placeholder="Tālruņa numurs" type='text' />
                                            </Col>
                                            <Col>
                                                <Form.Control placeholder="Epasts" type='email' />
                                            </Col>
                                            <Row className='row-gap-2'>
                                                <Col lg={true} className='upload-pe'>
                                                    <Form.Control placeholder="Adrese" type='text' />
                                                </Col>
                                                <Col lg={5}>
                                                    <input type="file" ref={fileInputRef} style={{display: 'none'}} onChange={handleFileChange} />
                                                    <Button onClick={handleClick} className='upload-button d-flex align-items-center' type='file'>
                                                        <img src={uploadIcon} alt="upload-icon" />
                                                        <span>Fails</span> 
                                                    </Button>
                                                </Col>
                                            </Row>                                            
                                            <Form.Control as="textarea" aria-label="With textarea" placeholder="Kā varam palīdzēt" rows={4}/>
                                            <Row className='gap-3 mt-3'>
                                                <Col lg={true}>
                                                    <div className='d-flex align-items-center'>
                                                        <Form.Check
                                                            inline
                                                            label=""
                                                            name="private-policy"
                                                            type={'checkbox'}
                                                            id={{}}
                                                        />
                                                        <Row style={{fontSize: '14px'}}>
                                                            <Col className='d-flex text-nowrap pe-0'>
                                                                <span>Iepazinos un Piekrītu</span>
                                                            </Col>
                                                            <Col className='d-flex text-nowrap'>
                                                                <a href="#private-policy"><span>Privātuma Politikai</span></a>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <Button href="#contacts" className='rounded-pill px-3 apply-btn text-nowrap d-block'>Sūtīt ziņu</Button>
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Row>
                                </Form>
                                </Col>
                            </Row>                            
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="apply-children-bg-bot">
                <div className="news-container">
                    <News />
                </div>
            </div>
        </div>
        
    );
}

export default Apply;