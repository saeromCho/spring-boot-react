import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button, ButtonGroup, ButtonToolbar, Glyphicon, Col} from 'react-bootstrap';
import SideNavBar from './SideNavBar';

const menuStyle = {
    marginLeft: '550px'
}

const navbarStyle = {
    // color: 'blue-grey',
    display: 'contents'
}
const logoStyle = {
    fontSize: '40px'
}

const navFixedStyle = {
    padding: '50px 0px'
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
// const logoStyle = {
//     marginTop: '15px',
//     marginBottom: '18px',
//     float: 'left'
// }

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
            <Navbar style={navFixedStyle} inverse fixedTop>
                <Col xs={12} sm={3} md={4}>
                    <Navbar.Header>
                    
                        <Navbar.Brand >
                            <a href="/" style={logoStyle}>Colligence</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Col>
                <Navbar.Collapse style={navbarStyle} inverse>
                    <Col xs={12} sm={6} md={5}>
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
                    </Col>
                    <Col xs={12} sm={3} md={3}>
                        <Nav pullRight>
                            <Navbar.Form pullLeft>
                                <Col xs={10} sm={10} md={10}>
                                    <FormGroup>
                                        <FormControl type="text" placeholder="Search" />
                                    </FormGroup>{' '}
                                </Col>
                                <Col xs={2} sm={2} md={2}>
                                    <Button type="submit"><Glyphicon glyph="search"/></Button>
                                </Col>
                            </Navbar.Form>
                            {/* <Navbar.Form pullRight>
                                <Button>
                                    <Glyphicon glyph="menu-hamburger"/>
                                </Button>
                            </Navbar.Form> */}
                        </Nav>
                    </Col>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Header;





