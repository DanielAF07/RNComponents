import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {SectionList, Text, View} from 'react-native';
import {appStyles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ItemSeparator from '../components/ItemSeparator';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

const SectionListScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          ...appStyles.globalMargin,
          flex: 1,
          marginTop: top,
        }}>
        <SectionList
          sections={casas}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <Text style={{fontSize: 24, marginVertical: 8}}>{item}</Text>
          )}
          stickySectionHeadersEnabled
          ListHeaderComponent={<HeaderTitle title="Section List" />}
          renderSectionHeader={({section}) => (
            <View style={{backgroundColor: 'white'}}>
              <HeaderTitle title={section.casa} />
            </View>
          )}
          ListFooterComponent={
            <View>
              <HeaderTitle title={'Total de casas: ' + casas.length} />
              <View style={{height: 50}} />
            </View>
          }
          renderSectionFooter={({section}) => (
            <Text>{'Total: ' + section.data.length}</Text>
          )}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export default SectionListScreen;
