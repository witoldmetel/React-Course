import React from 'react';

export class List extends React.Component {
	getList = (items) => {
		console.log(items);
		return items.map((item) => {
			return (
				<div key={item.id} className="ui segment">
					<img src={item.urls.small} />
				</div>
			);
		});
	};

	render() {
		return !this.props.images ? (
			<div className="ui segment">Empty :(</div>
		) : (
			this.getList(this.props.images)
		);
	}
}
