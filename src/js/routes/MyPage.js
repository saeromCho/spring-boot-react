import React from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import Title from '../components/Title';

const buttonStyle = {
    marginTop: '20px'
}

const contentStyle = {
    marginBottom: '100px'
}

class MyPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: 'MyPage'
        };
    }

    render() {
        return (
            <div>
                <Title title={this.state.title}/>
                <section id="content" style={contentStyle}>
                    <Grid bsClass="container">
                        <Row>
                            <Col md={9}>
                                <h2 className="big-title">Contact Form</h2>
                                <form action="" id="contact-form" className="contact-form" role="form" method="post">
                                    <Row>
                                        <Col md={4}>
                                            <input type="text" className="form-control" name="name" placeholder="Your Name" />
                                        </Col>
                                        <Col md={4}>
                                            <input type="email" className="form-control" name="EMAIL" placeholder="Your Email" />
                                        </Col>
                                        <Col md={4}>
                                            <input type="text" className="form-control" name="phone" placeholder="Phone" />
                                        </Col>
                                        <Col md={12}>
                                            <input type="text" className="form-control" name="subject" placeholder="Subject" />
                                        </Col>
                                        <Col md={12}>
                                            <textarea className="form-control" placeholder="Your Massage" rows="9"></textarea>
                                        </Col>
                                        <Col md={6}>
                                            <Button style={buttonStyle} bsStyle="primary" type="submit" id="submit" className="btn btn-effect"><i className="fa fa-check"></i> Send Message</Button>
                                            <div id="success"></div>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                            <div className="col-md-3">
                                <h2 className="big-title">Headquarters</h2>
                                <div className="information">
                                    <div className="contact-datails">
                                        <p><i className="icon-pointer"></i> 12 Tottenham Road, London, England.</p>
                                        <p><i className="icon-call-out"></i> +880 123 456 789 </p>
                                        <p><i className="icon-envelope"></i> info@colligence.com </p>
                                        <p><i className="icon-clock"></i> Sun-Sat (9am-5pm)</p>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default MyPage;


