import React from 'react';
import { Carousel, ButtonToolbar, Button } from 'react-bootstrap';
import image1st from '../../html/images/stock.jpeg';
import image2nd from '../../html/images/image2.jpg';
import image3rd from '../../html/images/chart.jpeg';
import kakaoLogin from '../../html/images/kakao_login.png';

const caruoselStyle = {
    margin: 'auto',
    height: 'auto',
    width: 'fit-content'
}

const carouselContainer = {
    backgroundColor: 'black',
    width: '100%',
    paddingTop: '265px'
}

const kakaoStyle = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '30px'
}

const serviceSectionStyle = {
    paddingTop: '47px'
}
class MainPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <div className='container' style={carouselContainer}>
                <Carousel style={caruoselStyle}>
                    <Carousel.Item>
                        <img width={900} height={500} alt='900x500' src={image1st} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt='900x500' src={image2nd} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt='900x500' src={image3rd} />
                    </Carousel.Item>
                </Carousel>
                </div>
                <ButtonToolbar style={kakaoStyle}>
                    <Button bsStyle="link"><img src={kakaoLogin} /></Button>
                </ButtonToolbar>
                <div className="service section" style = {serviceSectionStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xl-12">
                                <div className="service-box">
                                    <div className="service-head">
                                        <a className="icon">
                                            <i className="flaticon-building33"></i>
                                        </a>
                                        <h2>Design &amp; Build Package</h2>
                                        <p className="desc">Vestibulum auctor dapibus neque.</p>
                                    </div>
                                    <div className="service-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a href="#" className="btn btn-effect">Read More <i className="icon-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xl-12">
                                <div className="service-box">
                                    <div className="service-head">
                                        <a className="icon">
                                            <i className="flaticon-construction16"></i>
                                        </a>
                                        <h2>Building Renovation</h2>
                                        <p className="desc">Vestibulum auctor dapibus neque.</p>
                                    </div>
                                    <div className="service-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a href="#" className="btn btn-effect">Read More <i className="icon-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xl-12">
                                <div className="service-box">
                                    <div className="service-head">
                                        <a className="icon">
                                        <i className="flaticon-construction14"></i>
                                        </a>
                                        <h2>Project Management</h2>
                                        <p className="desc">Vestibulum auctor dapibus neque.</p>
                                    </div>
                                    <div className="service-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a href="#" className="btn btn-effect">Read More <i className="icon-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
z                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;


