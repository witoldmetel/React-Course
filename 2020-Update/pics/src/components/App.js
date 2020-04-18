import React from 'react';

import { SearchBar } from '../components/SearchBar';

export class App extends React.Component {
	onFormSubmit = (term) => {
		console.log(term);
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onFormSubmit} />
			</div>
		);
	}
}
