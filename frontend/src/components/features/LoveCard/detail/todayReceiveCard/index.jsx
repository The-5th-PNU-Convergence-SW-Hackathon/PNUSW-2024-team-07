import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TodayCards from './TodayCards';

export default function TodayReceiveCard({todayCards, handleCardClick}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title1}>오늘 받은 애정 카드</Text>
        <Text style={styles.subtitle1}>오늘 받은 애정 카드는 이거예요!</Text>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {todayCards == undefined ? (
            <Text style={styles.text}>오늘 받은 카드가 없어요!</Text>
          ) : (
            todayCards.map(card => (
              <TodayCards
                key={card.id}
                handleCardClick={handleCardClick}
                card={card.lovecardResponse}
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
    marginLeft: 24,
    marginTop: 32,
  },
  title1: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
    marginBottom: 4,
  },
  subtitle1: {
    fontSize: 12,
    fontWeight: '500',
    color: '#383838',
  },
  scrollContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 16,
    height: 210,
  },
  text: {
    marginTop: 90,
    color: '#C5C5C5',
  },
});
