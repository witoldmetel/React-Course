import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class CommentBox extends Component {
	state = {
		comment: '',
	};

	onChange = (e) => {
		this.setState({ comment: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();

		this.props.saveComment(this.state.comment);

		this.setState({ comment: '' });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<h4>Comment</h4>
					<textarea value={this.state.comment} onChange={this.onChange} />
					<div>
						<button>Submit</button>
					</div>
				</form>
				<button onClick={this.props.fetchComments}>Fetch Comments</button>
			</div>
		);
	}
}

export default connect(null, actions)(CommentBox);
