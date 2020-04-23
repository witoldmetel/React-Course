import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import { SeasonDisplay } from '../src/SeasonDisplay';

const App = () => {
	const [lat, setLat] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			(position) => setLat(position.coords.latitude),
			(err) => setError(err.message)
		);
	}, []);

	return !lat && !error ? (
		<CircularProgress />
	) : lat ? (
		<SeasonDisplay lat={lat} />
	) : (
		<div>Error: {error}</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
