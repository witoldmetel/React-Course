import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
	render() {
		return (
			<ul>
				{this.props.comments.map((comment, index) => {
					return <li key={index}>{comment}</li>;
				})}
			</ul>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		comments: state.comments,
	};
};

export default connect(mapStateToProps)(CommentList);
