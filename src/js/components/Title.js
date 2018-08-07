import React from 'react';

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
            <div class="page-header" style={titleStyle}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="entry-title">{this.props.title}</h2>
                            <div class="breadcrumb">
                                <span>You are here:</span>
                                <a href="#">Home</a>
                                <span class="crumbs-spacer"><i class="fa fa-angle-double-right"></i></span>
                                <span class="current">Information</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
export default Title;