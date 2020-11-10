import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onDeleteClick = () => {
		this.props.deleteStream(this.props.match.params.id);
	};

	render() {
		return (
			<Modal
				onDismiss={() => history.push('/')}
				onDelete={this.onDeleteClick}
				onCancel={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
	StreamDelete
);
