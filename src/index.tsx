import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import theme from './theme/index.ts'
import reportWebVitals from './reportWebVitals'
import './assets/css/reset.css'

import Buildings from './buildings/index.tsx'

import { BuildingsContextProvider } from './state/buildings.tsx'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BuildingsContextProvider>
      <ThemeProvider theme={theme.main}>
        <Buildings />
      </ThemeProvider>
    </BuildingsContextProvider>
  </React.StrictMode>
);

reportWebVitals();
