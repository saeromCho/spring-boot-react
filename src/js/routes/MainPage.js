import React from 'react';
import { Carousel, ButtonToolbar, Button } from 'react-bootstrap';
import image1st from '../../html/images/stock.jpeg';
import image2nd from '../../html/images/image2.jpg';
import image3rd from '../../html/images/chart.jpeg';
import kakaoLogin from '../../html/images/kakao_login.png';

const caruoselStyle = {
    top: '51px',
    // width: '1200px',
    // height: '750px',
    margin: 'auto',
    width: 'atuo',
    height: 'auto'
}

const itemStyle = {
    width: 'auto',
    height: 'auto'
}

const kakaoStyle = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '65px'
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
                        <img style={itemStyle} width={1200} height={700} src={image1st} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={itemStyle} src={image2nd} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1200} height={700} src={image3rd} />
                    </Carousel.Item>
                </Carousel>
                <ButtonToolbar style={kakaoStyle}>
                    <Button bsStyle="link"><img src={kakaoLogin} /></Button>
                </ButtonToolbar>
            </div>
        );
    }
}

export default MainPage;


