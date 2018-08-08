import React from 'react';
import { Carousel, ButtonToolbar, Button } from 'react-bootstrap';
import image1st from '../../html/images/stock.jpeg';
import image2nd from '../../html/images/image2.jpg';
import image3rd from '../../html/images/chart.jpeg';
import kakaoLogin from '../../html/images/kakao_login.png';

const caruoselStyle = {
    top: '151px',
    // width: '1200px',
    // height: '750px',
    margin: 'auto',
    // width: 'atuo',
    height: 'auto',
}

const itemStyle = {
    width: 'auto',
    height: 'auto'
}

const kakaoStyle = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '177px'
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
                <Carousel style={caruoselStyle}>
                    <Carousel.Item>
                        <img style={itemStyle} width={1200} height={500} src={image1st} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={itemStyle} width={1200} height={500} src={image2nd} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={itemStyle} width={700} height={500} src={image3rd} />
                    </Carousel.Item>
                </Carousel>
                <ButtonToolbar style={kakaoStyle}>
                    <Button bsStyle="link"><img src={kakaoLogin} /></Button>
                </ButtonToolbar>
                <div class="service section" style = {serviceSectionStyle}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-4 col-xl-12">
                                <div class="service-box">
                                    <div class="service-head">
                                        <a class="icon">
                                            <i class="flaticon-building33"></i>
                                        </a>
                                        <h2>Design &amp; Build Package</h2>
                                        <p class="desc">Vestibulum auctor dapibus neque.</p>
                                    </div>
                                    <div class="service-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a href="#" class="btn btn-effect">Read More <i class="icon-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xl-12">
                                <div class="service-box">
                                    <div class="service-head">
                                        <a class="icon">
                                            <i class="flaticon-construction16"></i>
                                        </a>
                                        <h2>Building Renovation</h2>
                                        <p class="desc">Vestibulum auctor dapibus neque.</p>
                                    </div>
                                    <div class="service-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a href="#" class="btn btn-effect">Read More <i class="icon-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xl-12">
                                <div class="service-box">
                                    <div class="service-head">
                                        <a class="icon">
                                        <i class="flaticon-construction14"></i>
                                        </a>
                                        <h2>Project Management</h2>
                                        <p class="desc">Vestibulum auctor dapibus neque.</p>
                                    </div>
                                    <div class="service-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a href="#" class="btn btn-effect">Read More <i class="icon-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default MainPage;


