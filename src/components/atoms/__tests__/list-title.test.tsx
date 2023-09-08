import React from 'react';
import { render } from '@testing-library/react';
import ListTitle from "../list-title";

test('renders list-title', () => {
    const id = 'test123';
    const title = 'Testing';
    const { getByText } = render(
        <ListTitle id={id} title={title} selected={true} onClick={(id) => {console.log('id', id)}} />);
    const linkElement = getByText(title);
    expect(linkElement).toBeTruthy();
});
