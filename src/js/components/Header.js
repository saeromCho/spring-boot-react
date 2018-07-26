import React from 'react';
import { NavLink } from 'react-router-dom';
import {Grid, Image, Menu, Input, Segment, Responsive} from 'semantic-ui-react';
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
                    <Grid.Row stretched>
                        <Grid columns='equal'>
                            <Grid.Column>
                            <Menu.Item as = {NavLink} exact className="item" active={this.state.activeItem === 'Main'} to="/" content='메인' />
                            </Grid.Column>
                        
                            <Grid.Column>
                            <Menu.Item as = {NavLink} exact className="item" active={this.state.activeItem === 'Information'} to="information" content='정보페이지' />
                            </Grid.Column>>

                            <Grid.Column>
                            <Menu.Item as = {NavLink} exact className="item" active={this.state.activeItem === 'TimeLine'} to="/timeline" content='타임라인' />
                            </Grid.Column>>

                            <Grid.Column>
                            <Menu.Item as = {NavLink} exact className="item" active={this.state.activeItem === 'MyPage'} to="/mypage" content='마이페이지' />
                            </Grid.Column>
                        
                            {/* <Menu.Item as = {NavLink} exact className="item" active={this.state.activeItem === 'Information'} to="/information" content='Information_정보페이지' />
                            <Menu.Item as = {NavLink} exact className="item" active={this.state.activeItem === 'TimeLine'} to="/timeline" content='TimeLine_타임라인' />
                            <Menu.Item as = {NavLink} exact className="item" active={this.state.activeItem === 'MyPage'} to="/mypage" content='MyPage_마이페이지' /> */}
                            <Grid.Column>
                                <Menu.Menu>
                                    <Menu.Item>
                                        <Input icon='search' placeholder='Search...' icon={{ name: 'search', link: true }} value={this.state.inputValue}/>
                                    </Menu.Item>
                                </Menu.Menu>
                            </Grid.Column>
                            <Grid.Column>
                                <SideNavBar/>
                            </Grid.Column>
                        </Grid>
                    </Grid.Row>
                </Menu>
                
                <Segment>
                    <Image style={headerStyle}/>
                </Segment>
            </div>
        )
    }
}
export default Header;





