import React from 'react';

import { useMediaQuery, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface MainContentProps {
    children: React.ReactNode
}

export const MainContent = (props: MainContentProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Container
      component="main"
      sx={{ pt: { xs: 3, lg: 7 }, pb: { xs: 8.5, lg: 7 }, px: { xs: 3, lg: 0 } }}
      maxWidth={ matches ? 'lg' : 'sm' }
      disableGutters
    >
      {props.children}
    </Container>
  );
};
