import theme from './assets/theme'
import { Box, ThemeProvider } from '@mui/material'

import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box component='main' className='App'>
        hello world
      </Box>
    </ThemeProvider>
  )
}

export default App
