import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {PhotoCard} from './PhotoCard';
import {FamilyPhotoCard} from './FamilyPhotoCard';
import axios from 'axios';
import {BASE_URL} from '@/util/base_url';
import getToday from '@/components/common/getToday';
import {getSnapshotTime} from '@/api/getSnapshotTime';
import {useFocusEffect} from '@react-navigation/native';

export const SnapShot = () => {
  const [familySnapshot, setFamiliySnapshot] = useState([]);
  const [mySnapShot, setMySnapShot] = useState({});
  const [snapshotTitle, setSnapshotTitle] = useState('');
  const [isShowSnapshot, setIsShowSnapshot] = useState(false);
  const [uploadImage, setUploadImage] = useState('');

  useFocusEffect(
    useCallback(() => {
      console.log('home focus');

      //스냅샷 주제 공개 & 초기화
      //임시 구현
      showAndHideSnapshot();

      //스냅샷 데이터 로드
      fetchSnapshotData();
    }, [uploadImage]),
  );

  const fetchSnapshotData = async () => {
    const today = getToday();

    try {
      const response = await axios.get(`${BASE_URL}/api/v1/snapshots/${today}`);
      const familyData = response.data.result.family;
      const myData = response.data.result.me;
      const titleData = response.data.result.title;
      setFamiliySnapshot(familyData);
      setMySnapShot(myData);
      setSnapshotTitle(titleData);
    } catch (error) {
      console.log('Failed to retrieve snapshot :', error);
    }
  };

  const showAndHideSnapshot = async () => {
    const snapshotTime = await getSnapshotTime();

    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5);

    const current = parseInt(currentTime.replace(':', ''), 10);
    const snapshot = parseInt(snapshotTime.replace(':', ''), 10);

    if (current >= snapshot) {
      setIsShowSnapshot(true);
    }

    if (current >= '00:00' && current < snapshot) {
      // setFamiliySnapshot([]);
      // setMySnapShot({});
      // setSnapshotTitle('');
      setIsShowSnapshot(false);
    }
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
        {isShowSnapshot ? (
          <View style={styles.snapshotOn}>
            <Text style={styles.boxText}>주제: {snapshotTitle}</Text>
          </View>
        ) : (
          <View style={styles.box}>
            <Text style={styles.boxText}>
              아직 설정한 시간이 되지 않았어요!
            </Text>
          </View>
        )}

        <View style={styles.cardContainer}>
          <PhotoCard
            profile={mySnapShot.profile_img}
            uploadImage={mySnapShot.snapshot_img}
            isShowSnapshot={isShowSnapshot}
            setUploadImage={setUploadImage}
          />
          {familySnapshot &&
            familySnapshot.map((person, index) => (
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
    alignSelf: 'flex-start',
    paddingHorizontal: 24,
    paddingVertical: 6,
    height: 28,
    borderRadius: 5,
    backgroundColor: '#C5C5C5',
    marginTop: 16,
  },
  snapshotOn: {
    alignSelf: 'flex-start',
    paddingHorizontal: 24,
    paddingVertical: 6,
    height: 28,
    borderRadius: 5,
    backgroundColor: '#FFBE00',
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
