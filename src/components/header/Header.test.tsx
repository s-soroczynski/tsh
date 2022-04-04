import React from 'react';

import { render, screen } from 'tests';
import '@testing-library/jest-dom'

import { Header } from './Header';

describe('Header.test', () => {
  test('Should render Header with logo and avatar', async () => {
    render(<Header />);    

    expect(screen.queryAllByText('join.tsh.io').length).toBe(2)
    expect(screen.getAllByRole('img').length).toBe(2)
  });
});
