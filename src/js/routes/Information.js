import React from 'react';
import Quill from '../components/Quill';
import Title from '../components/Title';
import informationImage1st from '../../html/images/information.jpeg';

const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
]

const editorStyle = {
    height: '220px'
}


class Information extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: 'Information'
        };
    }

    render() {
        return (
            <div>
                <Title title={this.state.title}/>
                <section className="about section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="col-md-12">
                                    <h2 className="big-title">About Us</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero voluptatum quaerat blanditiis, aliquid, doloremque consequuntur quia rem cumque ea accusamus modi alias placeat, odit numquam quibusdam! Molestiae, nisi, laborum.
                                    </p>
                                    <p>
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Sed ut perspiciatis unde omnis iste natus error sit volup accusantium. Lorem ipsum dolor sit amet, consectetur.
                                    </p>
                                    <div className="group-btn">
                                        <a href="#" className="btn btn-effect">Read More</a>
                                        <a href="#" className="btn btn-wite">Projects</a>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <h2 className="big-title">Information Section</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero voluptatum quaerat blanditiis, aliquid, doloremque consequuntur quia rem cumque ea accusamus modi alias placeat, odit numquam quibusdam! Molestiae, nisi, laborum.
                                    </p>
                                    <p>
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Sed ut perspiciatis unde omnis iste natus error sit volup accusantium. Lorem ipsum dolor sit amet, consectetur.
                                    </p>
                                    <div className="group-btn">
                                        <a href="#" className="btn btn-effect">Read More</a>
                                        <a href="#" className="btn btn-wite">Projects</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="featured-thumb">
                                    <img src={informationImage1st} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Quill placeholder={'Write something...'}/>
            </div>
        );
    }
}

export default Information;


