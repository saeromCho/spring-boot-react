/**
 * Created by noir2k on 2018. 7. 23..
 */
'use strict';

// tag::vars[]
// const React = require('react');
// const ReactDOM = require('react-dom');
// const client = require('./client');

import React from 'react';
import ReactDOM from 'react-dom';
import client from'./client';
import { Menu } from 'semantic-ui-react';
// 메인 인포 타임라인 마이페이지
// end::vars[]

// tag::app[]
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [], 
            activeItem: ''
        };

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentWillMount() {
        document.addEventListener("handleItemClick", this.handleItemClick.bind(this));
    }

    componentDidMount() {
        client({method: 'GET', path: 'http://localhost:8080/api/users'}).then(response => {
            console.log(response.entity._embedded.users);
            this.setState({users: response.entity._embedded.users});
        });
    }

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    handleItemClick(event) {
        this.setState({activeItem: event.target.name});
    }

    // confirmRequestPWChange(event){
    //     this.setState({confirmRequestPW: event.target.value});
    //     this.checkSamePassword(event.target.value);
    // }


    render() {
        const {activeItem} = this.state.activeItem;
        return (
            <div>
                <UserList users={this.state.users}/>
                <Menu>
                    <Menu.Item
                        name='main'
                        active={activeItem === 'main'}
                        content='Main_메인페이지'
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Information'
                        active={activeItem === 'Information'}
                        content='Infomation_정보'
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='TimeLine'
                        active={activeItem === 'TimeLine'}
                        content='TimeLine_타임라인'
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='MyPage'
                        active={activeItem === 'MyPage'}
                        content='MyPage_마이페이지'
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </div>
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
