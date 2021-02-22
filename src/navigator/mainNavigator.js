import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings208365Navigator from '../features/Settings208365/navigator';
import SignIn2208363Navigator from '../features/SignIn2208363/navigator';
import Settings208347Navigator from '../features/Settings208347/navigator';
import Settings208309Navigator from '../features/Settings208309/navigator';
import Settings208290Navigator from '../features/Settings208290/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings208365: { screen: Settings208365Navigator },
SignIn2208363: { screen: SignIn2208363Navigator },
Settings208347: { screen: Settings208347Navigator },
Settings208309: { screen: Settings208309Navigator },
Settings208290: { screen: Settings208290Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
