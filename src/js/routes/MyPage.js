import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import ReactDraftEditor from '../components/ReactDraftEditor';
import Title from '../components/Title';

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
                에디터 입니다.
                <ReactDraftEditor/>
            </div>
        );
    }
}

export default MyPage;


