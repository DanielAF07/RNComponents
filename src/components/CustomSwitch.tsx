import React, {FC, useState} from 'react';
import {Switch, Platform} from 'react-native';

interface Props {
  value?: boolean;
  onValueChange: (value: boolean) => void;
}

const CustomSwitch: FC<Props> = ({value, onValueChange}) => {
  const [isEnabled, setIsEnabled] = useState(value);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onValueChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#5856D6'}}
      thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
export default CustomSwitch;
