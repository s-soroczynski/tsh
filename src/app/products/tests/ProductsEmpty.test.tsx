import React from 'react';

import { render, screen } from 'tests';
import '@testing-library/jest-dom'

import { ProductsEmpty } from '../ProductsEmpty';

describe('ProductsEmpty.test', () => {
  test('Should match empty products view', async () => {
    const { getByText } = render(<ProductsEmpty />);

    expect(getByText('Ooops… Its empty here')).toBeInTheDocument();
    expect(getByText('There are no products on the list')).toBeInTheDocument();
  });
});
