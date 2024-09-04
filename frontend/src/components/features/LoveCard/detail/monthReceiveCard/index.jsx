import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import MonthCard from './MonthCard';

export default function MonthReceiveCard({monthCards, handleCardClick}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title2}>지난 날 받은 애정 카드(최근 30일)</Text>
        <Text style={styles.subtitle2}>
          최근 30일간 받은 카드를 모아봤어요.
        </Text>
      </View>

      <View style={styles.scrollCotainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {monthCards == undefined ? (
            <Text style={styles.text}>최근 30일간 받은 카드가 없어요!</Text>
          ) : (
            monthCards.map(card => (
              <MonthCard
                key={card.id}
                card={card.lovecardResponse}
                handleCardClick={handleCardClick}
              />
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    marginLeft: 24,
    marginBottom: 20,
  },
  title2: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
    marginBottom: 4,
  },
  subtitle2: {
    fontSize: 12,
    fontWeight: '500',
    color: '#383838',
  },
  scrollCotainer: {
    alignItems: 'center',
    marginTop: 16,
    height: 156,
  },
  text: {
    marginTop: 64,
    color: '#C5C5C5',
  },
});
