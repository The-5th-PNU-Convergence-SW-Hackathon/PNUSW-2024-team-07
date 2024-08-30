import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import searchIcon from '@assets/images/chatting/searchIcon.png';
import menuIcon from '@assets/images/chatting/menuIcon.png';

export default function ChatHeader({setIsSearch, navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHAT</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => setIsSearch(true)}>
          <Image source={searchIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={menuIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 64,
    backgroundColor: 'rgba(77, 131, 244, 1)',
    //shadow
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 24.96,
    color: 'rgba(255, 255, 255, 1)',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
