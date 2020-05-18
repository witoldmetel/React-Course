import { combineReducers } from 'redux';

export const songsReducer = () => {
	return [
		{ title: 'Macarena', duration: '2:30' },
		{ title: 'Love', duration: '1:40' },
		{ title: 'Hate', duration: '3:10' },
	];
};

export const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
