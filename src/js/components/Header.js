import React from 'react';
import { NavLink } from 'react-router-dom';
import {Image, Menu, Input, Button, Icon, Segment, Sidebar} from 'semantic-ui-react';
import SideNavBar from './SideNavBar';

const menuStyle = {
    marginLeft: '470px'
}

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: '',
        };
        // this.handleItemClick = this.handleItemClick.bind(this);
        // this.onItemChange = this.onItemChange.bind(this);
    }

    //     componentWillMount() {
//         document.addEventListener("handleItemClick", this.handleItemClick.bind(this));
//         document.addEventListener("onItemChange", this.onItemChange.bind(this));
//     }

//     // onItemChange = (e, { name }) => this.props.onItemClick(name);
//     onItemChange(e, {name}) {
//          this.props.onItemClick(name);
//     }

//     handleItemClick(event, {name}) {
//         this.setState({
//             activeItem: name
//         });
//         console.log(this.state.activeItem);
//       
//     }


    render() {
        return (
            <div>
                <Menu attached = 'top' tabular>
                    <Menu.Item style={menuStyle} as = {NavLink} exact className="item" active={this.state.activeItem === 'Main'} to="/" content='Main_메인페이지' />
                    <Menu.Item as = {NavLink} exact className="item" active={this.state.activeItem === 'Information'} to="/information" content='Information_정보페이지' />
                    <Menu.Item as = {NavLink} exact className="item" active={this.state.activeItem === 'TimeLine'} to="/timeline" content='TimeLine_타임라인' />
                    <Menu.Item as = {NavLink} exact className="item" active={this.state.activeItem === 'MyPage'} to="/mypage" content='MyPage_마이페이지' />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' icon={{ name: 'search', link: true }} value={this.state.inputValue}/>
                        </Menu.Item>
                    </Menu.Menu>
                    <SideNavBar />
                </Menu>
            </div>
        )
    }
}
export default Header;





