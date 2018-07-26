import React from 'react';


class User extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
        <tr>
            <td>{this.props.user.name}</td>
        </tr>
        )
    }
}

export default User;