# React  Custom Theme
## Custom theme system for react 

> Made with create-react-library

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

React  custom theme is the library which enable your app to support multiple themes.
## Supported platforms
- Web

## Installation

```sh
npm install react-custom-theme
```
The solution is implemented in JavaScript so no  module linking is required

## How to use

Create theme object for light and dark theme ```Colors.js```
```ts
export const light = {
  mode: 'light',
  primary: '#4e9cdb',
  secondary: '#4e9cdb',
  background: '#ffffff',
};

export const dark = {
  mode: 'dark',
  primary: '#0a5897',
  secondary: '#0a5897',
  background: '#000000',
};

```

Wrap your app within ThemeProvider. ThemeProvider require light and dark theme objects as props
```tsx
import React from 'react';
import ThemeProvider from 'react-custom-theme';
import {dark, light} from './Colors';
import Home from './Home';

const App = () => {
  return (
    <ThemeProvider darkTheme={dark} lightTheme={light}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
```

Import  ```useTheme``` hook and use **theme** and **isDarkTheme** variables to set your colors.
```tsx
-- other imports ---

import {useTheme} from 'react-custom-theme';

const Home = () => {
    const {theme, isDarkTheme} = useTheme();

    const backgroundStyle = {
        backgroundColor: theme.background,
        flex: 1,
    };

  const textStyle = {
    color: isDarkTheme ? '#fff' : '#000',
  };
  
  return (
      <div style={backgroundStyle}>
        <span style={textStyle}>React  Custom Theme</span>
      </div>
}
```

To change theme use **setTheme** method from **useTheme** hook
```tsx
-- other imports ---

import {ThemeModes, useTheme} from 'react-custom-theme';

const Settings () => {
    const {themeMode, setTheme} = useTheme();
    
    const onPress = () => {
        setTheme(ThemeModes.DARK);
    }
    
    return (
        <div>
            <button onPress={onPress}>
                <span>Change to dark theme</span>
            </button>
        </div>
}
```

## API
#### ThemeProvider
Property | Type | Description
--- | --- | --- |
darkTheme | Theme | This object contain colors values for dark theme
lightTheme | Theme | This object contain colors values for light theme

#### useTheme
```ts
const {theme, isDarkTheme, themeMode, setTheme} = useTheme();
```
Property | Type | Description
--- | --- | --- |
theme | Theme | This object contain colors values for current selected theme
isDarkTheme | boolean | true if selected theme is dark else false
themeMode | ThemeModes.LIGHT<br/>ThemeModes.DARK<br/>ThemeModes.DEVICE_THEME | Mode to apply theme
setTheme | function | set new theme, it takes new theme mode as parameter

#### Theme
- mode -  'light' or 'dark',
- \[colorName]: [colorValue]

#### ThemeModes
- LIGHT
- DARK
- DEVICE_THEME

## Authors
- [Vishal Chaturvedi](https://github.com/vishalchaturvediencoresky)

## Credits
- [Balveer Dhanoriya](https://github.com/estbalveer)

## Contributing
Pull requests are most welcome! Don't forget to add a title and a description that explain the issue you're trying to solve and your suggested solution. Screenshots and gifs are VERY helpful. Please do NOT format the files as we are trying to keep a unified syntax and the reviewing process fast and simple.

## License

MIT © [vishalchaturvediencoresky](https://github.com/vishalchaturvediencoresky)
