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

// const headerStyle = {
//     backgroundImage: `url( ${headerImage} )`
// }

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
                    <Grid columns={5} divided centered>
                    <Grid.Row stretched>
                            <Grid.Column>
                                <Button inverted basic as = {NavLink} exact className="item" active={this.state.activeItem === 'Main'} to="/" content= "메인"></Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button inverted basic as = {NavLink} exact className="item" active={this.state.activeItem === 'Information'} to="/information" content= "인포"></Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button inverted basic as = {NavLink} exact className="item" active={this.state.activeItem === 'TimeLine'} to="/timeline" content="타임라인"></Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button inverted basic as = {NavLink} exact className="item" active={this.state.activeItem === 'MyPage'} to="/mypage" content= "내정보"></Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Input icon='search' placeholder='Search...' icon={{ name: 'search', link: true }} value={this.state.inputValue}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid> 
                </Segment>
            </div>
        )
    }
}
export default Header;





