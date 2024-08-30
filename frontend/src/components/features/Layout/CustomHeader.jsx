import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LogoIcon} from '../../icon/LogoIcon';
import {BellIcon} from '../../icon/BellIcon';

export const CustomHeader = () => {
  return (
    <View style={headerStyles.wrapper}>
      <View style={headerStyles.logo}>
        <LogoIcon />
      </View>
      <View style={headerStyles.badgeContainer}>
        <BellIcon />
        <View style={headerStyles.badge}>
          <Text style={headerStyles.badgeText}>5</Text>
        </View>
      </View>
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
