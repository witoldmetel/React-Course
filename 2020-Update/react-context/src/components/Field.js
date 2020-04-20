import React from 'react';

import contextLanguage from '../contexts/contextLanguage';

class Field extends React.Component {
	static contextType = contextLanguage;

	render() {
		const text = this.context === 'english' ? 'Name:' : 'Imie:';

		return (
			<form className="ui form">
				<label>{text}</label>
				<input type="text" />
			</form>
		);
	}
}

export default Field;
