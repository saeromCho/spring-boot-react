import React from 'react';
import { NavLink } from 'react-router-dom';
import {Grid, Image, Menu, Input, Segment, Responsive, Button} from 'semantic-ui-react';
import SideNavBar from './SideNavBar';
import headerImage from '../../images/hiveimage.png';

const menuStyle = {
    marginLeft: '550px'
}

const navStyle = {
    paddingLeft: '250px'
}

const headerStyle = {
    backgroundImage: `url( ${headerImage} )`
}

const searchIconStyle = {
    right: '-26px',
    left: 'auto',
    position: 'fixed'
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
                <Segment inverted>
                    <Grid centered columns={5}>
                        <Grid.Row centered columns = 'equal'>
                            <Grid.Column>
                                <Button inverted as = {NavLink} exact className="item" active={this.state.activeItem === 'Main'} to="/" content='MAIN'>
                                    {/* <Menu.Item as = {NavLink} exact className="item" active={this.state.activeItem === 'Main'} to="/" content='MAIN'/> */}
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button inverted as = {NavLink} exact className="item" active={this.state.activeItem === 'Information'} to="/information" content='INFORMATION' >
                                    {/* <Menu.Item as = {NavLink} exact className="item" active={this.state.activeItem === 'Information'} to="/information" content='INFORMATION' /> */}
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button inverted as = {NavLink} exact className="item" active={this.state.activeItem === 'TimeLine'} to="/timeline" content='TIMELINE'>
                                    {/* <Menu.Item as = {NavLink} exact className="item" active={this.state.activeItem === 'TimeLine'} to="/timeline" content='TIMELINE' /> */}
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button inverted as = {NavLink} exact className="item" active={this.state.activeItem === 'MyPage'} to="/mypage" content='MY PAGE' >
                                    {/* <Menu.Item as = {NavLink} exact className="item" active={this.state.activeItem === 'MyPage'} to="/mypage" content='MY PAGE' /> */}
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Menu.Menu>
                                    <Menu.Item>
                                        <Input icon='search' placeholder='Search...' icon={{ name: 'search', link: true }} value={this.state.inputValue}/>
                                    </Menu.Item>
                                </Menu.Menu>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid> 
                </Segment>
             
            </div>
        )
    }
}
export default Header;





