import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import mom from '../../../../assets/images/photocard/photocard2.png';

export const FamilyPhotoCard = ({profile, snapshot}) => {
  return (
    <View style={styles.content}>
      {snapshot === 'EMPTY' ? (
        <Text style={styles.description}>아직 업로드 전이에요!</Text>
      ) : (
        <View style={styles.imgaeContainer}>
          <Image
            source={{
              uri: snapshot,
            }}
            style={styles.cardImg}
          />
        </View>
      )}
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
  imgaeContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: '100%',
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
});
