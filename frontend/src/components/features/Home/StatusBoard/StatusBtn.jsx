import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function StatusBtn({nowStatus}) {
  return (
    <View style={styles.btn}>
      <Text style={styles.text}>{nowStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    paddingHorizontal: 14,
    justifyContent: 'center',
    height: 28,
    borderRadius: 40,
    //shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: '#4D83F4',
  },
});
