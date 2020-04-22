import React from 'react';

import contextLanguage from '../contexts/contextLanguage';
import contextColor from '../contexts/contextColor';

class Button extends React.Component {
	render() {
		return (
			<contextColor.Consumer>
				{(color) => (
					<div className={`ui button ${color}`}>
						<contextLanguage.Consumer>
							{(value) => (value === 'english' ? 'Submit' : 'Potwierdz')}
						</contextLanguage.Consumer>
					</div>
				)}
			</contextColor.Consumer>
		);
	}
}

export default Button;
