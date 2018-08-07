import React from 'react';
import {Row, Col} from 'react-bootstrap';
// import timelineImage1st from '../../html/images/timeline3.jpg';
import timelineImage2nd from '../../html/images/timeline2.jpg';
import timelineImage3rd from '../../html/images/timeline3.jpg';
import timelineImage4st from '../../html/images/timeline4.jpg';

const timeLineStyle = {
    padding: '51px 0px',
    width: '1170px'
}
const colStyle = {
    float: 'right'
}
const postContent = {
    width: '100%',
    padding: '30px 20px'
}

const imageStyle = {
    padding: '10px 20px'
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
    'Nam vestibulum accumsan nisl.'
  ];


class Timeline extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="entry-title">Timeline</h2>
                                <div class="breadcrumb">
                                    <span>You are here:</span>
                                    <a href="#">Home</a>
                                    <span class="crumbs-spacer"><i class="fa fa-angle-double-right"></i></span>
                                    <span class="current">Timeline</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div style={timeLineStyle}>
                <Row className="show-grid">
                    <Col xs={12} md={9} alt style ={colStyle}>
                        <img src= {timelineImage3rd} style={imageStyle}/>
                    </Col>
                    <Col xs={12} md={9} alt style ={colStyle}>
                        <div style={postContent}>
                            <h3 class="post-title"><a href="#">ConBiz Cost Calculator</a></h3>
                            <div class="meta">
                            <span class="meta-part"><i class="icon-clock"></i> <a href="#">13 June 2015</a></span>
                            <span class="meta-part"><a href="#"><i class="icon-user"></i> By Admin</a></span>
                            <span class="meta-part"><a href="#"><i class="icon-speech"></i> 03</a></span>
                            <span class="meta-part"><a href="#"><i class="icon-heart"></i> 103</a></span>
                            <span class="meta-part"><a href="#"><i class="icon-tag"></i> Design</a></span>
                            </div>
                            <p>{dummySentences.slice(0, 20).join(' ')}</p>
                            <a href="#" class="btn btn-effect">Read More <i class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </Col>
                    <Col xs={12} md={9} alt style ={colStyle}>
                        <img src= {timelineImage2nd} style={imageStyle}/>
                    </Col>
                    <Col xs={12} md={9} alt style ={colStyle}>
                        <div style={postContent}>
                            <h3 class="post-title"><a href="#">ConBiz Cost Calculator</a></h3>
                            <div class="meta">
                            <span class="meta-part"><i class="icon-clock"></i> <a href="#">13 June 2015</a></span>
                            <span class="meta-part"><a href="#"><i class="icon-user"></i> By Admin</a></span>
                            <span class="meta-part"><a href="#"><i class="icon-speech"></i> 03</a></span>
                            <span class="meta-part"><a href="#"><i class="icon-heart"></i> 103</a></span>
                            <span class="meta-part"><a href="#"><i class="icon-tag"></i> Design</a></span>
                            </div>
                            <p>{dummySentences.slice(0, 20).join(' ')}</p>
                            <a href="#" class="btn btn-effect">Read More <i class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </Col>
                    <Col xs={12} md={9} alt style ={colStyle}>
                        <img src= {timelineImage4st} style={imageStyle}/>
                    </Col>
                    <Col xs={12} md={9} alt style ={colStyle}>
                        <div style={postContent}>
                            <h3 class="post-title"><a href="#">ConBiz Cost Calculator</a></h3>
                            <div class="meta">
                            <span class="meta-part"><i class="icon-clock"></i> <a href="#">13 June 2015</a></span>
                            <span class="meta-part"><a href="#"><i class="icon-user"></i> By Admin</a></span>
                            <span class="meta-part"><a href="#"><i class="icon-speech"></i> 03</a></span>
                            <span class="meta-part"><a href="#"><i class="icon-heart"></i> 103</a></span>
                            <span class="meta-part"><a href="#"><i class="icon-tag"></i> Design</a></span>
                            </div>
                            <p>{dummySentences.slice(0, 20).join(' ')}</p>
                            <a href="#" class="btn btn-effect">Read More <i class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </Col>
                    
                </Row>
            </div>
            </div>
        );
    }
}

export default Timeline;


