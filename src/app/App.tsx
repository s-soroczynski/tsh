import React from 'react';

import { AppRoutes } from 'routing/AppRoutes';

import Box from '@mui/material/Box';


//TODO czy tego nie przeniesc do layoutu
export const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppRoutes />
    </Box>
  )
};
