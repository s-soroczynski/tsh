import { FilterValue } from 'components/header/filters/FiltersState.interface'

export const isFilterFilled = (filterValue: FilterValue): boolean => {
  let isFilled = true;

  if (typeof filterValue === 'string') {
    isFilled = isFilled && !!(filterValue.length);
  } else if (typeof filterValue === 'boolean') {
    isFilled = isFilled && filterValue;
  }

  return isFilled
}