import React from 'react';

import Field from '../components/Field';
import Button from '../components/Button';

class UserCreate extends React.Component {
	render() {
		return (
			<div className="ui form">
				<Field />
				<Button />
			</div>
		);
	}
}

export default UserCreate;
