import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

export default function Card({
  loveCard,
  setSelectedCard,
  setSelectedCardId,
  setModalVisible,
}) {
  const handleCardClick = card => {
    setSelectedCard(card.image_url);
    setSelectedCardId(card.card_id);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleCardClick(loveCard)}>
        <Image source={{uri: loveCard.image_url}} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
  image: {
    width: 140,
    height: 210,
  },
});
