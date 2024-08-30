import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Start from '@/screens/Start';
import {RegisterScreen} from './RegisterStack';

const StartStack = createStackNavigator();

export const StartStacks = () => {
  return (
    <StartStack.Navigator initialRouteName="Start">
      <StartStack.Screen
        name="Start"
        component={Start}
        options={{headerShown: false}}
      />
      <StartStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </StartStack.Navigator>
  );
};
