import React from 'react';

import { Grid, useMediaQuery } from '@mui/material';
import { ProductCard } from './ProductCard'

import { useTheme } from '@mui/material/styles';
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
          xs: 5,
          lg: 7
        }
      }}
    >
      {items.map((item)=> {
        return <ProductCard
          item={ item }
          key={ item['id'] }
        />
      })}
    </Grid>
  );
};
