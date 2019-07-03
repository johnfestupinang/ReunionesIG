/**
 * @format
 */

import {AppRegistry} from './node_modules/react-native';
//import App from './componets/App';
import LoginView from './componets/login/LoginView';

import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, ()=> LoginView);
