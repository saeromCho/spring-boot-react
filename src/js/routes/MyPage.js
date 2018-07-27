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
                <Grid relaxed columns={4}>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                </Grid>
                <hr/>
                에디터 입니다.
                <ReactDraftEditor/>
            </div>
        );
    }
}

export default MyPage;


