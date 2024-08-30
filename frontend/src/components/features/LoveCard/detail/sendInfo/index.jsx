import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function SendInfo({image, name}) {
  return (
    <View style={styles.subContainer}>
      <Image source={image} style={styles.avatar} />
      <Text style={styles.subtitle}>
        보낸 사람:<Text style={styles.name}>{name}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 24,
  },
  avatar: {
    width: 74,
    height: 74,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#4D83F4',
  },
  name: {
    fontSize: 18,
    fontWeight: '400',
    color: '#383838',
  },
});
