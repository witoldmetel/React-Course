import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import {
	StreamCreate,
	StreamDelete,
	StreamEdit,
	StreamList,
	StreamShow,
} from './streams/index';

export default class App extends Component {
	render() {
		return (
			<div className="ui container">
				<BrowserRouter>
					<Header />
					<>
						<Route path="/" exact component={StreamList} />
						<Route path="/streams/new" component={StreamCreate} />
						<Route path="/streams/delete" component={StreamDelete} />
						<Route path="/streams/edit" component={StreamEdit} />
						<Route path="/streams/show" component={StreamShow} />
					</>
				</BrowserRouter>
			</div>
		);
	}
}
