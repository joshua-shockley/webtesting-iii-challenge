// Test away

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';


test('should match snapshot', () => {
    expect(render( < Dashboard / > )).toMatchSnapshot();
});

test('dashbord renders', () => {
    render( < Dashboard / > );
});

test('attempting mock....you know like its mocking me!', () => {
    const mock = jest.fn();
    const actual = mock('frownyFace');
    //like earlier.. settup the asser that it was called, assert that we passed in 'frownyFace'
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('frownyFace');
});

{ /* //shows the controls and display... by looking for classname of those div */ }
test('contains display and controls in dashboard', () => {
    const { queryByText } = render( < Dashboard / > );
    queryByText(/display panel/i);
    queryByText(/controls panel/i);
});