import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    background: { default: '#fff' },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    background: { default: '#121212' },
  },
});

export const compactTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1565c0' },
    background: { default: '#f5f5f5' },
  },
  typography: {
    fontSize: 12,
  },
  spacing: 4, // tighter spacing
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '4px 10px',
          fontSize: '0.75rem',
        },
      },
    },
  },
});

export const spaciousTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#4caf50' },
    background: { default: '#fafafa' },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontSize: 16,
  },
  spacing: 10, // extra spacious
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '2rem',
        },
      },
    },
  },
});

export const playfulTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#e91e63' },
    secondary: { main: '#ff9800' },
    background: { default: '#fff3e0' },
  },
  typography: {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontSize: 14,
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
  },
});
