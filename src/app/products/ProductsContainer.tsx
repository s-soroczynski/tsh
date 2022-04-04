import React, { useCallback, useMemo } from 'react';
import { useLocation, useHistory } from "react-router-dom";

import { Layout } from 'components/layout/Layout'
import { MainContent } from 'components/mainContent/MainContent'
import { Pagination } from 'components/pagination/Pagination'
import { CircularProgress } from 'components/circularProgress/CircularProgress'
import { Products } from './Products'
import { ProductsEmpty } from './ProductsEmpty'
import { Container, useMediaQuery } from '@mui/material'

import { useFetch } from 'hooks/useFetch'
import { ProductInterface } from './Product.interface'
import { CustomBreakpoints } from 'styles/custom'

export const ProductsContainer = () => {
  const { search } = useLocation();
  const matches = useMediaQuery(`(min-width:${CustomBreakpoints.lg}px)`, { noSsr: true });
  const history = useHistory();
  const params = useMemo(() => new URLSearchParams(search), [search])
  const currentPage = params.get('page') ? Math.abs(Number(params.get('page'))) : 1

  const urlWithParams = useCallback((): string => {
    const productsParams = new URLSearchParams();
    const limitPerPage = matches ? 8 : 4;
    params.forEach((val, key) => {
      productsParams.set(key, val)
    })
    if (!productsParams.has('page')) {
      productsParams.set('page', '1')
    }
    productsParams.set('limit', String(limitPerPage))
    const url = `https://join-tsh-api-staging.herokuapp.com/products?${productsParams.toString()}`;
    return url;
  }, [matches, params])

  const { loading, response, error } = useFetch<ProductInterface>(urlWithParams())

  const updatePage = useCallback((page: number): void => {
    params.set('page', String(page))
    
    history.push({ search: params.toString() })
  }, [history, params])

  if (loading) {
    return (
      <Layout>
        <Container
          maxWidth="sm"
          sx={{
            pt: {
              xs: 5,
              lg: 14
            }
          }}
        >
          <CircularProgress />
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <MainContent>
        { (response && !error)
          ? <>
            <Products items={ response.items } />
            <Pagination
              updatePage={ updatePage }
              activePage={ currentPage }
              totalPages={ response.meta.totalPages }
            />
          </>
          : <ProductsEmpty />
        }
      </MainContent>
    </Layout>
  );
};
