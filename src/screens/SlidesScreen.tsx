import React, {useContext, useEffect, useState} from 'react';

import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import useAnimation from '../hooks/useAnimation';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../context/theme/ThemeContext';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

const SlidesScreen = () => {
  const {colors} = useContext(ThemeContext);
  const navigation = useNavigation();
  const [buttonActive, setButtonActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const opacity = useAnimation(0);

  useEffect(() => {
    if (activeIndex === items.length - 1 && !buttonActive) {
      setButtonActive(true);
      opacity.animate(1, 300);
    }
  }, [activeIndex, buttonActive, opacity]);

  const renderItem = ({item}: {item: Slide}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />
        <Text style={{...styles.title, color: colors.text}}>{item.title}</Text>
        <Text style={{...styles.subtitle, color: colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 50,
      }}>
      <Carousel
        data={items}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => setActiveIndex(index)}
      />

      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeIndex}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          backgroundColor: colors.primary,
        }}
      />
      <Animated.View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          opacity: opacity.value,
        }}>
        <TouchableOpacity
          style={{
            marginBottom: 24,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 20,
            backgroundColor: colors.primary,
            borderRadius: 10,
            padding: 8,
            width: 150,
          }}
          activeOpacity={0.8}
          disabled={!buttonActive}
          onPress={() => navigation.navigate('HomeScreen' as never)}>
          <Text
            style={{
              fontSize: 25,
              color: 'white',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Entrar
          </Text>
          <Icon
            name="chevron-forward-outline"
            color="white"
            size={25}
            style={{
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};
export default SlidesScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
});
