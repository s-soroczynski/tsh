import React from 'react';

import { isFilterFilled } from './filters';

describe('Filters.test', () => {
  test('isFilterFilled', () => {

    expect(isFilterFilled('mockString')).toBeTruthy()
    expect(isFilterFilled('')).toBeFalsy()
    expect(isFilterFilled(true)).toBeTruthy()
    expect(isFilterFilled(false)).toBeFalsy()
  });
});
