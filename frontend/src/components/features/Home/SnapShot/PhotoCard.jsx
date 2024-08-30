import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import plusbtn from '../../../../assets/images/photocard/plusbtn.png';
import {CameraAlert} from '@/components/common/CameraAlert';

export const PhotoCard = ({profile, selectedImage, setSelectedImage}) => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleImageSelected = uri => {
    setSelectedImage(uri);
  };

  return (
    <View>
      {selectedImage ? (
        <View style={styles.card}>
          <Image style={styles.cardImg} source={{uri: selectedImage}} />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => setAlertVisible(true)}
          style={styles.card}>
          <Image source={plusbtn} style={styles.addImage} />
        </TouchableOpacity>
      )}
      <CameraAlert
        handleImageSelected={handleImageSelected}
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
      <Image source={{uri: profile}} style={styles.profile} />
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    position: 'absolute',
    top: 4,
    left: 4,
    width: 38,
    height: 38,
    borderRadius: 50,
  },
  card: {
    display: 'flex',
    width: 150,
    height: 150,
    backgroundColor: '#E7E7E7',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImg: {
    width: 150,
    height: 150,
    borderRadius: 6,
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 12,
    fontWeight: '700',
    color: '#CECECE',
  },
  addImage: {
    width: 21,
    height: 21,
  },
});
