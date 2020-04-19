import React from 'react';

import { ImageCard } from '../components/ImageCard';

import './List.css';

export class List extends React.Component {
	getList = (items) =>
		items.map((item) => <ImageCard key={item.id} imageData={item} />);

	render() {
		return !this.props.images ? (
			<div className="ui segment">Empty :(</div>
		) : (
			<div className="image-list">{this.getList(this.props.images)}</div>
		);
	}
}
