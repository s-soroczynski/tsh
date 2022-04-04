import React from 'react';

import { render } from 'tests';
import '@testing-library/jest-dom'

import { Filters } from './Filters';

describe('Filters.test', () => {
  test('Should render Filters with search and checkboxes', async () => {
    const { getByRole, getByText } = render(<Filters />);
    
    expect(getByRole('checkbox', { name: 'Active' })).toBeTruthy();
    expect(getByText('Active')).toBeInTheDocument()
    expect(getByRole('checkbox', { name: 'Promo' })).toBeTruthy();
    expect(getByText('Promo')).toBeInTheDocument()
    expect(getByRole('textbox')).toBeTruthy();
  });
});
