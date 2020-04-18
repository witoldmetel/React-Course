import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();

		this.state = { lat: null, error: null };
	}

	render() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ error: err.message })
		);

		if (!this.state.lat && !this.state.error) {
			return <div>Loading...</div>;
		} else {
			return this.state.lat ? (
				<div>Latitude: {this.state.lat}</div>
			) : (
				<div>Error: {this.state.error}</div>
			);
		}
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
