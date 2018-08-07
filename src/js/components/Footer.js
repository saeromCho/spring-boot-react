import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button, ButtonGroup, ButtonToolbar, Glyphicon} from 'react-bootstrap';
import SideNavBar from './SideNavBar';
import colligence from '../../html/images/colligence.png';
import footerImage1st from '../../html/images/emoji1.jpeg';
import footerImage2nd from '../../html/images/emoji2.jpeg';
import footerImage3rd from '../../html/images/emoji3.jpeg';
import footerImage4th from '../../html/images/emoji4.jpeg';

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


class Footer extends React.Component {
    render() {
        return (
            <Navbar inverse style={navStyle}>
            <div class="container">
                <div class="row footer-widgets">
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="footer-widget contact-widget">
                            <h4>
                                <img src={colligence} class="img-responsive" alt="Footer Logo" />
                            </h4>
                            <p style={textColor}>
                                There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some forem there are many varations
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="footer-widget flickr-widget">
                        <h4 style={textColor}>
                        Latest Work
                        </h4>
                        <li class="flickr-list">
                            <a style={linkStyle} href="assets/img/work/img-1.jpg" class="lightbox">
                                <img style ={imageStyle} alt="" src={footerImage1st}/>
                            </a>
                        </li>
                        <p style={textColor}>
                            There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some forem there are many varations
                        </p>
                            {/* <li>
                                <a href="assets/img/work/img-2.jpg" class="lightbox">
                                <img alt="" style ={imageStyle} src={footerImage1st} />
                                </a>
                            </li>
                            <li>
                                <a href="assets/img/work/img-3.jpg" class="lightbox">
                                <img alt="" style ={imageStyle} src={footerImage1st} />
                                </a>
                            </li>
                            <li>
                                <a href="assets/img/work/img-4.jpg" class="lightbox">
                                <img alt="" style ={imageStyle} src={footerImage1st} />
                                </a>
                            </li>
                            <li>
                                <a href="assets/img/work/img-5.jpg" class="lightbox">
                                <img alt="" style ={imageStyle} src={footerImage1st} />
                                </a>
                            </li>
                            <li>
                                <a href="assets/img/work/img-6.jpg" class="lightbox">
                                <img alt="" style ={imageStyle} src={footerImage1st} />
                                </a>
                            </li> */}
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="footer-widget">
                        <h4 style={textColor}>
                        ConBiz Office
                        </h4>
                        <ul class="address">
                            <li>
                            <a href="#" style={textColor}><i class="fa fa-map-marker"></i> 1600 Grant Ave, Dhaka NJ 07078</a>
                            </li>
                            <li>
                            <a href="#" style={textColor}><i class="fa fa-phone"></i> (123) 2014-040 43,(732)506-3420</a>
                            </li>
                            <li>
                            <a href="#" style={textColor}><i class="fa fa-envelope"></i> info@graygrids.com</a>
                            </li>
                            <li>
                            <a href="#" style={textColor}><i class="fa fa-fax"></i> FAX:(123) 123-4567</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="footer-widget hours-widget">
                        <h4 style={textColor}>     
                            Business Hours
                        </h4>
                        <div class="contact-info">
                            <p style={textColor}>Our support available to help you 24 hours a day, seven days a week.</p>
                            <ul class="hours">
                                <li style={textColor}>Monday-Friday: <span>9am to 5pm</span></li>
                                <li style={textColor}>Saturday: <span>10am to 3pm</span></li>
                                <li style={textColor}>Sunday: <span>Closed</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </Navbar>
        )
    };

}

export default Footer;