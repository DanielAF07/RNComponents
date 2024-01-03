import {MenuItem} from '../interfaces/appInterfaces';
import Animation101Screen from '../screens/Animation101Screen';
import HomeScreen from '../screens/HomeScreen';
import Animation102Screen from '../screens/Animation102Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullRefreshScreen from '../screens/PullRefreshScreen';
import SectionListScreen from '../screens/SectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import SlidesScreen from '../screens/SlidesScreen';
import ThemeScreen from '../screens/ThemeScreen';

export const routesList: MenuItem[] = [
  {
    label: 'Home',
    name: 'HomeScreen',
    hidden: true,
    component: HomeScreen,
  },
  {
    label: 'Animation 101',
    name: 'Animation101Screen',
    icon: 'images',
    component: Animation101Screen,
  },
  {
    label: 'Animation 102',
    name: 'Animation102Screen',
    icon: 'images-outline',
    component: Animation102Screen,
  },
  {
    label: 'Switch',
    name: 'SwitchScreen',
    icon: 'toggle-outline',
    component: SwitchScreen,
  },
  {
    label: 'Alert',
    name: 'AlertScreen',
    icon: 'alert-circle-outline',
    component: AlertScreen,
  },
  {
    label: 'TextInputs',
    name: 'TextInputScreen',
    icon: 'document-text-outline',
    component: TextInputScreen,
  },
  {
    label: 'Pull to refresh',
    name: 'PullRefreshScreen',
    icon: 'refresh-outline',
    component: PullRefreshScreen,
  },
  {
    label: 'Section List',
    name: 'SectionListScreen',
    icon: 'list-outline',
    component: SectionListScreen,
  },
  {
    label: 'Modal',
    name: 'ModalScreen',
    icon: 'copy-outline',
    component: ModalScreen,
  },
  {
    label: 'Infinite Scroll',
    name: 'InfiniteScrollScreen',
    icon: 'download-outline',
    component: InfiniteScrollScreen,
  },
  {
    label: 'Slides',
    name: 'SlidesScreen',
    icon: 'flower-outline',
    component: SlidesScreen,
  },
  {
    label: 'Themes',
    name: 'ThemesScreen',
    icon: 'flask-outline',
    component: ThemeScreen,
  },
];

export const menuItems = routesList.filter(item => !item.hidden);
