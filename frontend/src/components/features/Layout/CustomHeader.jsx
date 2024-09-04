import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {LogoIcon} from '../../icon/LogoIcon';
import {BellIcon} from '../../icon/BellIcon';
import {useNavigation} from '@react-navigation/native';

export const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={headerStyles.wrapper}>
      <View style={headerStyles.logo}>
        <LogoIcon />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('NotificationPage')}>
        <View style={headerStyles.badgeContainer}>
          <BellIcon />
          <View style={headerStyles.badge}>
            <Text style={headerStyles.badgeText}>5</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  wrapper: {
    height: 64,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    top: 15,
    left: 24,
  },
  badgeContainer: {
    position: 'relative',
    top: 21,
    right: 24,
  },
  badge: {
    position: 'absolute',
    right: -2,
    top: -2,
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: '#FF3434',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 9,
    lineHeight: 11.23,
  },
});
