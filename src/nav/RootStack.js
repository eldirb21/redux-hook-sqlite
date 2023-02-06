import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {stackData} from './data-root';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {stackData.map((x, i) => (
        <Stack.Screen key={i} name={x.name} component={x.component} />
      ))}
    </Stack.Navigator>
  );
};

export default RootStack;
