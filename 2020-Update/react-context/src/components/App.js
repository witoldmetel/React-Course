import React from 'react';

import UserCreate from '../components/UserCreate';
import contextLanguage from '../contexts/contextLanguage';
import contextColor from '../contexts/contextColor';

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
				<contextLanguage.Provider value={this.state.language}>
					<contextColor.Provider value="red">
						<UserCreate />
					</contextColor.Provider>
				</contextLanguage.Provider>
			</div>
		);
	}
}

export default App;
