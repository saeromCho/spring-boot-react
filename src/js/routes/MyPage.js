import React from 'react';
import {Button} from 'react-bootstrap';
import Title from '../components/Title';

const buttonStyle = {
    marginTop: '20px'
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
                <hr/>
                <section id="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h2 className="big-title">Contact Form</h2>
                                <form action="" id="contact-form" className="contact-form" role="form" method="post">
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" name="name" placeholder="Your Name" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="email" className="form-control" name="EMAIL" placeholder="Your Email" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" name="phone" placeholder="Phone" />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name="subject" placeholder="Subject" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="form-control" placeholder="Your Massage" rows="9"></textarea>
                                    </div>
                                    <div className="col-md-6">
                                        <Button style={buttonStyle} bsStyle="primary" type="submit" id="submit" className="btn btn-effect"><i className="fa fa-check"></i> Send Message</Button>
                                        <div id="success"></div>
                                    </div>
                                </div>
                                </form>
                            </div>
                            <div className="col-md-3">
                                <h2 className="big-title">Headquarters</h2>
                                <div className="information">
                                    <div className="contact-datails">
                                        <p><i className="icon-pointer"></i> 12 Tottenham Road, London, England.</p>
                                        <p><i className="icon-call-out"></i> +880 123 456 789 </p>
                                        <p><i className="icon-envelope"></i> info@wingtheme.com </p>
                                        <p><i className="icon-clock"></i> Sun-Sat (9am-5pm)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default MyPage;


