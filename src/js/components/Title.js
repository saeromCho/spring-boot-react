import React from 'react';
import { Glyphicon, Grid, Col, Row} from 'react-bootstrap';

const titleStyle = {
    paddingTop: '140px',
    paddingBottom: '50px'
}

class Title extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    render() {
        return (
            <div className="page-header" style={titleStyle}>
                <Grid bsClass="container">
                    <Row>
                        <Col md={12}>
                            <h2 className="entry-title">{this.props.title}</h2>
                            <div className="breadcrumb">
                                <span>You are here:</span>
                                <a href="#">Home</a>
                                <span className="crumbs-spacer"><Glyphicon glyph='chevron-right'/></span>
                                <span className="current">{this.props.title}</span>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>

        )
    }

}
export default Title;