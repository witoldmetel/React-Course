import React from 'react';

import { Context } from '../contexts/LanguageStore';
import ContextColor from '../contexts/ContextColor';

class Button extends React.Component {
	render() {
		return (
			<ContextColor.Consumer>
				{(color) => (
					<div className={`ui button ${color}`}>
						<Context.Consumer>
							{({ language }) =>
								language === 'english' ? 'Submit' : 'Potwierdz'
							}
						</Context.Consumer>
					</div>
				)}
			</ContextColor.Consumer>
		);
	}
}

export default Button;
