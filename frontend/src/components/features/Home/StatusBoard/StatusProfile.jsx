import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropdownSelectBox from './selectBox';
import StatusBtn from './StatusBtn';

export default function StatusProfile({Profile, name, myName}) {
  const familiyStatus = {
    익순여왕님: '쉬는 중',
    '민지 공주': '노는 중',
    이민형: '공부 중',
  };

  return (
    <View style={styles.divider}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Profile />
          <Text style={styles.font}>{name}</Text>
        </View>
        <View style={styles.rightContainer}>
          {name === myName ? (
            <DropdownSelectBox />
          ) : (
            <StatusBtn nowStatus={familiyStatus[name]} />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    paddingBottom: 8,
    marginBottom: 8,
  },
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 38,
  },
  font: {
    fontSize: 14,
    fontWeight: '500',
    color: '#383838',
    lineHeight: 17.47,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  rightContainer: {
    justifyContent: 'center',
  },
});
