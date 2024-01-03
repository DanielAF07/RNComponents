import {Theme} from '@react-navigation/native';

type ThemeAction = {
  type: 'set_theme';
  payload: ThemeState;
};

export enum Themes {
  light,
  dark,
}

export interface ThemeState extends Theme {
  currentTheme: Themes;
  dividerColor: string;
}

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_theme':
      return action.payload;
    default:
      return state;
  }
};
