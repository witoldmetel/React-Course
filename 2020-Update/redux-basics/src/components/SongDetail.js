import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetail extends Component {
	render() {
		return this.props.selectedSong ? (
			<div className="ui divided list">
				{this.props.selectedSong.title}
				<br />
				{this.props.selectedSong.duration}
			</div>
		) : null;
	}
}

const mapStateToProps = (state) => {
	return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
