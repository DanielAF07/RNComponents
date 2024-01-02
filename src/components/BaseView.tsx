import React, {FC} from 'react';
import {View} from 'react-native';
import {appStyles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
interface Props {
  children: JSX.Element | JSX.Element[];
}
const BaseView: FC<Props> = ({children}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        ...appStyles.globalMargin,
        marginTop: top + 10,
      }}>
      {children}
    </View>
  );
};
export default BaseView;
