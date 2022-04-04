import React, { memo } from 'react';

import { Grid, Container, Button } from '@mui/material';
import { Avatar } from 'components/avatar/Avatar';
import { Logo } from 'components/logo/Logo'
import { Filters } from './filters/Filters'

export const Header = memo(() => {
  return (
    <Container
      maxWidth={ false }
      sx={{ backgroundColor: '#fff', pt: 6.5, pb: 3, px: 3, }}
    >
      <Container
        maxWidth="lg"
        disableGutters
      >
        <Grid
          container
          display={{ xs: 'flex', lg: 'none' }}
        >
          <Grid
            item
            xs={ 6 }
          >
            <Logo />
          </Grid>
          <Grid
            item
            container
            justifyContent="flex-end"
            xs={ 6 }
          >
            <Button
              variant="outlined"
              sx={{ minWidth: 88, fontSize: 14 }}
            >Log in</Button>
          </Grid>
          <Grid
            item
            xs={ 12 }
            sx={{
              pt: 3
            }}
          >
            <Filters /> 
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          columns={ 18 }
          justifyContent="space-between"
          display={{ xs: 'none', lg: 'flex' }}
        >
          <Grid
            item
            lg={ 2 }
          >
            <Logo />
          </Grid>
          <Grid
            lg={ 8 }
            item
            container
            alignItems="center"
          >
            <Filters />
          </Grid>
          <Grid
            item
            container
            justifyContent="flex-end"
            lg={ 1 }
          >
            <Button
              variant="outlined"
              sx={{ minWidth: 88, fontSize: 14 }}
            >Log in</Button>
          </Grid>
        </Grid>
      </Container>
    </Container> 
  )
})
Header.displayName = 'Header'
