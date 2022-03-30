import React, { useState }  from 'react';

import {
  TextField,
  InputAdornment,
  Grid,
  FormControlLabel
} from '@mui/material';

import { Search } from '../../../components/Icons/Search'
import { Checkbox } from '../../Checkbox/Checkbox'

import { FiltersState } from './FiltersState.interface'

const defaultFilters: FiltersState = {
  active: false,
  promo: false,
  search: ''
}

export const Filters = () => {
  const [state, setState] = useState<FiltersState>(defaultFilters)


  const handleState = (isCheckbox: boolean) => (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, checked } = event.target
    setState((prevState) => ({ ...prevState, [name]: isCheckbox ? checked : value }))
  }

  return (
    <>
      <Grid
        item
        xs={ 12 }
        lg={ 6 }
      >
        <TextField
          fullWidth
          name="search"
          variant="outlined"
          placeholder="Search"
          value={ state['search'] }
          onChange={ handleState(false) }
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  pt: 1
                }}
              >
                <Search />
              </InputAdornment>
            ),
            sx:{
              height: 48,
            }
          }}
        />
      </Grid>
      <Grid
        item
        container
        spacing={ 2 }
        xs={ 12 }
        lg={ 6 }
        sx={{
          pt: {
            xs: 3,
            lg: 0
          },
          pl: {
            xs: 0,
            lg: 3
          }
        }}
      >
        <Grid item>
          <FormControlLabel
            label="Active"
            sx={{
              fontWeight: '600',
            }}
            control={
              <Checkbox
                name="active"
                checked={ state['active'] }
                onChange={ handleState(true) }
              />
            }
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            label="Promo"
            
            sx={{
              fontWeight: '600',
            }}
            control={
                
              <Checkbox
                name="promo"
                checked={ state['promo'] }
                onChange={ handleState(true) }
              />
            }
          />
        </Grid>
      </Grid>
    </>  
    
  )
}
 