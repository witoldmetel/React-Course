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

	onSignIn = () => {
		this.auth.signIn();
	};

	onSignOut = () => {
		this.auth.signOut();
	};

	get renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return (
				<div className="ui active inverted dimmer">
					<div className="ui loader"></div>
				</div>
			);
		} else if (this.state.isSignedIn) {
			return (
				<button className="ui red google button" onClick={this.onSignOut}>
					<i className="google icon"></i>
					Sign Out
				</button>
			);
		} else {
			return (
				<button className="ui green google button" onClick={this.onSignIn}>
					<i className="google icon"></i>
					Sign In
				</button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton}</div>;
	}
}
