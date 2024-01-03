import React, {useContext, useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {ActivityIndicator, FlatList, View} from 'react-native';
import FadeInImage from '../components/FadeInImage';
import {ThemeContext} from '../context/theme/ThemeContext';
const InfiniteScrollScreen = () => {
  const {colors} = useContext(ThemeContext);
  const [imageOffset] = useState(Math.ceil(Math.random() * 520));
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item + imageOffset}/1000/1000`}
        duration={300}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={
          <View style={{marginTop: 40, marginHorizontal: 12}}>
            <HeaderTitle title={'Infinite Scroll'} />
          </View>
        }
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator
              size={30}
              color={colors.border}
              style={{height: 100}}
            />
          </View>
        }
      />
    </View>
  );
};
export default InfiniteScrollScreen;
