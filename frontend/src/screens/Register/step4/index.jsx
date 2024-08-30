import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {ProgressIndicator} from '../ProgressIndicator';
import Avatar from '@assets/images/photocard/photocard1.png';
import SwitchButton from '@assets/images/button/switchbtn.png';
import {CameraAlert} from '../../../components/common/CameraAlert';

export const RegisterStep4 = ({navigation}) => {
  const [code, setCode] = useState('');
  const [isCameraAlertVisible, setCameraAlertVisible] = useState(false);

  const handleClick = async () => {
    setCameraAlertVisible(true);
    setCameraAlertVisible(true);
  };

  const handleConfirm = async () => {
    navigation.navigate('Bottom'); 
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCamera = () => {
    // 카메라 기능 구현
    closeModal();
  };

  const handleGallery = () => {
    // 갤러리 기능 구현
    closeModal();

  };

  return (
    <View style={styles.container}>
      <ProgressIndicator currentStep={3} />
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleClick} style={styles.buttonContainer}>
          <Image source={Avatar} style={styles.image} />
          <Image style={styles.image2} source={SwitchButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Familing에서 사용할 이름</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="ex) 슈퍼맨 아빠, 귀염둥이 막내"
          placeholderTextColor="#C5C5C5"
          value={code}
          onChangeText={setCode}
        />
        <View style={styles.line} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>

      <CameraAlert
        visible={isCameraAlertVisible}
        onClose={() => setCameraAlertVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    justifyContent: 'center',
    marginTop: 130,
    marginLeft: 124,
  },
  image: {
    width: 112,
    height: 112,
  },
  image2: {
    width: 28,
    height: 28,
    marginLeft: 80,
    position: 'absolute',
    top: 90,
  },
  titleContainer: {
    marginTop: 32,
    marginLeft: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
  },
  inputContainer: {
    flex: 1,
    marginTop: 5,
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
  button: {
    width: 312,
    height: 40,
    borderRadius: 70,
    backgroundColor: '#4D83F4',
    position: 'absolute',
    top: 400,
    left: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
