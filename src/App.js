/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import reducers from './Reducers'
import HomeScreen from './Components/HomeScreen'
import ReduxComponent from './Components/ReduxComponent'
import ReduxSauceComponent from './Components/ReduxSauceComponent'

const store = createStore(reducers)
class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  Redux: ReduxComponent,
  ReduxSauce: ReduxSauceComponent,
}, {
  initialRouteName: 'HomeScreen'
});

const AppContainer = createAppContainer(AppNavigator);

export default App;
