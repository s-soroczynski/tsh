import React from 'react';

import {
  Grid,
  Typography,
} from '@mui/material';
import { EmptyItems } from 'components/icons/EmptyItems'

export const ProductsEmpty = () => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        height: 344,
        mt: { xs: 3, lg: 7 },
        
      }}
    >
      <Grid
        item
        container
        xs={ 12 }
        lg={ 6 }
        direction="column"
        justifyContent="center"
        sx={{ bgcolor: '#fff', height: 344, maxWidth: 600, borderRadius: '8px' }}
      >
        <Grid
          item
          container
          justifyContent="center"
          sx={{ pb: 2.75 }}
        >
          <EmptyItems data-testid="emptyItemsIcon" />
        </Grid>
        <Grid
          item
        >
          <Typography
            component="h3"
            align="center"
            sx={{ fontSize: 18, fontWeight: '600' }}
          >Ooops… Its empty here</Typography>
        </Grid>
        <Grid
          item
        >
          <Typography
            paragraph
            align="center"
            sx={{ fontWeight: 600, color: (theme: any) => theme.palette.grey4 }}
          >There are no products on the list</Typography>
        </Grid>
      </Grid>
    </Grid>
    
  );
};
