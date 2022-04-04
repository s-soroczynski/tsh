import React, { useState, useEffect, useCallback, useMemo, useRef }  from 'react';
import { useLocation, useHistory } from "react-router-dom";

import {
  TextField,
  InputAdornment,
  Grid,
  FormControlLabel
} from '@mui/material';
import { Search } from 'components/icons/Search'
import { Checkbox } from 'components/checkbox/Checkbox'

import { isFilterFilled } from 'utils/filters'
import { FiltersState } from './FiltersState.interface'

const defaultFilters: FiltersState = {
  active: false,
  promo: false,
  search: ''
}

export const Filters = () => {
  const { search } = useLocation();
  const history = useHistory();
  let timerRef = useRef<null | ReturnType<typeof setTimeout>>(null);
  const params = useMemo(() => new URLSearchParams(search), [search])
  const [state, setState] = useState<FiltersState>(defaultFilters)

  const handleFilterToUrl = useCallback((filter: FiltersState, params: URLSearchParams) => {
    params.set('page', '1')
    for (const key in filter) {
      if (isFilterFilled(filter[key])) {
        params.set(key, String(filter[key]))
        history.push({
          search: params.toString()
        })
      } else {
        if (params.has(key)) {
          params.delete(key)
          history.push({
            search: params.toString()
          })
        }
      }
    }
  }, [history])

  const handleSearchState = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    clearTimeout(timerRef.current as NodeJS.Timeout)
    const { name, value } = event.target
    const filter = { [name]: value }

    setState((prevState) => ({ ...prevState, ...filter  }))
    timerRef.current = setTimeout(() => {
      handleFilterToUrl(filter, params)
    }, 350) as NodeJS.Timeout
  }, [handleFilterToUrl, params])

  const handleCheckboxState = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = event.target
    const filter = { [name]: checked }

    setState((prevState) => ({ ...prevState, ...filter  }))
    handleFilterToUrl(filter, params)
  }, [handleFilterToUrl, params])
  
  const saveFiltersFromUrlToState = useCallback((params): void => {
    let filters: FiltersState = {}
    for (const [key, value] of params) {
      if (value !== defaultFilters[key]) {
        filters[key] = value
      }
    }
    if (Object.keys(filters).length > 0) {
      setState({ ...defaultFilters, ...filters })
    }
  }, [])

  useEffect(() => {
    saveFiltersFromUrlToState(params)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          onChange={ handleSearchState }
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
              fontWeight: "600",
              borderRadius: '8px'
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
                checked={ !!(state['active']) }
                onChange={ handleCheckboxState }
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
                checked={ !!(state['promo']) }
                onChange={ handleCheckboxState }
              />
            }
          />
        </Grid>
      </Grid>
    </>  
    
  )
}
 