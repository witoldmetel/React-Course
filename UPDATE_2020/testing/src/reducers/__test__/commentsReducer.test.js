import commentsReducer from '../comments';

it('handles actions of type SAVE_COMMENT', () => {
	const action = {
		type: 'SAVE_COMMENT',
		payload: 'New comment',
	};

	const newState = commentsReducer([], action);

	expect(newState).toEqual(['New comment']);
});

it('handles actions of unknown type', () => {
	const newState = commentsReducer([], { type: 'unknown' });

	expect(newState).toEqual([]);
});
