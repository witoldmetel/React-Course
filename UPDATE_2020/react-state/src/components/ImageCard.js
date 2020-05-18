import React from 'react';

export class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { spans: 0 };
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const rowHeight = 10;

		const spans = Math.ceil(height / rowHeight);

		this.setState({ spans });
	};

	render() {
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} src={this.props.imageData.urls.regular} />
			</div>
		);
	}
}
