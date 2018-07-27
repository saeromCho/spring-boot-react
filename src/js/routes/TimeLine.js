import React from 'react';
import {Grid, Image, Segment} from 'semantic-ui-react';

class TimeLine extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <hr />
                타임라인 페이지 입니다.
                <hr />
                <Grid columns={4}>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Segment>1</Segment>
                            <Segment>2</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>1</Segment>
                            <Segment>2</Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>1</Segment>
                            <Segment>2</Segment>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Segment>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>1</Segment>
                            <Segment>2</Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default TimeLine;


