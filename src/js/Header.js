/**
 * Created by noir2k on 2018. 7. 23..
 */


import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Input } from 'semantic-ui-react';
// 메인 인포 타임라인 마이페이지

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: ''
        };

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentWillMount() {
        document.addEventListener("handleItemClick", this.handleItemClick.bind(this));
    }

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
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' value={this.state.inputValue}/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}


export default Header;

