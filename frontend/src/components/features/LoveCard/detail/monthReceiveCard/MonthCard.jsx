import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

export default function MonthCard({image, handleCardClick}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleCardClick(image)}>
        <Image source={image} style={styles.image2} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 6,
  },
  image2: {
    width: 104,
    height: 156,
  },
});
