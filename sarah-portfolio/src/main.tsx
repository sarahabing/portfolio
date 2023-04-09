import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './assets/theme'
import { ThemeProvider } from '@mui/material/styles'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
