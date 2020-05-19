import React, { Component } from 'react';

export default class GoogleAuth extends Component {
	state = { isSignedIn: null };

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'505686962864-nr2dg19easehur39va23au15u3kqdakb.apps.googleusercontent.com',
					scope: 'email',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () =>
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });

	get renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return (
				<div className="ui active inverted dimmer">
					<div className="ui loader"></div>
				</div>
			);
		} else if (this.state.isSignedIn) {
			return <div>Signed !</div>;
		} else {
			return <div>No signed :(</div>;
		}
	}

	render() {
		return <div>{this.renderAuthButton}</div>;
	}
}
