import React from 'react';

import { AcUnit, WbSunny } from '@material-ui/icons';

import './SeasonDisplay.css';

const seasonConfig = {
	summer: {
		text: "Let's hit the beach!",
		icon: <WbSunny />,
	},
	winter: {
		text: 'Burr it is cold!',
		icon: <AcUnit />,
	},
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

export const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, icon } = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive icon`}>{icon}</i>
			<h1>{text}</h1>
			<i className={`icon-right massive icon`}>{icon}</i>
		</div>
	);
};
