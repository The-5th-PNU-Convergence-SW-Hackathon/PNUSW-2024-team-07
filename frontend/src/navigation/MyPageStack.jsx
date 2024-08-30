import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyPage from '@/screens/MyPage';
import NicknameScreen from '@/screens/MyPage/Nickname';
import MyFamilyScreen from '@/screens/MyPage/MyFamily';
import PayScreen from '@/screens/MyPage/Pay';
import SubscribeScreen from '@/screens/MyPage/Subscribe';
import SnapshotTimeScreen from '@/screens/MyPage/SnapshotTime';

const MyPageStack = createStackNavigator();

export const MyPageNavigator = () => {
  return (
    <MyPageStack.Navigator initialRouteName="MyPage">
      <MyPageStack.Screen
        name="MyPage"
        component={MyPage}
        options={{headerShown: false}}
      />
      <MyPageStack.Screen
        name="NicknameScreen"
        component={NicknameScreen}
        options={{headerShown: false, tabBarStyle: {display: 'none'}}}
      />
      <MyPageStack.Screen
        name="MyFamilyScreen"
        component={MyFamilyScreen}
        options={{headerShown: false, tabBarStyle: {display: 'none'}}}
      />
      <MyPageStack.Screen
        name="PayScreen"
        component={PayScreen}
        options={{headerShown: false, tabBarStyle: {display: 'none'}}}
      />
      <MyPageStack.Screen
        name="SubscribeScreen"
        component={SubscribeScreen}
        options={{headerShown: false, tabBarStyle: {display: 'none'}}}
      />
      <MyPageStack.Screen
        name="SnapshotTimeScreen"
        component={SnapshotTimeScreen}
        options={{headerShown: false, tabBarStyle: {display: 'none'}}}
      />
    </MyPageStack.Navigator>
  );
};
