import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button, ButtonGroup, ButtonToolbar, Glyphicon} from 'react-bootstrap';
import SideNavBar from './SideNavBar';

const menuStyle = {
    marginLeft: '550px'
}

const navStyle = {
    paddingLeft: '250px'
}

const searchIconStyle = {
    right: '-26px',
    left: 'auto',
    position: 'fixed'
}

const headerStyle = {
    display: 'WebkitFlex',
    display: 'flex',
    maxWidth: 1024,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const rowGridStyle = {
    marginRight: '5px',
    position: 'relative'
}
const logoStyle = {
    marginTop: '15px',
    marginBottom: '18px',
    float: 'left'
}

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: '',
        };
        this.handleItemClick = this.handleItemClick.bind(this);
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

    handleItemClick(event, {name}) {
        this.setState({
            activeItem: name
        });
        console.log(this.state.activeItem);
      
    }


    render() {
        return (
            <Navbar inverse collapseOnselect fixedTop>
                <Navbar.Header >
                    <Navbar.Brand >
                        <a href="/">Colligence</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem componentClass={Link} href="/" to="/">메인</NavItem>
                        <NavDropdown title="인포" id="basic-nav-dropdown">
                            <NavItem componentClass={Link} href="/information" to="/information">코인1</NavItem>
                            <NavItem componentClass={Link} href="/information" to="/information">코인2</NavItem>
                            <NavItem componentClass={Link} href="/information" to="/information">코인3</NavItem>
                            <MenuItem divider />
                            <NavItem componentClass={Link} href="/information" to="/information">See ALL</NavItem>
                        </NavDropdown>
                        <NavItem componentClass={Link} href="/timeline" to="/timeline">타임라인</NavItem>
                        <NavItem componentClass={Link} href="/mypage" to="/mypage">마이페이지</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>{' '}
                            <Button type="submit"><Glyphicon glyph="search"/></Button>
                        </Navbar.Form>
                        <Navbar.Form pullRight>
                            <Button>
                                <Glyphicon glyph="menu-hamburger"/>
                            </Button>
                        </Navbar.Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            // <div>
            //     <Menu fixed = "top">
            //     {/* 윈도우의 width를 구해서, 그 갑셍 따라 minWidth를 state하게 바꿔줘야 할지도. */}
            //         <Responsive as = {Container} minWidth={1170}>
            //             <Container>
            //                 <Menu.Header>
            //                 <Image style = {logoStyle} src='/images/image.png' size='small' wrapped />
            //                 </Menu.Header>
            //                 {/* <Menu. */}
            //                 <Segment inverted>
            //                     <Grid columns={5} divided centered>
            //                     <Grid.Row stretched >
            //                             <Grid.Column>
            //                                 <Menu.Item name="메인" active={this.state.activeItem === 'Main'} onClick={this.handleItemClick}> 메인 </Menu.Item>
            //                                 {/* <Button inverted basic as = {Link} className="item" active={this.state.activeItem === 'Main'} to="/" content= "메인"></Button> */}
            //                             </Grid.Column>
            //                             <Grid.Column>
            //                                 <Button inverted basic as = {Link} className="item" active={this.state.activeItem === 'Information'} to="/information" content= "인포"></Button>
            //                             </Grid.Column>
            //                             <Grid.Column>
            //                                 <Button inverted basic as = {Link} className="item" active={this.state.activeItem === 'Timeline'} to="/timeline" content="타임라인"></Button>
            //                             </Grid.Column>
            //                             <Grid.Column>
            //                                 <Button inverted basic as = {Link} className="item" active={this.state.activeItem === 'MyPage'} to="/mypage" content= "내정보"></Button>
            //                             </Grid.Column>
            //                             <Grid.Column>
            //                                 <Input icon='search' placeholder='Search...' icon={{ name: 'search', link: true }} value={this.state.inputValue}/>
            //                             </Grid.Column>
            //                             <Grid.Column>
            //                                 <SideNavBar/>
            //                             </Grid.Column>
            //                         </Grid.Row>
                                    
            //                     </Grid> 
            //                 </Segment>
            //             </Container>
            //         </Responsive>
            //     </Menu>
            // </div>
        )
    }
}
export default Header;





