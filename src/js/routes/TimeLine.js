import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Title from '../components/Title';
import timelineImage3rd from '../../html/images/emoji4.jpeg';
import timelineImage4st from '../../html/images/timeline4.jpg';
import timelineImage5th from '../../html/images/timeline5.jpeg';

const timeLineStyle = {
    padding: '51px 0px',
    marginBottom: '100px'
}

const contentStyle = {
    paddingTop: '70px'
}

const post1stContent = {
    width: '68%',
    margin: '75px 203px'
}

const post2ndContent = {
    width: '68%',
    margin: '30px 260px'
}

const post3rdContent = {
    width: '68%',
    margin: '50px 304px'
}

const image1stStyle = {
    padding: '10px 120px'
}

const image2ndStyle = {
    padding: '10px 80px',
}

const image3rdStyle = {
    padding: '10px 130px'
}

const dummySentences = [
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    'Donec hendrerit tempor tellus.',
    'Donec pretium posuere tellus.',
    'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    'Nulla posuere.',
    'Donec vitae dolor.',
    'Nullam tristique diam non turpis.',
    'Cras placerat accumsan nulla.',
    'Nullam rutrum.',
    'Nam vestibulum accumsan nisl.',
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    'Donec hendrerit tempor tellus.',
    'Donec pretium posuere tellus.',
    'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    'Nulla posuere.',
    'Donec vitae dolor.',
    'Nullam tristique diam non turpis.',
    'Cras placerat accumsan nulla.',
    'Nullam rutrum.',
    'Nam vestibulum accumsan nisl.'
  ];


class Timeline extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: 'Timeline'
        };
    }

    render() {
        return (
            <div>
                <Title title={this.state.title}/>
            <div style={timeLineStyle}>
                <Row>
                    <div className='col-md-12 col-sm-12 col-xs-12'>
                        <Col xs={12} sm={12} md={6}>
                            <img src= {timelineImage3rd} style={image1stStyle}/>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <div style={post1stContent}>
                                <h3 className="post-title"><a href="#">ConBiz Cost Calculator</a></h3>
                                <div className="meta">
                                <span className="meta-part"><i className="icon-clock"></i> <a href="#">13 June 2015</a></span>
                                <span className="meta-part"><a href="#"><i className="icon-user"></i> By Admin</a></span>
                                <span className="meta-part"><a href="#"><i className="icon-speech"></i> 03</a></span>
                                <span className="meta-part"><a href="#"><i className="icon-heart"></i> 103</a></span>
                                <span className="meta-part"><a href="#"><i className="icon-tag"></i> Design</a></span>
                                </div>
                                <p>{dummySentences.slice(0, 20).join(' ')}</p>
                                <a href="#" className="btn btn-effect">Read More <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </Col>
                    </div>
                    <div style={contentStyle} className='col-md-12 col-sm-12 col-xs-12'>
                        <Col xs={12} sm={12} md={5}>
                            <img src= {timelineImage5th} style={image2ndStyle}/>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <div style={post2ndContent}>
                                <h3 className="post-title"><a href="#">ConBiz Cost Calculator</a></h3>
                                <div className="meta">
                                <span className="meta-part"><i className="icon-clock"></i> <a href="#">13 June 2015</a></span>
                                <span className="meta-part"><a href="#"><i className="icon-user"></i> By Admin</a></span>
                                <span className="meta-part"><a href="#"><i className="icon-speech"></i> 03</a></span>
                                <span className="meta-part"><a href="#"><i className="icon-heart"></i> 103</a></span>
                                <span className="meta-part"><a href="#"><i className="icon-tag"></i> Design</a></span>
                                </div>
                                <p>{dummySentences.slice(0, 20).join(' ')}</p>
                                <a href="#" className="btn btn-effect">Read More <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </Col>
                    </div>
                    <div style={contentStyle} className='col-md-12 col-sm-12 col-xs-12'>
                        <Col xs={12} sm={12} md={5}>
                            <img src= {timelineImage4st} style={image3rdStyle}/>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <div style={post3rdContent}>
                                <h3 className="post-title"><a href="#">ConBiz Cost Calculator</a></h3>
                                <div className="meta">
                                <span className="meta-part"><i className="icon-clock"></i> <a href="#">13 June 2015</a></span>
                                <span className="meta-part"><a href="#"><i className="icon-user"></i> By Admin</a></span>
                                <span className="meta-part"><a href="#"><i className="icon-speech"></i> 03</a></span>
                                <span className="meta-part"><a href="#"><i className="icon-heart"></i> 103</a></span>
                                <span className="meta-part"><a href="#"><i className="icon-tag"></i> Design</a></span>
                                </div>
                                <p>{dummySentences.slice(0, 20).join(' ')}</p>
                                <a href="#" className="btn btn-effect">Read More <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </Col>
                    </div>
                </Row>
            </div>
            </div>
        );
    }
}

export default Timeline;


