import React, {createContext, useEffect, useReducer} from 'react';
import {ThemeState, Themes, themeReducer} from './themeReducer';
import {darkTheme, lightTheme} from './themes';
import {useColorScheme} from 'react-native';

interface ThemeContextProps {
  theme: ThemeState;
  colors: ThemeState['colors'];
  setTheme: (theme: Themes) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'light' ? lightTheme : darkTheme,
  );

  // Alternativa al colorScheme
  // useEffect(() => {
  //   AppState.addEventListener('change', status => {
  //     if (status === 'active') {
  //       if (Appearance.getColorScheme() === 'light') {
  //         setTheme(Themes.light);
  //       } else {
  //         setTheme(Themes.dark);
  //       }
  //     }
  //   });
  // }, []);

  // Antes solo funcionaba en iOS
  useEffect(() => {
    setTheme(colorScheme === 'light' ? Themes.light : Themes.dark);
  }, [colorScheme]);

  const setTheme = (newTheme: Themes) => {
    if (newTheme === Themes.light) {
      dispatch({
        type: 'set_theme',
        payload: lightTheme,
      });
    }
    if (newTheme === Themes.dark) {
      dispatch({
        type: 'set_theme',
        payload: darkTheme,
      });
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors: theme.colors,
        setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
