import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function TodayCards({handleCardClick, card}) {
  return (
    <TouchableOpacity onPress={() => handleCardClick(card)}>
      <Image source={{uri: card.image_url}} style={styles.image1} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image1: {
    width: 140,
    height: 210,
    marginRight: 12,
  },
});
