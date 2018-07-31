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
const client = require('./components/Client');
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

    componentDidMount() {
        client({method: 'GET', path: 'http://localhost:8080/api/users'}).then(response => {
            console.log(response); 
            console.log(response.entity._embedded.users);
        });
    }

    render() {
        return (
            <div>
                <a href ="#"><h1 style={titleStyle}> Crypto Hive </h1></a>
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route exact path="/information" component={Information}/>
                            <Route exact path="/timeline" component={TimeLine}/>
                            <Route exact path="/mypage" component={MyPage}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
};
export default App;

