import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import luckyCard from '../../../../../assets/images/lovecard/lovecard1.png';
import fireCard from '../../../../../assets/images/lovecard/lovecard2.png';
import moonCard from '.../../../../../assets/images/lovecard/lovecard3.png';
import cloudCard from '../../../../../assets/images/lovecard/lovecard4.png';
import shineCard from '../../../../../assets/images/lovecard/lovecard5.png';
import rainCard from '../../../../../assets/images/lovecard/lovecard6.png';
import messageCard from '../../../../../assets/images/lovecard/lovecard7.png';
import strangeCard from '../../../../../assets/images/lovecard/lovecard8.png';
import eatCard from '../../../../../assets/images/lovecard/lovecard9.png';
import apologyCard from '../../../../../assets/images/lovecard/lovecard10.png';
import snailCard from '../../../../../assets/images/lovecard/lovecard11.png';
import growCard from '../../../../../assets/images/lovecard/lovecard12.png';
import Card from './Card';

export default function SendCardSection({setSelectedCard, setModalVisible}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title2}>애정 카드 보내기</Text>
      <Text style={styles.subtitle2}>
        오늘 Familing이 고심해서 고른 12장의 카드예요!
      </Text>
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Card
            setSelectedCard={setSelectedCard}
            setModalVisible={setModalVisible}
            loveCard={rainCard}
          />
          <Card
            setSelectedCard={setSelectedCard}
            setModalVisible={setModalVisible}
            loveCard={shineCard}
          />
          <Card
            setSelectedCard={setSelectedCard}
            setModalVisible={setModalVisible}
            loveCard={messageCard}
          />
          <Card
            setSelectedCard={setSelectedCard}
            setModalVisible={setModalVisible}
            loveCard={luckyCard}
          />
          <Card
            setSelectedCard={setSelectedCard}
            setModalVisible={setModalVisible}
            loveCard={fireCard}
          />
          <Card
            setSelectedCard={setSelectedCard}
            setModalVisible={setModalVisible}
            loveCard={moonCard}
          />
          <Card
            setSelectedCard={setSelectedCard}
            setModalVisible={setModalVisible}
            loveCard={cloudCard}
          />

          <Card
            setSelectedCard={setSelectedCard}
            setModalVisible={setModalVisible}
            loveCard={strangeCard}
          />
          <Card
            setSelectedCard={setSelectedCard}
            setModalVisible={setModalVisible}
            loveCard={eatCard}
          />
          <Card
            setSelectedCard={setSelectedCard}
            setModalVisible={setModalVisible}
            loveCard={apologyCard}
          />
          <Card
            setSelectedCard={setSelectedCard}
            setModalVisible={setModalVisible}
            loveCard={snailCard}
          />
          <Card
            setSelectedCard={setSelectedCard}
            setModalVisible={setModalVisible}
            loveCard={growCard}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 28,
    marginLeft: 24,
    marginBottom: 20,
  },
  title2: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
  },
  subtitle2: {
    fontSize: 12,
    fontWeight: '500',
    color: '#383838',
    marginTop: 4,
  },
  container: {
    marginTop: 16,
  },
});
