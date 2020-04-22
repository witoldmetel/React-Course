import React from 'react';

class LanguageSelector extends React.Component {
	render() {
		return (
			<>
				Select Language:
				<i
					className="flag us"
					onClick={() => this.props.onSelectLanguage('english')}
				></i>
				<i
					className="flag pl"
					onClick={() => this.props.onSelectLanguage('polish')}
				></i>
			</>
		);
	}
}

export default LanguageSelector;
