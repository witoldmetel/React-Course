import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					// @todo: Update clientId
					clientId:
						'505686962864-nr2dg19easehur39va23au15u3kqdakb.apps.googleusercontent.com',
					scope: 'email',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignIn) => {
		if (isSignIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};
	onSignInClick = () => this.auth.signIn();

	onSignOutClick = () => this.auth.signOut();

	get renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return (
				<div className="ui active inverted dimmer">
					<div className="ui loader"></div>
				</div>
			);
		} else if (this.props.isSignedIn) {
			return (
				<button className="ui red google button" onClick={this.onSignOutClick}>
					<i className="google icon"></i>
					Sign Out
				</button>
			);
		} else {
			return (
				<button className="ui green google button" onClick={this.onSignInClick}>
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

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
