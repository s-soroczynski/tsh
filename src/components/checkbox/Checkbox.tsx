import * as React from 'react';

import {
  Checkbox as MUICheckbox,
} from '@mui/material';

import { CheckboxMarked } from '../icons/CheckboxMarked'
import { CheckboxUnmarked } from '../icons/CheckboxUnmarked'

export interface CheckboxProps {
    name: string;
    checked?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = (props: CheckboxProps) => {
  const { name, checked, onChange } = props;
  return (
    <MUICheckbox
      name={ name }
      checked={ checked }
      onChange={ onChange }
      checkedIcon={ (<CheckboxMarked />) }
      icon={ (<CheckboxUnmarked />) }
    />    
  )
}
 