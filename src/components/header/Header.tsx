import React, { memo } from 'react';

import { Grid, Container, Button } from '@mui/material';
import { Logo } from 'components/logo/Logo'
import { Filters } from './filters/Filters'

export const Header = memo(() => {
  const renderButton = () => (
    <Button
      variant="outlined"
      sx={{ minWidth: 88, fontSize: 14, textTransform: 'capitalize', borderRadius: '4px' }}
    >
      Log in
    </Button>
  )

  return (
    <Container
      maxWidth={ false }
      sx={{ backgroundColor: '#fff', pt: 6.5, pb: { xs: 3, lg: 6 }, px: 3, }}
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
            {renderButton()}
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
            {renderButton()}
          </Grid>
        </Grid>
      </Container>
    </Container> 
  )
})
Header.displayName = 'Header'
