import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { timingSafeEqual } from 'crypto';

const navButtonStyle = {
    marginTop: '7px'
}

class SideNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false
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
            <Menu.Item as='a'>
            <Icon name='home' />
            메뉴1
            </Menu.Item>
            <Menu.Item as='a'>
            <Icon name='user' />
            메뉴2
            </Menu.Item>
            <Menu.Item as='a'>
            <Icon name='gift' />
            메뉴3
            </Menu.Item>
            <Menu.Item as='a'>
            <Icon name='area chart' />
            메뉴4
            </Menu.Item>
            <Menu.Item as='a'>
            <Icon name='info circle' />
            메뉴5
            </Menu.Item>
        </Sidebar>
      </div>
    )
  }
}

export default SideNavBar;