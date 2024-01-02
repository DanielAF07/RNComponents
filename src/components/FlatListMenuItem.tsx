import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/appInterfaces';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate(menuItem.name as never)}>
      <View style={styles.container}>
        {menuItem.icon && <Icon name={menuItem.icon} size={23} color="gray" />}
        <Text style={styles.itemText}>{menuItem.label}</Text>
        <Icon
          name="chevron-forward-outline"
          size={23}
          color="gray"
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
    color: 'black',
  },
});
