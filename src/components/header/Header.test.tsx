import React from 'react';

import { render } from 'tests';
import '@testing-library/jest-dom'

import { Header } from './Header';

describe('Header.test', () => {
  test('Should render Header with logo and avatar', async () => {
    const { queryAllByText, getAllByRole } =render(<Header />);    

    expect(queryAllByText('join.tsh.io').length).toBe(2)
    expect(getAllByRole('button').length).toBe(2)
  });
});
