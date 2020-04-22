import React from 'react';

import ContextLanguage from '../contexts/ContextLanguage';

class Field extends React.Component {
	static contextType = ContextLanguage;

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
