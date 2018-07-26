// /**
//  * Created by noir2k on 2018. 7. 23..
//  */

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Sidebar} from 'semantic-ui-react';
import Main from './routes/MainPage'
import Information from './routes/Information'
import TimeLine from './routes/TimeLine'
import MyPage from './routes/MyPage'
import Header from './components/Header';
// 메인 인포 타임라인 마이페이지

const titleStyle = {
    height: '3.5rem',
    backgroundColor: 'Navy',
    width: '100vw',
    lineHeight: '3.5rem',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center'
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <a href ="#"><h1 style={titleStyle}> Crypto Hive </h1></a>
                <Sidebar.Pushable as={Router}>
                <Sidebar.Pusher dimmed={this.state.visible}>
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route path="/information" component={Information}/>
                            <Route path="/timeline" component={TimeLine}/>
                            <Route path="/mypage" component={MyPage}/>
                        </Switch>
                    </div>
                </Router>
                </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
};
export default App;

