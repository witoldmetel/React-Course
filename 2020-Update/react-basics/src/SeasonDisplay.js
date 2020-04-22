import React from 'react';

import { AcUnit, WbSunny } from '@material-ui/icons';

export const SeasonDisplay = (props) => {
	const getSeason = (latitude) => {
		const month = new Date().getMonth();

		if (month > 2 && month < 9) {
			return latitude > 0 ? 'summer' : 'winter';
		} else {
			return latitude < 0 ? 'summer' : 'winter';
		}
	};

	const getRenderer = () => {
		return getSeason(props.lat) === 'summer' ? (
			<div>
				<WbSunny />
				SUMMER
			</div>
		) : (
			<div>
				<AcUnit /> WINTER
			</div>
		);
	};

	return getRenderer();
};
