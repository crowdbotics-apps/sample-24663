import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen126208683Navigator from '../features/BlankScreen126208683/navigator';
import Settings208536Navigator from '../features/Settings208536/navigator';
import Settings208517Navigator from '../features/Settings208517/navigator';
import Settings208380Navigator from '../features/Settings208380/navigator';
import Settings208375Navigator from '../features/Settings208375/navigator';
import UserProfile208368Navigator from '../features/UserProfile208368/navigator';
import Settings208367Navigator from '../features/Settings208367/navigator';
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
BlankScreen126208683: { screen: BlankScreen126208683Navigator },
Settings208536: { screen: Settings208536Navigator },
Settings208517: { screen: Settings208517Navigator },
Settings208380: { screen: Settings208380Navigator },
Settings208375: { screen: Settings208375Navigator },
UserProfile208368: { screen: UserProfile208368Navigator },
Settings208367: { screen: Settings208367Navigator },
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
