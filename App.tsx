import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import RootStack from './src/nav/RootStack';
import store from './src/redux/store';
import tables from './src/utils/add-table-sqlLite';

const App = () => {
  useEffect(() => {
    //Disini saya buat semua table di sqlLite nya
    tables();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
