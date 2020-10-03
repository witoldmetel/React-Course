import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
	render() {
		return (
			<div>
				<h4>Comment List</h4>
				<ul>
					{this.props.comments.map((comment, index) => {
						return <li key={index}>{comment}</li>;
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		comments: state.comments,
	};
};

export default connect(mapStateToProps)(CommentList);
