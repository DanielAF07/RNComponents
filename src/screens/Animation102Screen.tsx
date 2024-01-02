import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Animation102Screen = () => {
  const {top} = useSafeAreaInsets();
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: false,
        }, // Back to zero
      ).start();
    },
  });
  return (
    <View style={{flex: 1, marginTop: top, marginHorizontal: 12}}>
      <HeaderTitle title="Animation 102" />
      <View style={styles.container}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), styles.box]}
        />
      </View>
    </View>
  );
};
export default Animation102Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#61dafb',
    width: 150,
    height: 150,
    borderRadius: 8,
  },
});
