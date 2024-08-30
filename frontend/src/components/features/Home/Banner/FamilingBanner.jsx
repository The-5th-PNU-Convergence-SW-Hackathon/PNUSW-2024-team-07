import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BannerImage from '../../../../assets/images/banner/BannerImage.png';

export const FamilingBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
        <View>
          <Text style={styles.title2}>
            <Text style={styles.title1}>Famiing</Text>이{'\n'}
            추구하는 세상은?
          </Text>
          <Text style={styles.description}>소통이 활발한 가족을 바래요.</Text>
        </View>
        <Image source={BannerImage} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4D83F4',
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
    gap: 13,
  },
  textContainer: {
    marginBottom: 24,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  title1: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFBE00',
    lineHeight: 24.96,
  },
  title2: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: 24.96,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  description: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 14.98,
    marginTop: 4.23,
  },
  image: {
    width: 160,
    height: 160,
  },
});
