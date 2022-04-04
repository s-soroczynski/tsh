import React from 'react';

import { render, screen } from 'tests';
import '@testing-library/jest-dom'

import { Logo } from './Logo';

describe('Logo.test', () => {
  test('Should render logo', async () => {
    const { getByText } = render(<Logo />);

    expect(getByText('join.tsh.io')).toBeInTheDocument()
  });
});
