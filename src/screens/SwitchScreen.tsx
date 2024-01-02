import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import BaseView from '../components/BaseView';
const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <BaseView>
      <HeaderTitle title="Switch" />
      <View style={localStyles.switchRow}>
        <Text style={localStyles.switchText}>IsActive</Text>
        <CustomSwitch
          value={state.isActive}
          onValueChange={value => setState({...state, isActive: value})}
        />
      </View>
      <View style={localStyles.switchRow}>
        <Text style={localStyles.switchText}>IsHungry</Text>
        <CustomSwitch
          value={state.isHungry}
          onValueChange={value => setState({...state, isHungry: value})}
        />
      </View>
      <View style={localStyles.switchRow}>
        <Text style={localStyles.switchText}>IsHappy</Text>
        <CustomSwitch
          value={state.isHappy}
          onValueChange={value => setState({...state, isHappy: value})}
        />
      </View>
      <Text style={localStyles.switchText}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </BaseView>
  );
};
export default SwitchScreen;

const localStyles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
