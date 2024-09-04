import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Profile({profileImg, name, userId, navigation}) {
  const handleProfileClick = () => {
    navigation.navigate('LoveCardDetailScreen', {
      name: name,
      image: profileImg,
      userId: userId,
    });
  };

  return (
    <View style={styles.profileCard}>
      <TouchableOpacity onPress={handleProfileClick}>
        <Image source={{uri: profileImg}} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profileCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginRight: 16,
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 68,
    height: 68,
    marginBottom: 8,
    borderRadius: 50,
  },
  name: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
    fontWeight: '700',
    color: '#383838',
  },
});
