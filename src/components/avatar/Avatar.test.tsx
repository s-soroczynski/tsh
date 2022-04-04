import React from 'react';

import { render, screen } from 'tests';
import '@testing-library/jest-dom'

import { Avatar, AvatarProps } from './Avatar';

describe('Avatar.test', () => {
  test('Should match props', async () => {
    const props: AvatarProps = {
      src: "srcMock",
      alt: "altMock"
    }
    render(<Avatar { ...props } />);
    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('src', props.src)
    expect(img).toHaveAttribute('alt', props.alt)
  });
});
