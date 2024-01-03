import React, {useContext, useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import BaseView from '../components/BaseView';
import {ScrollView} from 'react-native-gesture-handler';
import {Platform, RefreshControl} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';
const PullRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {colors} = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2500);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={Platform.OS === 'ios' ? 59 : 0}
          tintColor={colors.border}
        />
      }>
      <BaseView>
        <HeaderTitle title="Pull to refresh" />
      </BaseView>
    </ScrollView>
  );
};
export default PullRefreshScreen;
