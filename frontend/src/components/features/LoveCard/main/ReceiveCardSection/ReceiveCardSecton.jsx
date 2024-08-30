import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Profile from './Profile';
import mom_profile from '../../../../../assets/images/photocard/photocard2.png';
import daughter_profile from '../../../../../assets/images/photocard/photocard3.png';
import son_profile from '../../../../../assets/images/photocard/photocard4.png';

export default function ReceiveCardSecton({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title1}>내가 받은 애정 카드</Text>
        <Text style={styles.subtitle1}>
          가족들이 보낸 애정 카드를 모아놨어요.
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Profile
            name="익순여왕님"
            profileImg={mom_profile}
            navigation={navigation}
          />
          <Profile
            name="민지공주"
            profileImg={daughter_profile}
            navigation={navigation}
          />
          <Profile
            name="이민형"
            profileImg={son_profile}
            navigation={navigation}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginLeft: 24,
  },
  title1: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
  },
  subtitle1: {
    fontSize: 12,
    fontWeight: '500',
    color: '#383838',
    marginTop: 4,
  },
  cardContainer: {
    gap: 16,
    flexDirection: 'row',
    height: 91,
    marginTop: 16,
  },
});
