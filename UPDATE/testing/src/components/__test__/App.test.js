import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let component;

beforeEach(() => {
	component = shallow(<App />);
});

it('renders a CommentBox component', () => {
	expect(component.find(CommentBox).length).toEqual(1);
});

it('renders a CommentList component', () => {
	expect(component.find(CommentList).length).toEqual(1);
});
