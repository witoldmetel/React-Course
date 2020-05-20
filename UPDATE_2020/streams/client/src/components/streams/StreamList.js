import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderAdminPanel = (stream) => {
		return stream.userId === this.props.currentUserId ? (
			<div className="right floated content">
				<button className="ui button green">Edit</button>
				<button className="ui button negative">Delete</button>
			</div>
		) : null;
	};

	get renderList() {
		return this.props.streams.map((stream) => {
			return (
				<div className="item" key={stream.id}>
					{this.renderAdminPanel(stream)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						<h3>{stream.title}</h3>
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	}

	get createStreamButton() {
		return this.props.isSignedIn ? (
			<div style={{ textAlign: 'right' }}>
				<Link className="ui button primary" to="/streams/new">
					Create Stream
				</Link>
			</div>
		) : null;
	}

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">{this.renderList}</div>
				{this.createStreamButton}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
