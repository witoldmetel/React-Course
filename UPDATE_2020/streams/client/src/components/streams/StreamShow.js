import React, { Component } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamShow extends Component {
	constructor(props) {
		super(props);

		this.videoRef = React.createRef();
	}

	componentDidMount() {
		const { id } = this.props.match.params;

		this.props.fetchStream(id);
		this.renderPlayer();
	}

	componentDidUpdate() {
		this.renderPlayer();
	}

	componentWillUnmount() {
		this.player.destroy();
	}

	renderPlayer = () => {
		const { id } = this.props.match.params;

		if (this.player || !this.props.stream) {
			return;
		}

		this.player = flv.createPlayer({
			type: 'flv',
			url: `http://localhost:8000/live/${id}.flv`,
		});
		this.player.attachMediaElement(this.videoRef.current);
		this.player.load();
	};

	render() {
		return !this.props.stream ? (
			<div className="ui active inverted dimmer">
				<div className="ui loader"></div>
			</div>
		) : (
			<div className="content">
				<video ref={this.videoRef} style={{ width: '100%' }} controls />
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
