/**
 * Created by noir2k on 2018. 7. 23..
 */
'use strict';

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
const Client = require('./Client');
// end::vars[]

// tag::app[]
class AppDefault extends React.Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        client({method: 'GET', path: 'http://localhost:8080/api/users'}).then(response => {
            console.log(response.entity._embedded.users);
            this.setState({users: response.entity._embedded.users});
        });
    }

    render() {
        return (
            <UserList users={this.state.users}/>
        );
    }
}
// end::app[]

// tag::user-list[]
class UserList extends React.Component{
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
// end::user-list[]

// tag::user[]
class User extends React.Component{
    render() {
        return (
        <tr>
            <td>{this.props.user.name}</td>
        </tr>
        )
    }
}
// end::user[]

// tag::render[]
ReactDOM.render(
    <App />,
    document.getElementById('react')
);
// end::render[]
