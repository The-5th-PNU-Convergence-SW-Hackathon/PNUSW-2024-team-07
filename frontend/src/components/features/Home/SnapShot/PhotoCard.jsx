import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import plusbtn from '../../../../assets/images/photocard/plusbtn.png';
import {CameraAlert} from '@/components/common/CameraAlert';

export const PhotoCard = ({
  profile,
  uploadImage,
  isShowSnapshot,
  setUploadImage,
}) => {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <View>
      {isShowSnapshot ? (
        uploadImage === 'EMPTY' ? (
          <TouchableOpacity
            onPress={() => setAlertVisible(true)}
            style={styles.card}>
            <Image source={plusbtn} style={styles.addImage} />
          </TouchableOpacity>
        ) : (
          <View style={styles.card}>
            <Image style={styles.cardImg} source={{uri: uploadImage}} />
          </View>
        )
      ) : (
        <View style={styles.content}>
          <Text style={styles.description}>업로드 시간이 아니에요!</Text>
        </View>
      )}
      <CameraAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        setUploadImage={setUploadImage}
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
    width: 150,
    height: 150,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  description: {
    fontSize: 12,
    fontWeight: '700',
    color: '#C5C5C5',
  },
  addImage: {
    width: 21,
    height: 21,
  },
});
