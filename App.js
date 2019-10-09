import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


// import screen tabs
import profile from './screens/profile';
import settings from './screens/settings';
import home from './screens/home';


const tabNavigator = createBottomTabNavigator ({
  home: home,
  profile: profile,
  settings: settings

});

export default createAppContainer(tabNavigator);


