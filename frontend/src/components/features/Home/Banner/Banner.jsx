import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {FamilingBanner} from './FamilingBanner';
import {CardBanner} from './CardBanner';
import {ChatBanner} from './ChatBanner';

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Swiper
      style={styles.container}
      showsButtons={false}
      loop={true}
      dot={<View style={currentIndex === 2 ? styles.blackDot : styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={styles.pagination}
      index={0}
      autoplay={true}
      autoplayTimeout={4}
      onIndexChanged={index => setCurrentIndex(index)}>
      <FamilingBanner />
      <CardBanner />
      <ChatBanner />
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 210,
  },
  dot: {
    backgroundColor: '#FFFFFF',
    width: 4,
    height: 4,
    borderRadius: 50,
    marginHorizontal: 2,
  },
  blackDot: {
    backgroundColor: '#383838',
    width: 4,
    height: 4,
    borderRadius: 50,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: '#FFBE00',
    width: 20,
    height: 4,
    borderRadius: 16,
    marginHorizontal: 2,
  },
  pagination: {
    bottom: 9,
    justifyContent: 'center',
  },
});
