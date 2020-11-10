import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'components/__test__/Root';
import App from 'components/App';

beforeEach(() => {
	moxios.install();

	moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [{ name: 'Fetch #1' }, { name: 'Fetch #2' }],
	});
});

afterEach(() => {
	moxios.uninstall();
});

it('can fetch a list of comments and display them', (doneCallback) => {
	const wrapped = mount(
		<Root>
			<App />
		</Root>
	);

	wrapped.find('.fetch-comments').simulate('click');

	// use pause here
	// Approatch 1 - use setTimeout
	// setTimeout(() => {
	// 	wrapped.update();

	// 	expect(wrapped.find('li').length).toEqual(2);

	// 	doneCallback();
	//  wrapped.unmount()
	// }, 100);

	// moxios wait fnc
	moxios.wait(() => {
		wrapped.update();

		expect(wrapped.find('li').length).toEqual(2);

		doneCallback();
		wrapped.unmount();
	});
});
