import React from 'react';

import LanguageSelector from '../components/LanguageSelector';
import UserCreate from '../components/UserCreate';
import ContextLanguage from '../contexts/ContextLanguage';
import ContextColor from '../contexts/ContextColor';

class App extends React.Component {
	state = { language: 'english' };

	onSelectLanguage = (language) => this.setState({ language });

	render() {
		return (
			<div className="ui container">
				<LanguageSelector onSelectLanguage={this.onSelectLanguage} />
				<ContextLanguage.Provider value={this.state.language}>
					<ContextColor.Provider value="red">
						<UserCreate />
					</ContextColor.Provider>
				</ContextLanguage.Provider>
			</div>
		);
	}
}

export default App;
