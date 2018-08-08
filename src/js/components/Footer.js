import React from 'react';
import { Navbar, Col, Row} from 'react-bootstrap';
import colligence from '../../html/images/colligence.png';
import footerImage1st from '../../html/images/emoji1.jpeg';


const navStyle = {
    padding: '40px 0px'
}
const imageStyle = {
    width: '150px',
    opacity: '0.8'
}

const textColor = {
    color: 'white'
}

const linkStyle = {
    // width: '80px'
}

const copyRightStyle = {
    padding: '15px 0',
    background: '#666',
    textAlign: 'center',
    letterSpacing: '.5px'
}


class Footer extends React.Component {
    render() {
        return (
            <Navbar inverse style={navStyle}>
            <div>
                <div>
                    <Col md={3} sm={6} xs={12}>
                        <div>
                            <h4>
                                <img src={colligence} alt="Footer Logo" />
                            </h4>
                            <p style={textColor}>
                                There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some forem there are many varations
                            </p>
                        </div>
                    </Col>
                </div>
                <Col md={3}  sm={6} xs={12}>
                    <div>
                        <h4 style={textColor}>
                        Latest Work
                        </h4>
                        <li>
                            <a style={linkStyle} href="assets/img/work/img-1.jpg">
                                <img style ={imageStyle} alt="" src={footerImage1st}/>
                            </a>
                        </li>
                        <p style={textColor}>
                            There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some forem there are many varations
                        </p>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <div>
                        <h4 style={textColor}>
                        ConBiz Office
                        </h4>
                        <ul>
                            <li>
                            <a href="#" style={textColor}> 1600 Grant Ave, Dhaka NJ 07078</a>
                            </li>
                            <li>
                            <a href="#" style={textColor}> (123) 2014-040 43,(732)506-3420</a>
                            </li>
                            <li>
                            <a href="#" style={textColor}> info@graygrids.com</a>
                            </li>
                            <li>
                            <a href="#" style={textColor}> FAX:(123) 123-4567</a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <div>
                        <h4 style={textColor}>     
                            Business Hours
                        </h4>
                        <div>
                            <p style={textColor}>Our support available to help you 24 hours a day, seven days a week.</p>
                            <ul >
                                <li style={textColor}>Monday-Friday: <span>9am to 5pm</span></li>
                                <li style={textColor}>Saturday: <span>10am to 3pm</span></li>
                                <li style={textColor}>Sunday: <span>Closed</span></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <div style = {copyRightStyle}>
                    <div >
                        <Row>
                            <Col sm={12}>
                                <p style={textColor}>
                                    Copyright © 2018 Colligence - Designed &amp; Developed by
                                <a href="#" style={textColor}>
                                    ***
                                </a>
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            </Navbar>
        )
    };

}

export default Footer;