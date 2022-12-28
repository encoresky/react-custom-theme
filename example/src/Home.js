import React from 'react'
import { useTheme } from '@encoreskytech/react-custom-theme'

const Home = () => {
  const { theme, isDarkTheme } = useTheme()

  const backgroundStyle = {
    backgroundColor: theme.background,
    flex: 1
  }

  const textStyle = {
    color: isDarkTheme ? '#fff' : '#000'
  }

  return (
    <div style={backgroundStyle}>
      <span style={textStyle}>React Custom Theme</span>
    </div>
  )
}

export default Home