import React, {useContext} from 'react';

import {View, Text} from 'react-native';
import BaseView from '../components/BaseView';
import HeaderTitle from '../components/HeaderTitle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/theme/ThemeContext';
import {Themes} from '../context/theme/themeReducer';
const ThemeScreen = () => {
  const {setTheme, colors} = useContext(ThemeContext);
  return (
    <BaseView>
      <HeaderTitle title="Themes" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            width: 150,
            height: 50,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setTheme(Themes.light)}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            width: 150,
            height: 50,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setTheme(Themes.dark)}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </BaseView>
  );
};
export default ThemeScreen;
