import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header';
import {
	StreamCreate,
	StreamDelete,
	StreamEdit,
	StreamList,
	StreamShow,
} from './streams/index';
import history from '../history';

export default class App extends Component {
	render() {
		return (
			<div className="ui container">
				<Router history={history}>
					<Header />
					<>
						<Route path="/" exact component={StreamList} />
						<Route path="/streams/new" component={StreamCreate} />
						<Route path="/streams/delete/:id" component={StreamDelete} />
						<Route path="/streams/edit/:id" component={StreamEdit} />
						<Route path="/streams/:id" component={StreamShow} />
					</>
				</Router>
			</div>
		);
	}
}
