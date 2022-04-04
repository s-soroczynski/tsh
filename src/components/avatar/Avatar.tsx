import * as React from 'react';

import { Avatar as AvatarMUI } from '@mui/material';

export interface AvatarProps {
    src: string;
    alt: string;
}

export const Avatar = (props: AvatarProps) => {
  const { src, alt } = props;
  return (
    <AvatarMUI
      sx={{
        width: 48,
        height: 48,
      }}
      src={ src }
      alt={ alt }
    />
  )
}
