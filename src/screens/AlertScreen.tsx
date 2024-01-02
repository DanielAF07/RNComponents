import React from 'react';
import {Button, Alert} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import BaseView from '../components/BaseView';

const AlertScreen = () => {
  const showAlert = () =>
    Alert.alert(
      'Hi there!',
      'This is an alert',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      },
    );

  const showPrompt = () =>
    Alert.prompt(
      'Hi there!',
      'This is an alert',
      (value: string) => console.log('info', value),
      'plain-text',
      'Hi',
      'default',
    );
  return (
    <BaseView>
      <HeaderTitle title="Alert" />
      <Button title="Show Alert" onPress={showAlert} />
      <Button title="Show Prompt" onPress={showPrompt} />
    </BaseView>
  );
};
export default AlertScreen;
