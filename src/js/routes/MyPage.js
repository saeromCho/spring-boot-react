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
                마이 페이지 입니다.
                <hr/>
                에디터 입니다.
                <ReactDraftEditor/>
            </div>
        );
    }
}

export default MyPage;


