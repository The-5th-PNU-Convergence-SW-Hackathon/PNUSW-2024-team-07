import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ChatImage from '@assets/images/banner/ChatImage.png';

export const ChatBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
        <View>
          <View>
            <Text style={styles.title}>Familing만의</Text>
            <Text style={styles.subtitle}>공감봇과 애정봇</Text>
          </View>
          <Text style={styles.description}>AI가 도와드릴게요!</Text>
        </View>
        <Image source={ChatImage} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    width: 360,
    height: 210,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 36,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#4D83F4',
    lineHeight: 24.96,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
    lineHeight: 24.96,
  },
  description: {
    fontSize: 12,
    fontWeight: '500',
    color: '#383838',
    lineHeight: 14.98,
    marginTop: 4.23,
  },
  image: {
    width: 149,
    height: 107.11,
  },
});
