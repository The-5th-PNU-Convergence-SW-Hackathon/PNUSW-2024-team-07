import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import monthCard1 from '../../../../../assets/images/lovecard/lovecard3.png';
import monthCard2 from '../../../../../assets/images/lovecard/lovecard6.png';
import monthCard3 from '../../../../../assets/images/lovecard/lovecard7.png';
import monthCard4 from '../../../../../assets/images/lovecard/lovecard11.png';
import MonthCard from './MonthCard';

export default function MonthReceiveCard({handleCardClick}) {
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
          <MonthCard image={monthCard2} handleCardClick={handleCardClick} />
          <MonthCard image={monthCard1} handleCardClick={handleCardClick} />
          <MonthCard image={monthCard3} handleCardClick={handleCardClick} />
          <MonthCard image={monthCard4} handleCardClick={handleCardClick} />
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
    marginTop: 16,
  },
});
