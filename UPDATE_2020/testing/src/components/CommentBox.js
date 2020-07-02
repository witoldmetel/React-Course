import React, { Component } from 'react';

export default class CommentBox extends Component {
	state = {
		comment: '',
	};

	onChange = (e) => {
		this.setState({ comment: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();

		this.setState({ comment: '' });
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<h4>Comment</h4>
				<textarea value={this.state.comment} onChange={this.onChange} />
				<div>
					<button>Submit</button>
				</div>
			</form>
		);
	}
}
