import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class App extends React.Component {
	componentDidMount() {
		fetchPosts();
	}

	renderList() {
		return this.props.posts.map((post) => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<h2>{post.title}</h2>
					</div>
				</div>
			);
		});
	}

	render() {
		console.log(this.props.posts);
		return <div className="App">{this.renderList()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(App);
