import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
	get modalContent() {
		return (
			<div className="ui dimmer modals visible active">
				<div className="ui standard modal visible active">Example Modal</div>
			</div>
		);
	}
	render() {
		return ReactDOM.createPortal(
			this.modalContent,
			document.getElementById('modal')
		);
	}
}

export default Modal;
