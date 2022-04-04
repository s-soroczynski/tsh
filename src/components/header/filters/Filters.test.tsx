import React from 'react';

import { render, screen } from 'tests';
import '@testing-library/jest-dom'

import { Filters } from './Filters';

describe('Filters.test', () => {
  test('Should render Filters with search and checkboxes', async () => {
    render(<Filters />);
    
    expect(screen.getByRole('checkbox', { name: 'Active' })).toBeTruthy();
    expect(screen.getByText('Active')).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: 'Promo' })).toBeTruthy();
    expect(screen.getByText('Promo')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
