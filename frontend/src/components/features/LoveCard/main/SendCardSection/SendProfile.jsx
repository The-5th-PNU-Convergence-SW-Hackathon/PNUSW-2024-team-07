import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function SendProfile({userId, name, image, handleAvatarClick}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.avatarContent}
        onPress={() => handleAvatarClick(name, userId)}>
        <Image source={{uri: image}} style={styles.avatarImage} />
        <Text style={styles.avatarName}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  avatarImage: {
    borderRadius: 50,
    width: 64,
    height: 64,
  },
  avatarName: {
    fontSize: 12,
    fontWeight: '700',
    color: '#383838',
  },
});