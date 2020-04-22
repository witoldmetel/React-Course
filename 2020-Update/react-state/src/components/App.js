import React from 'react';
import unsplash from '../api/unsplash';

import { SearchBar } from '../components/SearchBar';
import { List } from '../components/List';

export class App extends React.Component {
	state = { images: [] };
	onFormSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params: { query: term },
		});

		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onFormSubmit} />
				<List images={this.state.images} />
			</div>
		);
	}
}
