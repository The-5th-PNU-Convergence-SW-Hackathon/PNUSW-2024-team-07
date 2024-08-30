import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CardImage from '../../../../assets/images/banner/CardImage.png';

export const CardBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
        <View>
          <View>
            <Text style={styles.title}>Familing만의</Text>
            <Text style={styles.subtitle}>애정 카드 기능</Text>
          </View>
          <Text style={styles.description}>간단하게 따뜻한 마음을</Text>
        </View>
        <Image source={CardImage} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#383838',
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
    gap: 6,
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
    color: '#FFFFFF',
    lineHeight: 24.96,
  },
  description: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 14.98,
    marginTop: 4.23,
  },
  image: {
    width: 190,
    height: 110,
  },
});
