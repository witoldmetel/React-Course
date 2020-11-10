import React from 'react';

export class SearchBar extends React.Component {
	state = { inputValue: '' };

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.onSubmit(this.state.inputValue);

		this.setState({ inputValue: '' });
	};

	onInputChange = (e) => {
		this.setState({ inputValue: e.target.value });
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							value={this.state.inputValue}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}
