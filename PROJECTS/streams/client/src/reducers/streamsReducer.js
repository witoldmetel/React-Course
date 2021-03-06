import { omit, mapKeys } from 'lodash';

import {
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	EDIT_STREAM,
} from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };

		case FETCH_STREAMS:
			return { ...state, ...mapKeys(action.payload, 'id') };

		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };

		case DELETE_STREAM:
			return omit(state, action.payload);

		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };

		default:
			return state;
	}
};
