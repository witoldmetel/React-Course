import React from 'react';

import ContextLanguage from '../contexts/ContextLanguage';
import ContextColor from '../contexts/ContextColor';

class Button extends React.Component {
	render() {
		return (
			<ContextColor.Consumer>
				{(color) => (
					<div className={`ui button ${color}`}>
						<ContextLanguage.Consumer>
							{(value) => (value === 'english' ? 'Submit' : 'Potwierdz')}
						</ContextLanguage.Consumer>
					</div>
				)}
			</ContextColor.Consumer>
		);
	}
}

export default Button;
