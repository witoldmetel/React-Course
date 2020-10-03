import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import reducers from 'reducers';
import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware(reduxPromise));

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route path="/" component={App} />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
