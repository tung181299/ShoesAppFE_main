import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './src/redux/reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigate/bottomNavigate';
import {navigationRef} from './src/navigation/RootNavigation';

//Middleware
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const App = () => (
  <Provider store={store}>
    <NavigationContainer ref={navigationRef}>
      <MyTabs />
    </NavigationContainer>
  </Provider>
);

export default class AppSaga extends Component {
  render() {
    return <App />;
  }
}

sagaMiddleware.run(rootSaga);
