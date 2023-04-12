import Interface from './components/interface/interface'
import { StyledContainer } from './App.style'

import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#bacac9', // light grey background
      alternate: '#9DB4B2',
    },
    secondary: {
      main: '#404648', // border around image for dark background
      alternate: '#404040',
    },
    muted: {
      main: '#bccccc',
    },
    white: {
      main: '#FEFEFE',
      alternate: '#E2E9E8',
    },
    background: {
      default: '#262626', // Darkest
      alternate: '#44444c',
    },
  },
  typography: {
    h1: {
      fontSize: 48,
      fontWeight: 700,
      fontFamily: 'Edu QLD Beginner',
    },
    h2: {
      fontSize: 40,
      fontWeight: 600,
    },
    h3: {
      fontSize: 32,
      fontWeight: 500,
    },
    h4: {
      fontSize: 24,
      fontWeight: 500,
    },
    h5: {
      fontSize: 16,
      fontWeight: 600,
    },
    body1: {
      fontSize: 12,
      fontWeight: 400,
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer maxWidth='false' disableGutters>
        <Interface />
      </StyledContainer>
    </ThemeProvider>
  )
}

export default App
