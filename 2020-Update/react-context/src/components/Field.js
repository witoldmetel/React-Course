import React from 'react';

import { Context } from '../contexts/LanguageStore';

class Field extends React.Component {
	static contextType = Context;

	render() {
		const text = this.context.language === 'english' ? 'Name:' : 'Imie:';

		return (
			<form className="ui form">
				<label>{text}</label>
				<input type="text" />
			</form>
		);
	}
}

export default Field;
