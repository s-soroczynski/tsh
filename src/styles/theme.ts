import { createTheme } from '@mui/material/styles';
import { customColors } from './customColors'
import { ThemeOptions } from './theme.interface'

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 900,
      lg: 1224,
      xl: 1536,
    },
  },
  palette: {
    text: {
      primary: customColors.grey5
    },
    ...customColors
  },
  typography: {
    fontFamily: "'Nunito', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F0F1F5"
        }
      }
    },
    MuiButton:{
      styleOverrides: {
        root: {
          "&:disabled": {
            color: '#fff',
            backgroundColor: '#9194A5',
          }
        },
        contained:{
          color: '#fff',
          backgroundColor: '#4460F7',
          '&:hover': {
            backgroundColor: '#2140E8',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: '#4460F7',
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
    }
  }
} as ThemeOptions);