import React, { Component } from 'react';

import { connect } from 'react-redux';

class SongList extends Component {
	render() {
		return <div>Songlist</div>;
	}
}

export default connect()(SongList);
