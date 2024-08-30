import React from 'react';
import {RegisterStep1} from '../screens/Register/step1';
import {RegisterStep2} from '../screens/Register/step2';
import {RegisterStep3} from '../screens/Register/step3';
import {RegisterStep4} from '../screens/Register/step4';
import {createStackNavigator} from '@react-navigation/stack';

const RegisterStack = createStackNavigator();

export const RegisterScreen = () => {
  return (
    <RegisterStack.Navigator initialRouteName="RegisterStep1">
      <RegisterStack.Screen
        name="RegisterStep1"
        component={RegisterStep1}
        options={{headerShown: false}}
      />
      <RegisterStack.Screen
        name="RegisterStep2"
        component={RegisterStep2}
        options={{headerShown: false}}
      />
      <RegisterStack.Screen
        name="RegisterStep3"
        component={RegisterStep3}
        options={{headerShown: false}}
      />
      <RegisterStack.Screen
        name="RegisterStep4"
        component={RegisterStep4}
        options={{headerShown: false}}
      />
    </RegisterStack.Navigator>
  );
};
