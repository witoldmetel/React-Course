import React from 'react';
import ReactDOM from 'react-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import { SeasonDisplay } from './SeasonDisplay';
import useLocation from './useLocation';

const App = () => {
	const { lat, error } = useLocation();

	return !lat && !error ? (
		<CircularProgress />
	) : lat ? (
		<SeasonDisplay lat={lat} />
	) : (
		<div>Error: {error}</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
