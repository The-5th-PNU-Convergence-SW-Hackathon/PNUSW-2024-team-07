import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Arrow from '@assets/images/register/arrowImg.png';

export default function NicknameScreen({navigation}) {
  const [nickname, setNickname] = useState('내가 둘째다');

  const handleChange = async () => {
    try {
      await AsyncStorage.setItem('nickname', nickname);
      navigation.goBack('MyPage');
    } catch (error) {
      console.error('닉네임 저장 실패:', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Arrow} style={styles.arrowImage} />
        </TouchableOpacity>
        <Text style={styles.title}>닉네임</Text>
      </View>
      <View style={styles.nicknameContainer}>
        <Text style={styles.subtitle}>새로운 닉네임을 입력해주세요</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="내가 둘째다"
            placeholderTextColor="#C5C5C5"
            value={nickname}
            onChangeText={setNickname}
          />
          <View style={styles.line} />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleChange}>
        <Text style={styles.buttonText}>변경하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 105,
  },
  arrowImage: {
    width: 20,
    height: 15,
    marginLeft: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
    marginTop: -5,
  },
  nicknameContainer: {
    width: 312,
    height: 68,
    flexDirection: 'column',
    gap: 16,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
    marginTop: 40,
    marginLeft: 24,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    width: 312,
    height: 32,
    fontSize: 16,
    fontWeight: '400',
    color: '#C5C5C5',
    paddingHorizontal: 5,
    paddingVertical: 1,
    marginLeft: 24,
  },
  line: {
    borderWidth: 2,
    borderColor: '#4D83F4',
    borderRadius: 12,
    marginLeft: 24,
    marginTop: 3,
  },
  button: {
    width: 312,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#4D83F4',
    marginTop: 300,
    marginLeft: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
