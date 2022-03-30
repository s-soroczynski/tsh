import React, { useEffect, useState } from 'react';

import { Grid, Container } from '@mui/material';
import { Theme } from '../../styles/theme.interface'

interface PaginationProps {
    totalPages: number;
    activePage: number;
    updatePage: (number: number) => void
}

type PaginationItems = (string|number)[];

export const Pagination = (props: PaginationProps) => {
  const [paginationItems, setPaginationItems] = useState<PaginationItems>([])
  const { totalPages, activePage, updatePage } = props;

  const generateFirstThreeItems = (activePage: number, totalPages: number): number[] => {
    let array: number[] = [];
    const isActiveNumberFourthFromTheEnd = (totalPages - activePage) === 3
    const isActiveNumberOneOfThreeLastItems = (totalPages - activePage) < 3
    const isActivePageOneOfThreeFirstDigits = (activePage === 0 || activePage === 1 || activePage === 2);

    if (isActivePageOneOfThreeFirstDigits) {
      array = [1, 2, 3]
    } else if (isActiveNumberFourthFromTheEnd) {
      array = [activePage - 2, activePage - 1, activePage]
    } else if (isActiveNumberOneOfThreeLastItems) {
      array = [totalPages - 5, totalPages - 4, totalPages - 3]
    } else {    
      array = [activePage - 1, activePage, activePage + 1]
    }
    
    return array
  }

  const createPaginationItem = (activePage: number, totalPages: number, ): void => {
    let paginationValues: PaginationItems = [];
    
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        paginationValues.push(i)
      }
    } else {
      const lastThreeItems = [(totalPages - 2), (totalPages - 1), totalPages];
      const firstThreeItems = generateFirstThreeItems(activePage, totalPages);
      paginationValues = [...firstThreeItems, '...', ...lastThreeItems]
    }
    setPaginationItems(paginationValues)
  }

  const renderPagination = () => {
    const getProps = (value: (string | number)) =>
      typeof value === 'number'
        ? {
          onClick: () => updatePage(value),
          sx: {
            color: (theme: any) => activePage === value ? theme.palette.blue1 : '',
            cursor: 'pointer'
          }
        }
        : {}

    return paginationItems.map((value, i) =>  (
      <Grid
        key={ i }
        item
        { ...getProps(value) }
      >
        {value}
      </Grid>
    ))
  }

  

  useEffect(() => {
    createPaginationItem(activePage, totalPages);
  }, [activePage, totalPages])

  return (
    <Container
      maxWidth="sm"
      sx={{ width: 290 }}
      disableGutters
    >
      <Grid
        container
        justifyContent="space-between"
      >
        <Grid
          item
          xs='auto'
          justifyContent="flex-start"
          container
          onClick={ () => updatePage(1) }
          sx={{
            color: (theme: any) => activePage === 1 ? theme.palette.grey4 : '',
            cursor: 'pointer'
          }}
        >
          First
        </Grid>
        
        <Grid
          item
          container
          justifyContent="space-around"
          xs={ 7 }
        >
          { renderPagination() }
        </Grid>   
        <Grid
          item
          xs='auto'
          container
          justifyContent="flex-end"
          onClick={ () => updatePage(totalPages) }
          sx={{
            color: (theme: any) => activePage === totalPages ? theme.palette.grey4 : '',
            cursor: 'pointer'
          }}
        >
          Last
        </Grid>   
      </Grid>
    </Container>
  );
};
