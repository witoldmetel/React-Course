import React from 'react';

class Field extends React.Component {
	render() {
		return (
			<form className="ui form">
				<label>Name:</label>
				<input type="text" />
			</form>
		);
	}
}

export default Field;
