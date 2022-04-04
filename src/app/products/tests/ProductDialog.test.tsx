import React from 'react';

import { render, screen, fireEvent } from 'tests';
import '@testing-library/jest-dom'

import { ProductDialog, ProductDialogProps } from '../ProductDialog';

describe('ProductDialog', () => {
  test('Should match product dialog info', async () => {
    const props: ProductDialogProps = {
      open: true,
      description: "DescriptionMock",
      image: "mockSrc",
      name: "NameMock",
      onClose: jest.fn()
    }
    const { getByText } = render(<ProductDialog { ...props } />);
    const img = screen.getByTestId('cardMedia')
    const closeIcon = screen.getByRole('button')

    fireEvent.click(closeIcon)
    expect(props.onClose).toHaveBeenCalled()
    expect(img).toHaveAttribute('src', props.image)
    expect(img).toHaveAttribute('alt', props.name)
    expect(img).toBeTruthy()
    expect(getByText('NameMock')).toBeInTheDocument();
    expect(getByText('DescriptionMock')).toBeInTheDocument();
  });
});
