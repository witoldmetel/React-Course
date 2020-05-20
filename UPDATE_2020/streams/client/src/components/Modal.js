import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
	get modalContent() {
		return (
			<div
				onClick={this.props.onDismiss}
				className="ui dimmer modals visible active"
			>
				<div
					onClick={(e) => e.stopPropagation()}
					className="ui standard modal visible active"
				>
					<div className="header">Delete Stream</div>
					<div className="content">Are you sure with that?</div>
					<div className="actions">
						<button
							className="ui negative button"
							onClick={this.props.onDelete}
						>
							Delete
						</button>
						<button className="ui button" onClick={this.props.onCancel}>
							Cancel
						</button>
					</div>
				</div>
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
