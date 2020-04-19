import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends Component {
	renderList = () => {
		return this.props.songs.map((song, index) => (
			<div className="item" key={index}>
				<div className="right floated content"></div>
				<div className="content">{song.title}</div>
				<button
					className="ui button primary"
					onClick={() => this.props.selectSong(song)}
				>
					Select
				</button>
			</div>
		));
	};
	render() {
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
