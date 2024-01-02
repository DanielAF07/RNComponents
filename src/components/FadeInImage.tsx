import React, {useState} from 'react';

import {
  View,
  Animated,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import useAnimation from '../hooks/useAnimation';

interface Props {
  uri: string;
  duration?: number;
  style?: StyleProp<ImageStyle>;
}
const FadeInImage = ({uri, duration = 300, style}: Props) => {
  const [loading, setLoading] = useState(true);
  const opacity = useAnimation(0);

  const onLoadEnd = () => {
    setLoading(false);
    opacity.animate(1, duration);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {loading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          size={30}
          color={'blue'}
        />
      )}
      <Animated.Image
        onLoadEnd={onLoadEnd}
        source={{uri}}
        style={{
          ...(style as any),
          // width: '100%',
          // height: 400,
          opacity: opacity.value,
        }}
      />
    </View>
  );
};
export default FadeInImage;
