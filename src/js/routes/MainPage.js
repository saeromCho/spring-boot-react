import React from 'react';
import {Grid, Segment} from 'semantic-ui-react';

class MainPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                메인 페이지 입니다.
                <hr/>
                <Grid columns={3} divided>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Segment>Segment_1</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Segment_2</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Segment_3</Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>Segment_1</Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>Segment_1</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Segment_2</Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default MainPage;


