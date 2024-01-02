import React from 'react';
import {FlatList} from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';
import {menuItems} from '../navigator/RoutesList';
import HeaderTitle from '../components/HeaderTitle';
import BaseView from '../components/BaseView';
import ItemSeparator from '../components/ItemSeparator';

const HomeScreen = () => {
  return (
    <BaseView>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<HeaderTitle title="Menu Options" />}
        ItemSeparatorComponent={ItemSeparator}
      />
    </BaseView>
  );
};
export default HomeScreen;
