import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
//import axios from 'axios';
import {ProgressIndicator} from '../ProgressIndicator';
import ClearButton from '@assets/images/button/clearbtn.png';
import Arrow from '@assets/images/register/arrowImg.png';

export const RegisterStep2 = ({navigation}) => {
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleJoin = async () => {
    /*try {
      const response = await axios.post('https://api.com', {code}); // 가족 코드 api

      if (response.data.valid) {
        navigation.navigate('RegisterStep4');
      } else {
        setErrorMessage('※ 코드가 올바르지 않습니다.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('서버에 문제가 발생했습니다. 다시 시도해주세요.');
    }*/

    setErrorMessage('※ 코드가 올바르지 않습니다.');
    navigation.navigate('RegisterStep4');
  };

  const clearInput = () => {
    setCode('');
    setErrorMessage('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Arrow} style={styles.arrowImage} />
      </TouchableOpacity>

      <ProgressIndicator currentStep={2} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>코드를 입력해 참가</Text>
        <Text style={styles.subtitle}>해보세요!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="가족이 공유한 코드를 입력하세요."
          placeholderTextColor="#C5C5C5"
          value={code}
          onChangeText={setCode}
        />
        <View style={styles.line} />
      </View>
      <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
        <Image source={ClearButton} style={styles.clearbtnImage} />
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleJoin}>
        <Text style={styles.buttonText}>참가하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  arrowImage: {
    width: 20,
    height: 15,
    marginTop: 20,
    marginLeft: 24,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 130,
    marginLeft: 24,
    flexDirection: 'row',
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
  inputContainer: {
    flex: 1,
    marginTop: 40,
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
    width: 312,
    borderWidth: 2,
    borderColor: '#4D83F4',
    borderRadius: 12,
    marginLeft: 24,
    marginTop: 3,
  },
  clearbtnContainer: {
    flex: 1,
    position: 'absolute',
    top: 150,
    left: 288,
  },
  clearButton: {
    flex: 1,
    position: 'absolute',
    top: 273,
    left: 308,
  },
  clearbtnImage: {
    width: 24,
    height: 24,
  },
  error: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FF3434',
    marginBottom: 274,
    marginLeft: 24,
  },
  button: {
    width: 312,
    height: 40,
    borderRadius: 70,
    backgroundColor: '#4D83F4',
    position: 'absolute',
    top: 350,
    left: 24,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 7,
  },
});
