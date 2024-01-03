import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {appStyles} from '../theme/appTheme';
import {useTheme} from '@react-navigation/native';

interface Props {
  title: string;
}

const HeaderTitle: FC<Props> = ({title}) => {
  const {colors} = useTheme();
  return (
    <View style={{marginTop: 4, marginBottom: 8}}>
      <Text style={{...appStyles.title, color: colors.text}}>{title}</Text>
    </View>
  );
};
export default HeaderTitle;
