import React from 'react';
import {Grid} from 'semantic-ui-react';
import _ from 'lodash';
import Quill from '../components/Quill';

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

class Information extends React.Component {
    
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
                                <h2 class="entry-title">Information</h2>
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
                정보 페이지 입니다.
                <hr />
                <Quill placeholder={'Write something...'}/>, 
            </div>
        );
    }
}

export default Information;


