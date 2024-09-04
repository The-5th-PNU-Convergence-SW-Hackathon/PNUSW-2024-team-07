import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import axios from 'axios';
// import Clipboard from '@react-native-clipboard/clipboard';
import {ProgressIndicator} from '@/screens/Register/ProgressIndicator';
console.log(ProgressIndicator);
import Arrow from '@assets/images/register/arrowImg.png';
import ClearButton from '@assets/images/button/clearbtn.png';
import CopyImage from '@assets/images/register/copyimage.png';
import {BASE_URL} from '@/util/base_url';

export const RegisterStep3 = ({navigation}) => {
  const [code, setCode] = useState('');
  const [inviteCode, setInviteCode] = useState(null);

  // const fetchInviteCode = async () => {
  //   try {
  //     const response = await axios.post(`${BASE_URL}/api/v1/family`);
  //     setInviteCode(response.data.inviteCode);
  //     Clipboard.setString(response.data.inviteCode);
  //   } catch (error) {
  //     Alert.alert('초대 코드를 가져오는 데 실패했습니다.');
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   setInviteCode();
  // }, []);

  const handleCreate = async groupName => {
    // console.log('가족:', groupName);

    if (!groupName) {
      Alert.alert('가족 그룹 이름을 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/v1/family`, {
        family_name: groupName,
      });

      console.log('보내는 데이터:', {family_name: groupName});

      console.log('API 응답:', response.data);

      if (response.data.success) {
        const createdGroupName = response.data.result.code
          ? response.data.result.code
          : '알 수 없는 그룹 이름';
        Alert.alert(
          '가족 그룹이 생성되었습니다.',
          `그룹 이름: ${createdGroupName}`,
        );
        navigation.navigate('RegisterStep4');
      } else {
        Alert.alert('가족 그룹 생성에 실패했습니다.', response.data.message);
      }
    } catch (error) {
      Alert.alert('가족 그룹 생성에 실패했습니다.');
      console.error(error);
    }
  };

  const clearInput = () => {
    setCode('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Arrow} style={styles.arrowImage} />
      </TouchableOpacity>
      <ProgressIndicator currentStep={2} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>가족 그룹</Text>
        <Text style={styles.subtitle}>을 </Text>
        <Text style={styles.title}>생성</Text>
        <Text style={styles.subtitle}>해보세요!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="가족 그룹 이름을 설정해주세요."
          placeholderTextColor="#C5C5C5"
          value={code}
          onChangeText={setCode}
        />
        <View style={styles.line} />
        <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
          <Image source={ClearButton} style={styles.clearbtnImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.inviteContainer}>
        <Text style={styles.inviteTitle}>
          {inviteCode ? inviteCode : '아직 생성되지 않음'}
        </Text>
        <TouchableOpacity onPress={setInviteCode} style={styles.copyContainer}>
          <Image source={CopyImage} style={styles.copyImage} />
          <Text style={styles.copyText}>초대 코드 복사하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCreate(code)}>
          <Text style={styles.buttonText}>생성하기</Text>
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
  arrowImage: {
    width: 20,
    height: 15,
    marginTop: 20,
    marginLeft: 24,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 100,
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
    position: 'absolute',
    top: 250,
    left: 288,
  },
  clearButton: {
    position: 'absolute',
    top: 6,
    left: 310,
  },
  clearbtnImage: {
    width: 24,
    height: 24,
  },
  inviteContainer: {
    width: 312,
    height: 80,
    backgroundColor: '#F2F2F2',
    position: 'absolute',
    top: 310,
    left: 24,
  },
  inviteTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 24.96,
  },
  copyContainer: {
    flexDirection: 'row',
    marginLeft: 95,
    marginTop: 5,
  },
  copyImage: {
    width: 10,
    height: 12,
    marginTop: 6,
    marginRight: 5,
  },
  copyTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#B3B3B3',
    lineHeight: 24,
  },
  btnContainer: {
    marginLeft: 24,
    position: 'absolute',
    top: 425,
  },
  button: {
    width: 312,
    height: 40,
    borderRadius: 70,
    backgroundColor: '#4D83F4',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 6,
  },
});
