import React from 'react';
import { Route } from 'react-router-dom';

import CommentList from './CommentList';
import CommentBox from './CommentBox';

function App() {
	return (
		<div className="App">
			<Route path="/" exact component={CommentList} />
			<Route path="/post" exact component={CommentBox} />
		</div>
	);
}

export default App;
