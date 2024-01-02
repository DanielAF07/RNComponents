import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import BaseView from '../components/BaseView';
import {ScrollView} from 'react-native-gesture-handler';
import {Platform, RefreshControl} from 'react-native';
const PullRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    console.log('onRefresh');
    setRefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
    }, 2500);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={Platform.OS === 'ios' ? 55 : 0}
        />
      }>
      <BaseView>
        <HeaderTitle title="Pull to refresh" />
      </BaseView>
    </ScrollView>
  );
};
export default PullRefreshScreen;
