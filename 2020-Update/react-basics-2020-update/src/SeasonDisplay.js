import React from 'react';

export const SeasonDisplay = (props) => {
	const getSeason = (latitude) => {
		const month = new Date().getMonth();

		if (month > 2 && month < 9) {
			return latitude > 0 ? 'summer' : 'winter';
		} else {
			return latitude < 0 ? 'summer' : 'winter';
		}
	};

	return <div>Season: {getSeason(props.lat)}</div>;
};
