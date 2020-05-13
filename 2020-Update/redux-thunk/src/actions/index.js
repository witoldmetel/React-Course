import jsonPlaceholder from '../API/jsonPlaceholder';

export const fetchPosts = () => async (dispatch, getState) => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({
		type: 'FETCH_POSTS',
		payload: response,
	});
};
