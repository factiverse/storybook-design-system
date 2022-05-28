import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    supported: Palette['primary'];
    disputed: Palette['primary'];
  }
  interface PaletteOptions {
    supported: PaletteOptions['primary'];
    disputed: PaletteOptions['primary'];
  }
}

const theme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#f8c609',
      light: '#FFE275',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: '#F72525',
    },
    warning: {
      // MUI default, change if needed
      main: '#ff9800',
    },
    info: {
      // MUI default, change if needed
      main: '#2196f3',
    },
    success: {
      main: '#0CCB58',
    },
    supported: {
      main: '#86c351',
    },
    disputed: {
      main: '#ff8761',
    },
    text: {
      secondary: '#f8c609',
    },
  },
};

export default theme;
