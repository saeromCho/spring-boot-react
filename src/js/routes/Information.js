import React from 'react';
import {Grid} from 'semantic-ui-react';

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
                정보 페이지 입니다.
                <hr />
                <Grid padded>
                    {colors.map(color => (
                    <Grid.Row color={color} key={color}>
                        <Grid.Column>{_.capitalize(color)}</Grid.Column>
                    </Grid.Row>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default Information;


