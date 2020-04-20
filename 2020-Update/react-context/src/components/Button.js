import React from 'react';

import contextLanguage from '../contexts/contextLanguage';

class Button extends React.Component {
	static contextType = contextLanguage;

	render() {
		const text = this.context === 'english' ? 'Submit' : 'Potwierdz';

		return <div className="ui button primary">{text}</div>;
	}
}

export default Button;
