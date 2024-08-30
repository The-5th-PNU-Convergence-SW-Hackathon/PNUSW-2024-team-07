import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoveCardMainScreen from '@/screens/LoveCard/main';
import LoveCardDetailScreen from '@/screens/LoveCard/detail';

const LoveCardStack = createStackNavigator();

export const LoveCardNavigator = () => {
  return (
    <LoveCardStack.Navigator initialRouteName="LovecardMainScreen">
      <LoveCardStack.Screen
        name="LovecardMainScreen"
        component={LoveCardMainScreen}
        options={{headerShown: false}}
      />
      <LoveCardStack.Screen
        name="LoveCardDetailScreen"
        component={LoveCardDetailScreen}
        options={{headerShown: false}}
      />
    </LoveCardStack.Navigator>
  );
};
