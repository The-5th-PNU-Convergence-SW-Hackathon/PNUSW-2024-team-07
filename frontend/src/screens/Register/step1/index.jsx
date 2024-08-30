import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ProgressIndicator} from '../ProgressIndicator';

export const RegisterStep1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ProgressIndicator currentStep={1} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>가족 그룹</Text>
        <Text style={styles.subtitle}>이 있나요?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.noButton}
          onPress={() => navigation.navigate('RegisterStep3')}>
          <Text style={styles.noText}>아니요</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.yesButton}
          onPress={() => navigation.navigate('RegisterStep2')}>
          <Text style={styles.yesText}>예</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4D83F4',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#383838',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 32,
    gap: 10,
    width: 140,
    height: 40,
    marginLeft: 36,
  },
  noButton: {
    backgroundColor: '#EEEEEE',
    borderRadius: 70,
    paddingVertical: 10,
    paddingHorizontal: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#CECECE',
    textAlign: 'center',
  },
  yesButton: {
    backgroundColor: '#4D83F4',
    borderRadius: 70,
    paddingVertical: 10,
    paddingHorizontal: 62,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yesText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
