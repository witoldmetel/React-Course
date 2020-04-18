import React from 'react';
import ReactDOM from 'react-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import { SeasonDisplay } from '../src/SeasonDisplay';

class App extends React.Component {
	state = { lat: null, error: null };

	render() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ error: err.message })
		);

		if (!this.state.lat && !this.state.error) {
			return <CircularProgress />;
		} else {
			return this.state.lat ? (
				<SeasonDisplay lat={this.state.lat} />
			) : (
				<div>Error: {this.state.error}</div>
			);
		}
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
