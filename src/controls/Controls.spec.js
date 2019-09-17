// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

//  initial render of this component

test('renders Controls correctly', () => {
    render( < Controls / > );
});

{ /*  lets do the next test */ }

{ /* looking for the button */ }
test('find buttons for closed and locked', () => {
    const { queryByText, getByText } = render( < Controls / > );
    expect(queryByText(/toggle-btn/i));
    expect(queryByText(/button/i));
}); { /* //default for controls default// */ }
test('checking for default of controls', () => {
            render( < Controls locked = { false }
                closed = { false }
                />);
            });

        test('checking for gate to be unlocked and open', () => {
                const { queryByText } = render( < Controls locked = { false }
                    closed = { false }
                    />);
                    const lockedBtn = queryByText('Lock Gate');
                    const closedBtn = queryByText('Close Gate'); expect(lockedBtn.disabled).toBe(true); expect(closedBtn.disabled).toBe(false);
                });

            test('testing toggledfns', () => {
                    const toggleLocked = jest.fn();
                    const toggleClosed = jest.fn();
                    render( < Controls toggleLocked = { toggleLocked }
                        toggleClosed = { toggleClosed }
                        />);
                        // expect(toggleLocked.onClick).toBe(!locked);
                    })