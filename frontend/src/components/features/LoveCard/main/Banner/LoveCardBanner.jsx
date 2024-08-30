import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import envelope from '../../../../../assets/images/banner/envelope.png';

export default function LoveCardBanner() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            사소한 애정표현이{'\n'}
            어렵다고요?
          </Text>
          <Text style={styles.subTitle}>
            <Text style={styles.innerText}>Famiing</Text>에서 만든,{'\n'}
            따뜻한 카드를 보내보세요.
          </Text>
        </View>
        <Image
          source={envelope}
          alt="envelopeImg"
          style={{width: 122, height: 108}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    backgroundColor: '#F2F2F2',
  },
  container: {
    width: 312,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerText: {
    fontWeight: '700',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#383838',
  },
});
