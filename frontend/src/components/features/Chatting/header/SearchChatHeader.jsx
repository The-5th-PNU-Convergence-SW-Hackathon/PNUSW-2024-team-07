import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import searchIcon from '@assets/images/chatting/searchIcon.png';

export default function SearchChatHeader({setIsSearch}) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.rightWrapper}>
        <TouchableOpacity>
          <Image source={searchIcon} style={styles.icon} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          value={searchValue}
          onChangeText={text => setSearchValue(text)}
          placeholder="메세지 검색"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
      </View>
      <TouchableOpacity onPress={() => setIsSearch(false)}>
        <Text style={styles.cancel}>취소</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 64,
    backgroundColor: 'rgba(77, 131, 244, 1)',
    //shadow
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textInput: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  cancel: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 22.46,
    color: '#FFFFFF',
  },
});
