import * as React from 'react';

import { Box } from '@mui/material';
import { default as CircularProgressMUI, circularProgressClasses } from '@mui/material/CircularProgress';

export const CircularProgress = () => {
  return (
    <Box sx={{ position: 'relative', width: 40, mx: 'auto' }}>
      <CircularProgressMUI
        variant="determinate"
        sx={{
          color: (theme: any) =>
            theme.palette.grey2
        }}
        size={ 40 }
        thickness={ 4 }
        value={ 100 }
      />
      <CircularProgressMUI
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme: any) => theme.palette.blue1,
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={ 40 }
        thickness={ 4 }
      />
    </Box>
  );
}