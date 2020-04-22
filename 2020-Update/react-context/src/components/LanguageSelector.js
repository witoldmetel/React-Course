import React from 'react';

import { Context } from '../contexts/LanguageStore';

class LanguageSelector extends React.Component {
	static contextType = Context;

	render() {
		return (
			<>
				Select Language:
				<i
					className="flag us"
					onClick={() => this.context.onLanguageChange('english')}
				></i>
				<i
					className="flag pl"
					onClick={() => this.context.onLanguageChange('polish')}
				></i>
			</>
		);
	}
}

export default LanguageSelector;
