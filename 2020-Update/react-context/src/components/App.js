import React from 'react';

import UserCreate from '../components/UserCreate';

class App extends React.Component {
	state = { language: 'english' };

	onSelectLanguage = (language) => this.setState({ language });

	render() {
		return (
			<div className="ui container">
				<div>
					Select Language:
					<i
						className="flag us"
						onClick={() => this.onSelectLanguage('english')}
					></i>
					<i
						className="flag pl"
						onClick={() => this.onSelectLanguage('polish')}
					></i>
				</div>
				<UserCreate />
			</div>
		);
	}
}

export default App;
