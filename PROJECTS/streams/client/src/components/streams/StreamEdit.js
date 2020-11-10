import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';

import { fetchStream, editStream } from '../../actions';
import StreamForm from '../streams/StreamForm';

class StreamEdit extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		this.props.editStream(this.props.match.params.id, formValues);
	};

	render() {
		return !this.props.stream ? (
			<div className="ui active inverted dimmer">
				<div className="ui loader"></div>
			</div>
		) : (
			<StreamForm
				initialValues={pick(this.props.stream, 'title', 'description')}
				onSubmit={this.onSubmit}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
	StreamEdit
);
