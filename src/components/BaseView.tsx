import React, {FC, useContext} from 'react';
import {View} from 'react-native';
import {appStyles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/theme/ThemeContext';
interface Props {
  children: JSX.Element | JSX.Element[];
}
const BaseView: FC<Props> = ({children}) => {
  const {top} = useSafeAreaInsets();
  const {colors} = useContext(ThemeContext);
  return (
    <View
      style={{
        ...appStyles.globalMargin,
        marginTop: top + 10,
        backgroundColor: colors.background,
      }}>
      {children}
    </View>
  );
};
export default BaseView;
