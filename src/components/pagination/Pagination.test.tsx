import React from 'react';

import { render, fireEvent } from 'tests';
import '@testing-library/jest-dom'

import { Pagination, PaginationProps } from './Pagination';

describe('Pagination.test', () => {
  const props: PaginationProps = {
    totalPages: 10,
    activePage: 1,
    updatePage: jest.fn()
  }
  test('Should render Pagination', async () => {
    const { getByText } = render(<Pagination { ...props } />);    

    fireEvent.click(getByText('First'))
    expect(props.updatePage).toHaveBeenCalledWith(1)
    fireEvent.click(getByText('Last'))
    expect(props.updatePage).toHaveBeenCalledWith(10)
    fireEvent.click(getByText('3'))
    expect(props.updatePage).toHaveBeenCalledWith(3)

    expect(getByText('First')).toBeInTheDocument()
    expect(getByText('Last')).toBeInTheDocument()
    //pagination pages
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('8')).toBeInTheDocument()
    expect(getByText('9')).toBeInTheDocument()
    expect(getByText('10')).toBeInTheDocument()
  });

  test('Should render number of pages as is prop totalPages when totalPages is lower or equal 6', async () => {

    const { getByText, rerender } = render(<Pagination
      { ...props }
      totalPages={ 6 }
    />);

    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()

    rerender(<Pagination
      { ...props }
      totalPages={ 3 }
    />)
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
  });
});
