import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createStream } from '../../actions';

class StreamCreate extends Component {
	renderInput = ({ label, input, meta }) => {
		const displayError =
			meta.error && meta.touched ? (
				<div className="ui error message">{meta.error}</div>
			) : null;

		return (
			<div className="field">
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{displayError}
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	};

	render() {
		return (
			<form
				className="ui form error"
				onSubmit={this.props.handleSubmit(this.onSubmit)}
			>
				<Field name="title" label="Enter title" component={this.renderInput} />
				<Field
					name="description"
					label="Enter description"
					component={this.renderInput}
				/>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		errors.title = 'Enter title';
	}

	if (!formValues.description) {
		errors.description = 'Enter description';
	}

	return errors;
};

const formWrapped = reduxForm({
	form: 'streamCreate',
	validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
