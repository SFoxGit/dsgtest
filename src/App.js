import Header from './components/header/header'
import Interface from './components/interface'
import { StyledContainer } from './App.style'
import Container from '@mui/material/Container'

import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0074E1',
    },
    secondary: {
      main: '#f79e02',
    },
    background: {
      default: '#10E7DC',
    },
  },
  typography: {
    h1: {
      fontSize: 60,
      fontWeight: 600,
    },
    h2: {
      fontSize: 48,
      fontWeight: 500,
    },
    h3: {
      fontSize: 40,
      fontWeight: 500,
    },
    h4: {
      fontSize: 32,
      fontWeight: 500,
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer maxWidth='false'>
        <Header />
        <Container maxWidth='lg'>
          <Interface />
        </Container>
      </StyledContainer>
    </ThemeProvider>
  )
}

export default App
