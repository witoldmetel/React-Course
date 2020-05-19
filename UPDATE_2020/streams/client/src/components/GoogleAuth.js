import React, { Component } from 'react';

export default class GoogleAuth extends Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId:
					'505686962864-nr2dg19easehur39va23au15u3kqdakb.apps.googleusercontent.com',
				scope: 'email',
			});
		});
	}

	render() {
		return <div>GoogleAuth</div>;
	}
}
