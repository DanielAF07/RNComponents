import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import useAnimation from '../hooks/useAnimation';
import HeaderTitle from '../components/HeaderTitle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Animation101Screen = () => {
  const {top} = useSafeAreaInsets();
  const opacity = useAnimation(0);
  const yPos = useAnimation(-300);

  const fadeIn = () => {
    opacity.animate(1, 300);
    yPos.animateWithBounce(0, 1000);
  };

  const fadeOut = () => {
    opacity.animate(0, 300);
    yPos.animate(-300, 1000);
  };

  return (
    <View style={{flex: 1, marginTop: top, marginHorizontal: 12}}>
      <HeaderTitle title="Animation 101" />
      <View style={styles.container}>
        <Animated.View
          style={{
            ...styles.purpleBox,
            opacity: opacity.value,
            transform: [{translateY: yPos.value}],
          }}
        />
        <Button title="FadeIn" onPress={fadeIn} />
        <Button title="FadeOut" onPress={fadeOut} />
      </View>
    </View>
  );
};
export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
    borderRadius: 8,
  },
});
