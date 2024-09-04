import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import DropdownSelectBox from './selectBox';
import StatusBtn from './StatusBtn';

export default function StatusProfile({
  person,
  myName,
  selectedItem,
  setSelectedItem,
}) {
  return (
    <View style={styles.divider}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{uri: person.image_url}} style={styles.profile} />
          <Text style={styles.font}>{person.nickname}</Text>
        </View>
        <View style={styles.rightContainer}>
          {person.nickname === myName ? (
            <DropdownSelectBox
              myStatus={person.status}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          ) : (
            <StatusBtn nowStatus={person.status} />
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
  profile: {
    borderRadius: 50,
    width: 38,
    height: 38,
  },
});
