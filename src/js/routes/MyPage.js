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
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9">
                                <h2 class="big-title">Contact Form</h2>
                                <form action="" id="contact-form" class="contact-form" role="form" method="post">
                                <div class="row">
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" name="name" placeholder="Your Name" />
                                    </div>
                                    <div class="col-md-4">
                                        <input type="email" class="form-control" name="EMAIL" placeholder="Your Email" />
                                    </div>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" name="phone" placeholder="Phone" />
                                    </div>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="subject" placeholder="Subject" />
                                    </div>
                                    <div class="col-md-12">
                                        <textarea class="form-control" placeholder="Your Massage" rows="9"></textarea>
                                    </div>
                                    <div class="col-md-6">
                                        <Button style={buttonStyle} bsStyle="primary" type="submit" id="submit" class="btn btn-effect"><i class="fa fa-check"></i> Send Message</Button>
                                        <div id="success"></div>
                                    </div>
                                </div>
                                </form>
                            </div>
                            <div class="col-md-3">
                                <h2 class="big-title">Headquarters</h2>
                                <div class="information">
                                    <div class="contact-datails">
                                        <p><i class="icon-pointer"></i> 12 Tottenham Road, London, England.</p>
                                        <p><i class="icon-call-out"></i> +880 123 456 789 </p>
                                        <p><i class="icon-envelope"></i> info@wingtheme.com </p>
                                        <p><i class="icon-clock"></i> Sun-Sat (9am-5pm)</p>
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


