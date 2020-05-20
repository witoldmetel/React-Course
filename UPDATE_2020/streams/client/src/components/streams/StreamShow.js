import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamShow extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	render() {
		return !this.props.stream ? (
			<div className="ui active inverted dimmer">
				<div className="ui loader"></div>
			</div>
		) : (
			<div className="content">
				<h2 className="header">{this.props.stream.title}</h2>
				<div className="description">{this.props.stream.description}</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
