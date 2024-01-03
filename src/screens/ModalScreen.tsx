import React, {useContext, useState} from 'react';
import BaseView from '../components/BaseView';
import HeaderTitle from '../components/HeaderTitle';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import ItemSeparator from '../components/ItemSeparator';
import {ThemeContext} from '../context/theme/ThemeContext';
const ModalScreen = () => {
  const {colors} = useContext(ThemeContext);
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
          <View
            style={{
              ...styles.container,
              backgroundColor: colors.card,
            }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Modal Title
            </Text>
            <Text>Modal Body</Text>
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
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
});
