import React, { useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";

import { Grid, useMediaQuery, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Header } from '../../components/Header/Header'
import { MainContent } from '../../components/MainContent/MainContent'
import { Pagination } from '../../components/Pagination/Pagination'
import { Product } from './Product'
import { Products } from './Products'

import { useFetch } from '../../hooks/useFetch'
import { ProductInterface } from './Product.interface'

export const ProductsContainer = () => {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search)
  const currentPage = params.get('page') ? Math.abs(Number(params.get('page'))) : 1 
  const { loading, response, error } = useFetch<ProductInterface>('https://join-tsh-api-staging.herokuapp.com/products?page=1&limit=8')

  const updatePage = (page: number): void => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.set('page', String(page))
    
    history.push({ search: searchParams.toString() })
  }

  return (
    <>
      <Header />
      <MainContent>
        { response
          ? <>
            <Products items={ response.items } />
            <Pagination
              updatePage={ updatePage }
              activePage={ currentPage }
              totalPages={ response.meta.totalPages }
            />
          </>
          : null
        }
      </MainContent>
    </>
  );
};
