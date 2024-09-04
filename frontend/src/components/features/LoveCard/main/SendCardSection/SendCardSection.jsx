import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from './Card';
import {getSendLoveCard} from '@/api/getSendLoveCard';

export default function SendCardSection({
  setSelectedCard,
  setSelectedCardId,
  setModalVisible,
}) {
  const [cards, setCards] = useState([]);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) {
      getLoveCard();
    } else {
      setCards(cardsRef.current);
    }
  }, []);

  const getLoveCard = async () => {
    const cardsData = await getSendLoveCard();
    cardsRef.current = cardsData;
    setCards(cardsData);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title2}>애정 카드 보내기</Text>
      <Text style={styles.subtitle2}>
        오늘 Familing이 고심해서 고른 12장의 카드예요!
      </Text>
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cards.map(card => (
            <Card
              setSelectedCard={setSelectedCard}
              setSelectedCardId={setSelectedCardId}
              setModalVisible={setModalVisible}
              loveCard={card}
              key={card.card_id}
            />
          ))}
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
