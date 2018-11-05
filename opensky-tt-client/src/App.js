import React, {Component} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';


import Login from './features/auth/Login'
import Home from './features/home-page/Home'
import NotFound from "./features/not-found/NotFound";
import PrivateRoute from "./components/common/PrivateRoute";

class App extends Component {

	render() {
		return (
				<div className="App">
					<Switch>

						<Route exact path="/" component={Login}/>

						<PrivateRoute
								exact path="/home"
								component={Home}/>

						<Route component={NotFound}/>

					</Switch>
				</div>
		);
	}
}

export default withRouter(App);
