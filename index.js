/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import chatbot from './src/chatbot'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => chatbot);
