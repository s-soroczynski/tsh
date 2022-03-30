import * as React from 'react';

import { Grid, Container } from '@mui/material';

import { Avatar } from '../Avatar/Avatar';
import { Logo } from '../Logo/Logo'
import { Filters } from './Filters/Filters'

export const Header = () => {
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
            <Avatar
              alt="duck"
              src="https://cdn.betterttv.net/emote/5f1ec3f6cf6d2144653d5d63/3x"
            />
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
            <Avatar
              alt="monkas"
              src="https://cdn.betterttv.net/emote/56e9f494fff3cc5c35e5287e/3x"
            />
          </Grid>
        </Grid>
      </Container>
    </Container> 
  )
}
