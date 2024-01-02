import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

const useAnimation = (initValue: number) => {
  const value = useRef(new Animated.Value(initValue)).current;

  const animate = (toValue: number, duration: number) => {
    Animated.timing(value, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const animateWithBounce = (toValue: number, duration: number) => {
    Animated.timing(value, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  return {
    value,
    animate,
    animateWithBounce,
  };
};
export default useAnimation;
