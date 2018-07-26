import React from 'react';

class UserList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            users: [], 
        };
    }

    componentDidMount() {
        client({method: 'GET', path: 'http://localhost:8080/api/users'}).then(response => {
            console.log(response.entity._embedded.users);
            this.setState({users: response.entity._embedded.users});
        });
    }    
    
    render() {
        var users = this.props.users.map(user =>
            <User key={user._links.self.href} user={user}/>
        );
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                    </tr>
                    {users}
                </tbody>
            </table>
        )
    }
}

export default UserList;