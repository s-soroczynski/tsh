import React from 'react';

import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Product } from './Product'

import { ProductInterface } from './Product.interface'
interface ProductsProps {
    items: ProductInterface[]
}

export const Products = (props: ProductsProps) => {
  const { items } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const conditionalProps = matches ?
    {
      container: true,
      spacing: 3
    }   
    : {}


  return (
    <Grid
      { ...conditionalProps }
      sx={{
        pb: {
          sm: 5,
          lg: 7
        }
      }}
    >
      {items.map((item)=> {
        return <Product
          item={ item }
          key={ item['id'] }
        />
      })}
    </Grid>
  );
};
