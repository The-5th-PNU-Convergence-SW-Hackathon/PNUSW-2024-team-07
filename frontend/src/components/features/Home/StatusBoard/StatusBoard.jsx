import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StatusProfile from './StatusProfile';
import {useFocusEffect} from '@react-navigation/native';
import {BASE_URL} from '@/util/base_url';
import axios from 'axios';

export default function StatusBorad() {
  const [myStatus, setMyStatus] = useState([]);
  const [familyStatus, setFamilyStatus] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  useFocusEffect(
    useCallback(() => {
      console.log('status focus');

      axios.get(`${BASE_URL}/api/v1/statuses/family`).then(response => {
        setMyStatus(response.data.result.me);
        setFamilyStatus(response.data.result.family);
      });
    }, [selectedItem]),
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>상태보기</Text>
        <Text style={styles.subTitle}>현재 가족들의 상태를 볼 수 있어요.</Text>
        <StatusProfile
          key={myStatus.username}
          person={myStatus}
          myName={myStatus.nickname}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        {familyStatus.map(person => (
          <StatusProfile
            key={person.username}
            person={person}
            myName={myStatus.nickname}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        ))}
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
