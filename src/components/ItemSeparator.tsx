import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';
const ItemSeparator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: theme.dividerColor,
        marginVertical: 8,
      }}
    />
  );
};
export default ItemSeparator;
