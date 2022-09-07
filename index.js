/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/common/Context';
// import App from './src/screens/speech/Speech';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
