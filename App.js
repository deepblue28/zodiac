import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


// import screen tabs
import Profile from './screens/profile';
import Settings from './screens/settings';
import Home from './screens/home';

// tab settings
const tabNavigator = createBottomTabNavigator ({
  Home: Home,
  Signs: Profile,
  Settings: Settings

});

// export to other pages
export default createAppContainer(tabNavigator);


