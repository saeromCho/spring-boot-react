// /**
//  * Created by noir2k on 2018. 7. 23..
//  */

import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Main from './routes/MainPage'
import Information from './routes/Information'
import TimeLine from './routes/TimeLine'
import MyPage from './routes/MyPage'
import Header from './components/Header';
import {Container, Image, Menu} from 'semantic-ui-react';
// 메인 인포 타임라인 마이페이지

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />

                    <Route exact path="/" component={Main}/>
                    <Route path="/information" component={Information}/>
                    <Route path="/timeline" component={TimeLine}/>
                    <Route path="/mypage" component={MyPage}/>
                </div>
            </Router>
        );
    }
};
export default App;

