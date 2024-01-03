import {ThemeState, Themes} from './themeReducer';

export const lightTheme: ThemeState = {
  currentTheme: Themes.light,
  dark: false,
  dividerColor: 'rgba(0,0,0,0.3)',
  colors: {
    primary: '#7D6BC0',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'rgba(0,0,0,0.3)',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: Themes.dark,
  dark: true,
  dividerColor: 'rgba(255,255,255,0.3)',
  colors: {
    primary: '#7D6BC0',
    background: '#0C0E18',
    card: 'rgba(255,255,255,0.7)',
    text: 'white',
    border: 'rgba(255,255,255,0.3)',
    notification: 'teal',
  },
};
