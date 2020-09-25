import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeStackScreen} from './StackNavigator';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={HomeStackScreen} name={'HomeStack'} />
    </Tab.Navigator>
  );
};
