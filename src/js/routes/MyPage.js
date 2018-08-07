import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import ReactDraftEditor from '../components/ReactDraftEditor';

class MyPage extends React.Component {
    
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
                                <h2 class="entry-title">MyPage</h2>
                                <div class="breadcrumb">
                                    <span>You are here:</span>
                                    <a href="#">Home</a>
                                    <span class="crumbs-spacer"><i class="fa fa-angle-double-right"></i></span>
                                    <span class="current">MyPage</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                마이 페이지 입니다.
                <hr/>
                에디터 입니다.
                <ReactDraftEditor/>
            </div>
        );
    }
}

export default MyPage;


