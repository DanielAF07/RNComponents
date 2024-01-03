import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routesList} from './RoutesList';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/theme/ThemeContext';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {routesList.map(item => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
