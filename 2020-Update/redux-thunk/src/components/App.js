import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class App extends React.Component {
	componentDidMount() {
		fetchPosts();
	}

	render() {
		return <div className="App">App</div>;
	}
}

export default connect(null, fetchPosts)(App);
