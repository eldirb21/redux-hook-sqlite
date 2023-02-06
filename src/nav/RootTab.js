import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {tabData} from './data-root';

const Tab = createBottomTabNavigator();

const RootTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {tabData.map((x, i) => (
        <Tab.Screen key={i} name={x.name} component={x.component} />
      ))}
    </Tab.Navigator>
  );
};

export default RootTab;
