import React from 'react';

import './App.scss';
import {Header} from './components/header';
import {notFoundPage} from './components/noMatch';
import {Navigation} from './components/navigation';
import {Comp} from './components/cont';
//import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';


const App = () => {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route path='/' exact component={Header}/>
                <Route path='/portfolio' component={Header}/>
                <Route path='/portfolio/123' component={Header}/>
                <Route path='/test' render={()=><Comp text={'my Text'}/>}/>
                <Route component={notFoundPage}/>
            </Switch>
        </Router>
    );
}

export default App;