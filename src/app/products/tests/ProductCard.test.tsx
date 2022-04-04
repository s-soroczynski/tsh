import React from 'react';

import { render, screen } from 'tests';
import '@testing-library/jest-dom'


import { ProductCard } from '../ProductCard';
import { ProductInterface } from '../Product.interface'

describe('ProductCard', () => {
  const mockItem: ProductInterface = {
    active: true,
    description: "DescriptionMock",
    id: 1,
    image: "mockSrc",
    name: "NameMock",
    promo: true,
    rating: 2,
  }

  test('Displays product info', async () => {
    const { getByText } = render(<ProductCard item={ mockItem } />);
    const img = screen.getByTestId('cardMedia')
    const rating = screen.getByLabelText(`${mockItem.rating} Stars`);
    const button = screen.getByRole('button');

    expect(img).toHaveAttribute('src', mockItem.image)
    expect(img).toHaveAttribute('alt', mockItem.name)
    expect(getByText(mockItem.name)).toBeInTheDocument();
    expect(getByText(mockItem.description)).toBeInTheDocument();
    expect(rating).not.toBeNull()
    expect(getByText('Promo')).toBeInTheDocument();
    expect(getByText('Show details')).toBeInTheDocument();
    expect(button).not.toHaveAttribute('disabled')
  });

  test('Should display different info when product is not active', async () => {
    const item = { ...mockItem, active: false }
    const { getByText } = render(<ProductCard item={ item } />);
    const rating = screen.getByLabelText(`${mockItem.rating} Stars`);
    const button = screen.getByRole('button');

    expect(rating).not.toBeNull()
    expect(screen.queryByText('Promo')).not.toBeInTheDocument();
    expect(getByText('Unavailable')).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled')
  });

  test('Should not display promo label when product has not promo', async () => {
    const item = { ...mockItem, promo: false }
    render(<ProductCard item={ item } />);

    expect(screen.queryByText('Promo')).not.toBeInTheDocument();
  });
});
