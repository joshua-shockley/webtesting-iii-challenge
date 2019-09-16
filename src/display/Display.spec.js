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
