import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon, Menu, Sidebar } from 'semantic-ui-react';

const navButtonStyle = {
    marginTop: '7px'
}

class SideNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false,
        activeItem: '',
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleSidebarHide = this.handleSidebarHide.bind(this);
}

  handleButtonClick() {
    console.log(this.state.visible);
    this.setState({ visible: !this.state.visible })
  }

  handleSidebarHide() {
    this.setState({ visible: false })
  }

  render() {
    return (
      <div>
        <Button style={navButtonStyle} onClick={this.handleButtonClick}><Icon disabled name='content' /></Button>
        <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={this.state.visible}
        >
            <Menu.Item as = {NavLink} exact to="/" >
                <Icon name='home' />
                메인
            </Menu.Item>
            <Menu.Item as = {NavLink} to="/information" >
                <Icon name='info circle' />
                정보페이지
            </Menu.Item>
            <Menu.Item as = {NavLink} to="/timeline" >
                <Icon name='area chart' />
                타임라인
            </Menu.Item>
            <Menu.Item as = {NavLink} to="/mypage" >
                <Icon name='user' />
                마이페이지
            </Menu.Item>
        </Sidebar>
      </div>
    )
  }
}

export default SideNavBar;