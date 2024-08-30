import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import Home from '../screens/Home/index';
import {CustomTabBar} from '../components/features/Layout/CustomTabBar';
import Chatting from '@/screens/Chatting/Chatting';
import {LoveCardNavigator} from './LoveCardStack';
import {MyPageNavigator} from './MyPageStack';
import ChattingDrawer from './ChattingDrawer';

export const BottomTabScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: '홈', headerShown: false}}
      />
      <Tab.Screen
        name="ChattingDrawer"
        component={ChattingDrawer}
        options={{tabBarLabel: '채팅', headerShown: false}}
      />
      <Tab.Screen
        name="LoveCardNavigator"
        component={LoveCardNavigator}
        options={{tabBarLabel: '애정카드', headerShown: false}}
      />
      <Tab.Screen
        name="MyPageNavigator"
        component={MyPageNavigator}
        options={{tabBarLabel: '마이페이지', headerShown: false}}
      />
    </Tab.Navigator>
  );
};
