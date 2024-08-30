import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {PhotoCard} from './PhotoCard';
import dad from '@assets/images/photocard/photocard1.png';
import mom from '../../../../assets/images/photocard/photocard2.png';
import daughter from '@assets/images/photocard/photocard3.png';
import son from '@assets/images/photocard/photocard4.png';
import {FamilyPhotoCard} from './FamilyPhotoCard';
import snapshotImg1 from '@assets/images/snapshot/snapshotImg1.png';
import snapshotImg2 from '@assets/images/snapshot/snapshotImg2.png';
import axios from 'axios';
import { BASE_URL } from '@/util/base_url';
import getToday from '@/components/common/getToday';

export const SnapShot = () => {
  const [selectedImage, setSelectedImage] = useState('');

  // useEffect(()=> {
  //   //특정 날짜 스냅샷 조회
  //   const today = getToday();
  //   axios.get(`${BASE_URL}/api/v1/snapshots/${today}`)
  //   .then(response => {
  //     console.log(response.data.result);
  //   })
  //   .catch(error => {
  //     console.log("Failed to retrieve snapshot :", error);
  //   });
  // }, []);

  //임시 데이터
  const familyData = [
    {
      profile_img:
        'https://st.kakaocdn.net/shoppingstore/store/home/brand/20240802080955_c398a941fa754cf2ab46a791228cc21a.jpg',
      snapshot_img:
        'https://st.kakaocdn.net/shoppingstore/store/home/brand/20240802080914_8503664abbfb477c98fddc5e15e81599.jpg',
    },
    {
      profile_img:
        'https://st.kakaocdn.net/shoppingstore/store/home/brand/20240802080955_c398a941fa754cf2ab46a791228cc21a.jpg',
      snapshot_img:
        'https://st.kakaocdn.net/shoppingstore/store/home/brand/20240802080914_8503664abbfb477c98fddc5e15e81599.jpg',
    },
    {
      profile_img:
        'https://st.kakaocdn.net/shoppingstore/store/home/brand/20240802080955_c398a941fa754cf2ab46a791228cc21a.jpg',
      snapshot_img: 'EMPTY',
    },
  ];

  const me = {
    profile_img:
      'https://st.kakaocdn.net/shoppingstore/store/home/brand/20240802080955_c398a941fa754cf2ab46a791228cc21a.jpg',
    snapshot_img:
      'https://st.kakaocdn.net/shoppingstore/store/home/brand/20240802080914_8503664abbfb477c98fddc5e15e81599.jpg',
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>SnapShot</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>이전 사진보기</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>
            설정한 시간의 순간을 사진을 찍어 공유해주세요.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>아직 설정한 시간이 되지 않았어요!</Text>
        </View>

        <View style={styles.cardContainer}>
          <PhotoCard
            profile={me.profile_img}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          {familyData.map((person, index) => (
            <FamilyPhotoCard
              key={index}
              profile={person.profile_img}
              snapshot={person.snapshot_img}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  wrapper: {
    marginTop: 20,
    marginHorizontal: 24,
    marginBottom: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 71,
    height: 20,
    borderRadius: 40,
    //shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#FFFFFF',
    marginTop: -2,
  },
  buttonText: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 12.48,
    color: '#383838',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#383838',
    marginTop: 4,
  },
  box: {
    paddingHorizontal: 24,
    paddingVertical: 6,
    height: 28,
    width: 228,
    borderRadius: 5,
    backgroundColor: '#C5C5C5',
    marginTop: 16,
  },
  boxText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    marginBottom: 12,
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 12,
  },
});
