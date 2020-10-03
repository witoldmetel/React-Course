import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentList from './CommentList';
import CommentBox from './CommentBox';
import * as actions from '../actions';

class App extends React.Component {
	get signInButton() {
		return this.props.auth ? (
			<button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
		) : (
			<button onClick={() => this.props.changeAuth(true)}>Sign In</button>
		);
	}

	get header() {
		return (
			<ul
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					width: '300px',
				}}
			>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/post">Post</Link>
				</li>
				<li>{this.signInButton}</li>
			</ul>
		);
	}

	render() {
		return (
			<div className="App">
				{this.header}
				<Route path="/" exact component={CommentList} />
				<Route path="/post" exact component={CommentBox} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
