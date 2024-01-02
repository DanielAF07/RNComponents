import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {appStyles} from '../theme/appTheme';

interface Props {
  title: string;
}

const HeaderTitle: FC<Props> = ({title}) => {
  return (
    <View style={{marginTop: 4, marginBottom: 8}}>
      <Text style={appStyles.title}>{title}</Text>
    </View>
  );
};
export default HeaderTitle;
