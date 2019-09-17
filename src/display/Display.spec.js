// Test away!

import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Display from './Display.js';

test('display renders correctly', () => {
    render(<Display/>);
});

//gonna test the gate first.../

test('checks default is unlocked and open', async() => {
   const {queryByText} = render(<Display/>);

   expect(queryByText(/false/i));
});

test('defaults to unlocked and open', ()=> {
    const {getByText} = render(<Display/>);
    getByText(/unlocked/i);
    getByText(/open/i);
});

test('should show state of locked and closed on click', () => {
const {queryByText} = render( <Display closed={false} locked={false} />);
    // const theLocked = queryByText('')
});