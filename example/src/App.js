import React from 'react'
import ThemeProvider from 'react-custom-theme'
import { dark, light } from './Colors'
import Home from './Home'
import Setting from './Setting'

const App = () => {
  return (
    <ThemeProvider darkTheme={dark} lightTheme={light}>
      <Home />
      <Setting />
    </ThemeProvider>
  )
}

export default App
