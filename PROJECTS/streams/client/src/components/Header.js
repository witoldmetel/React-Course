import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

export default class Header extends Component {
	render() {
		return (
			<div className="ui secondary pointing menu">
				<Link to="/" className="item">
					Home
				</Link>
				<div className="right menu">
					<Link to="/streams/show" className="item">
						All Streams
					</Link>
					<div className="item">
						<GoogleAuth />
					</div>
				</div>
			</div>
		);
	}
}
