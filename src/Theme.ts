import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF452B',
    },
  },
  typography: {
    fontFamily: [
      'Nunito', 
      'sans-serif'
    ].join('')
  }
});

export default theme;
