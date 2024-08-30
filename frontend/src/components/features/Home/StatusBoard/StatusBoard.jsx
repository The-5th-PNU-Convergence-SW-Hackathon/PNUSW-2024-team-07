import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StatusProfile from './StatusProfile';
import {Dad_profile} from '../../../icon/profile/Dad_profile';
import {Daughter_profile} from '@/components/icon/profile/Daughter_profile';
import {Mom_profile} from '@/components/icon/profile/Mom_profile';
import {Son_profile} from '@/components/icon/profile/Son_profile';

export default function StatusBorad() {
  const [myName, setMyName] = useState('행복한 부자아빠');

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>상태보기</Text>
        <Text style={styles.subTitle}>현재 가족들의 상태를 볼 수 있어요.</Text>
        <StatusProfile
          Profile={Dad_profile}
          name="행복한 부자아빠"
          myName={myName}
        />
        <StatusProfile
          Profile={Mom_profile}
          name="익순여왕님"
          myName={myName}
        />
        <StatusProfile
          Profile={Daughter_profile}
          name="민지 공주"
          myName={myName}
        />
        <StatusProfile Profile={Son_profile} name="이민형" myName={myName} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  container: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#383838',
    marginTop: 3.89,
    marginBottom: 15,
  },
});
