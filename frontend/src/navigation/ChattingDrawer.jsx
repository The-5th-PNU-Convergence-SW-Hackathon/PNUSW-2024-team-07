import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Chatting from '@/screens/Chatting/Chatting';
import {MenuScreen} from '@/screens/Chatting/MenuScreen';

export default function ChattingDrawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Chatting"
      drawerContent={MenuScreen}
      screenOptions={{
        drawerPosition: 'right',
        drawerStyle: {
          width: 289,
        },
      }}>
      <Drawer.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
