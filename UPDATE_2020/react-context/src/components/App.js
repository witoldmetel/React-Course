import React from 'react';

import LanguageSelector from '../components/LanguageSelector';
import UserCreate from '../components/UserCreate';
import { LanguageStore } from '../contexts/LanguageStore';
import ContextColor from '../contexts/ContextColor';

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<LanguageStore>
					<LanguageSelector />
					<ContextColor.Provider value="red">
						<UserCreate />
					</ContextColor.Provider>
				</LanguageStore>
			</div>
		);
	}
}

export default App;
