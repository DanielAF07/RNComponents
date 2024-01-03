import React, {FC, useContext, useState} from 'react';
import {Switch, Platform} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  value?: boolean;
  onValueChange: (value: boolean) => void;
}

const CustomSwitch: FC<Props> = ({value, onValueChange}) => {
  const {colors} = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(value);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onValueChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: colors.border, true: colors.primary}}
      thumbColor={Platform.OS === 'android' ? colors.primary : ''}
      ios_backgroundColor={colors.border}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
export default CustomSwitch;
