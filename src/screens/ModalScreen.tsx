import React, {useState} from 'react';
import BaseView from '../components/BaseView';
import HeaderTitle from '../components/HeaderTitle';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import ItemSeparator from '../components/ItemSeparator';
const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <BaseView>
      <HeaderTitle title="Modal Screen" />
      <Button
        title="Open modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />
      <Modal animationType="fade" visible={isVisible} transparent>
        {/* Background */}
        <View style={styles.background}>
          {/* Content */}
          <View style={styles.container}>
            <HeaderTitle title="Modal" />
            <Text>Body modal</Text>
            <View style={{marginTop: 40}} />
            <ItemSeparator />
            <Button
              title="Close modal"
              onPress={() => {
                setIsVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </BaseView>
  );
};
export default ModalScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
  },
  container: {
    paddingVertical: 16,
    backgroundColor: 'white',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
});
