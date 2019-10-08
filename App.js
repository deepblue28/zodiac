import { TabNavigator } from 'react-navigation';

// import screen tabs
import profile from './screens/profile';
import settings from './screens/settings';


var myTabs = TabNavigator ({
  Tab1: {profile: profile},
  Tab2: {settings: settings}

});

export default myTabs;


