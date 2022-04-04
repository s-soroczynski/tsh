import { createTheme } from '@mui/material/styles';

import { CustomColors, CustomBreakpoints } from './custom'
import { ThemeOptions } from './theme.interface'

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: CustomBreakpoints.sm,
      md: 900,
      lg: CustomBreakpoints.lg,
      xl: 1536,
    },
  },
  palette: {
    text: {
      primary: CustomColors.grey5
    },
    ...CustomColors
  },
  typography: {
    fontFamily: "'Nunito', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: CustomColors.grey1
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: CustomColors.grey5,
          }
        },
      },
    },
    MuiButton:{
      styleOverrides: {
        root: {
          "&:disabled": {
            color: CustomColors.white1,
            backgroundColor: CustomColors.grey4,
          }
        },
        outlined: {
          color: CustomColors.blue1,
          backgroundColor: CustomColors.white1,  
          borderColor: CustomColors.blue1,
        },
        contained:{
          color: CustomColors.white1,
          backgroundColor: CustomColors.blue1,
          '&:hover': {
            backgroundColor: CustomColors.blue2,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: CustomColors.blue1,
            },
          }
        },
      }
    },
    MuiFormControlLabel: {
      styleOverrides:{
        label: {
          fontWeight: '600',
        }
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(26, 27, 29, 0.9)',
        },
      },
    },
  }
} as ThemeOptions);