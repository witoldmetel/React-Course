import streams from '../API/streams';
import history from '../history';
import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	EDIT_STREAM,
} from './types';

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId,
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};

export const createStream = (formValues) => async (dispatch, getState) => {
	const { userId } = getState().auth;
	const response = await streams.post('/streams', { ...formValues, userId });

	dispatch({
		type: CREATE_STREAM,
		payload: response.data,
	});

	// Programmatic navigation to get the user back to the root route
	history.push('/');
};

export const fetchStreams = () => async (dispatch) => {
	const response = await streams.get('/streams');

	return dispatch({
		type: FETCH_STREAMS,
		payload: response.data,
	});
};

export const fetchStream = (id) => async (dispatch) => {
	const response = await streams.get(`/streams/:${id}`);

	dispatch({
		type: FETCH_STREAM,
		payload: response.data,
	});
};

export const deleteStream = (id) => async (dispatch) => {
	await streams.delete(`/streams/:${id}`);

	return dispatch({
		type: DELETE_STREAM,
		payload: id,
	});
};

export const editStream = (id, formValues) => async (dispatch) => {
	const response = await streams.put(`/streams/:${id}`, formValues);

	dispatch({
		type: EDIT_STREAM,
		payload: response.data,
	});

	// Programmatic navigation to get the user back to the root route
	history.push('/');
};
