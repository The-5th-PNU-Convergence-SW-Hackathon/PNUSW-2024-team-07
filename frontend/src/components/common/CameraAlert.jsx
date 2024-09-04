import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import modalCancle from '@assets/images/button/modalCancle.png';
import camera from '@assets/images/register/camera.png';
import gallery from '@assets/images/register/gallery.png';
import {BlurView} from '@react-native-community/blur';
import axios from 'axios';
import {BASE_URL} from '@/util/base_url';
import getToday from './getToday';

export const CameraAlert = ({visible, onClose, setUploadImage}) => {
  const handleCamera = async () => {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );

    const result = await launchCamera({
      mediaType: 'photo',
      cameraType: 'back',
      maxHeight: 150,
      maxWidth: 150,
    });
    if (result.didCancel) {
      onClose();
      return null;
    }
    const localUri = result.assets[0].uri;
    const fileName = result.assets[0].fileName;
    const type = result.assets[0].type;

    postImage(localUri, fileName, type);
    onClose();
  };

  const handleGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      maxHeight: 150,
      maxWidth: 150,
    });
    if (result.didCancel) {
      onClose();
      return null;
    }
    const localUri = result.assets[0].uri;
    const fileName = result.assets[0].fileName;
    const type = result.assets[0].type;

    postImage(localUri, fileName, type);
    onClose();
  };

  //스냅샷 이미지 등록
  const postImage = (localUri, fileName, type) => {
    const today = getToday();

    //이미지 FormData 객체 생성
    const ImgFormData = new FormData();
    const imgFile = {
      name: fileName,
      uri: localUri,
      type: type,
    };

    ImgFormData.append('snapshot_img', imgFile);

    axios
      .post(`${BASE_URL}/api/v1/snapshots/${today}/users`, ImgFormData, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(response => {
        console.log(response.data);
        setUploadImage(today);
      })
      .catch(error => {
        console.error('snapShot image post failed,', error);
      });
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={3}
          overlayColor="rgba(65, 65, 65, 0.7)"
        />
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.close} onPress={onClose}>
            <Image style={styles.img} source={modalCancle} />
          </TouchableOpacity>
          <Text style={styles.title}>사진 업로드</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.cameraBtn} onPress={handleCamera}>
              <View style={styles.btnInnerContainer}>
                <Image style={styles.img} source={camera} />
                <Text style={styles.cameraText}>카메라</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pictureBtn} onPress={handleGallery}>
              <View style={styles.btnInnerContainer}>
                <Image style={styles.img} source={gallery} />
                <Text style={styles.pictureText}>앨범</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalContainer: {
    width: 312,
    height: 153,
    backgroundColor: '#fff',
    borderRadius: 6,
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  img: {
    width: 24,
    height: 24,
  },
  title: {
    color: '#4D83F4',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    marginTop: 25,
  },
  btnInnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  cameraBtn: {
    width: 136,
    height: 40,
    borderRadius: 38,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pictureBtn: {
    width: 136,
    height: 40,
    borderRadius: 38,
    backgroundColor: '#4D83F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraText: {
    color: '#383838',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 23,
  },
  pictureText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 23,
  },
});

export default CameraAlert;
