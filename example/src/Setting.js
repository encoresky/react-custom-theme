import React from 'react'
import { ThemeModes, useTheme } from 'react-custom-theme'

const Settings = () => {
  const { setTheme } = useTheme()

  const onPress = () => {
    setTheme(ThemeModes.DARK)
  }

  return (
    <div>
      <button onPress={onPress}>
        <span>Change to dark theme</span>
      </button>
    </div>
  )
}

export default Settings