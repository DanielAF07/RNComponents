import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/appInterfaces';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem}: Props) => {
  const {colors} = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate(menuItem.name as never)}>
      <View style={styles.container}>
        {menuItem.icon && (
          <Icon name={menuItem.icon} size={23} color={colors.primary} />
        )}
        <Text style={{...styles.itemText, color: colors.text}}>
          {menuItem.label}
        </Text>
        <Icon
          name="chevron-forward-outline"
          size={23}
          color={colors.primary}
          style={{marginLeft: 'auto'}}
        />
      </View>
    </TouchableOpacity>
  );
};
export default FlatListMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemText: {
    fontSize: 16,
  },
});
