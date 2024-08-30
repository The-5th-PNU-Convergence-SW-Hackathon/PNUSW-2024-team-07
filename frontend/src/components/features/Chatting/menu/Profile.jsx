import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Profile({profile, name}) {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.profile} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    width: 38,
    height: 38,
    borderRadius: 50,
  },
  name: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17.47,
    color: '#383838',
    marginLeft: 18.23,
  },
});
