import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import photocard1 from '@assets/images/photocard/photocard1.png';
import switchbtn from '@assets/images/button/switchbtn.png';
import arrowbtn from '@assets/images/button/arrowbtn.png';
import camera from '@assets/images/register/camera.png';
import gallery from '@assets/images/register/gallery.png';
import clearbtn from '@assets/images/button/clearbtn.png';

export default function MyPage({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

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
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>마이페이지</Text>
      </View>

      <View style={styles.profileImageContainer} onPress={openModal}>
        <Image style={styles.profileImage1} source={photocard1} />
        <Image style={styles.profileImage2} source={switchbtn} />
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.nicknameContainer}>
          <Text style={styles.nicknameTitle1}>닉네임</Text>
          <Text style={styles.nicknameText1}>내가 둘째다</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('NicknameScreen')}>
            <Image style={styles.arrowButton1} source={arrowbtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.separator1} />
        <View style={styles.nameContainer}>
          <Text style={styles.nicknameTitle2}>이름</Text>
          <Text style={styles.nicknameText2}>진서현</Text>
        </View>
      </View>

      <View style={styles.profileContainer2}>
        <View style={styles.myfamilyContainer}>
          <Text style={styles.nicknameTitle3}>우리 가족</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyFamilyScreen')}>
            <Image style={styles.arrowButton2} source={arrowbtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.separator2} />
        <View style={styles.subscribeContainer}>
          <Text style={styles.nicknameTitle4}>구독 모델</Text>
          <Text style={styles.nicknameText3}>프리미엄형</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SubscribeScreen')}>
            <Image style={styles.arrowButton3} source={arrowbtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.separator3} />
        <View style={styles.payContainer}>
          <Text style={styles.nicknameTitle5}>결제 관리</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PayScreen')}>
            <Image style={styles.arrowButton4} source={arrowbtn} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.profileContainer3}>
        <View style={styles.snapshotContainer}>
          <Text style={styles.nicknameTitle6}>스냅샷 시간 설정</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SnapshotTimeScreen')}>
            <Image style={styles.arrowButton5} source={arrowbtn} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>사진 업로드</Text>
          <TouchableOpacity style={styles.cameraButton} onPress={handleCamera}>
            <Image source={camera} style={styles.cameraImage} />
            <Text style={styles.cameraText}>카메라</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.galleryButton}
            onPress={handleGallery}>
            <Image source={gallery} style={styles.galleryImage} />
            <Text style={styles.galleryText}>앨범</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeModal}>
            <Image source={clearbtn} style={styles.closeButton} />
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 360,
    height: 800,
  },
  headerContainer: {
    justifyContent: 'flex-start',
    marginLeft: 24,
    marginTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
    justifyContent: 'flex-start',
  },
  profileImageContainer: {
    justifyContent: 'center',
    width: 92,
    height: 92,
    marginTop: 25,
    marginLeft: 134,
  },
  profileImage1: {
    width: 92,
    height: 92,
  },
  profileImage2: {
    width: 28,
    height: 28,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  profileContainer: {
    width: 312,
    height: 121,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: 28,
    marginLeft: 24,
  },
  nicknameTitle1: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
    marginTop: 21,
    marginLeft: 12,
  },
  nicknameText1: {
    fontSize: 16,
    fontWeight: '400',
    color: '#B3B3B3',
    marginTop: 21,
    marginLeft: 130,
  },
  arrowButton1: {
    width: 18,
    height: 18,
    marginTop: 25,
    marginLeft: 10,
  },
  separator1: {
    width: 310,
    height: StyleSheet.hairlineWidth,
    borderTopWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: 20,
    opacity: 1,
  },
  nicknameTitle2: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
    marginTop: 15,
    marginLeft: 12,
  },
  nicknameText2: {
    fontSize: 16,
    fontWeight: '400',
    color: '#B3B3B3',
    marginTop: 15,
    marginLeft: 205,
  },
  profileContainer2: {
    width: 312,
    height: 181,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: 20,
    marginLeft: 24,
  },
  nicknameTitle3: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
    marginTop: 21,
    marginLeft: 12,
  },
  arrowButton2: {
    width: 18,
    height: 18,
    marginTop: 25,
    marginLeft: 200,
  },
  separator2: {
    width: 311,
    height: StyleSheet.hairlineWidth,
    borderTopWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: 20,
    opacity: 1,
  },
  nicknameTitle4: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
    marginTop: 15,
    marginLeft: 12,
  },
  nicknameText3: {
    fontSize: 16,
    fontWeight: '400',
    color: '#B3B3B3',
    marginTop: 15,
    marginLeft: 112,
  },
  arrowButton3: {
    width: 18,
    height: 18,
    marginTop: 18,
    marginLeft: 12,
  },
  separator3: {
    width: 311,
    height: StyleSheet.hairlineWidth,
    borderTopWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: 20,
    opacity: 1,
  },
  nicknameTitle5: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
    marginTop: 15,
    marginLeft: 12,
  },
  arrowButton4: {
    width: 18,
    height: 18,
    marginTop: 20,
    marginLeft: 200,
  },
  profileContainer3: {
    width: 312,
    height: 61,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: 20,
    marginLeft: 24,
    marginBottom: 20,
  },
  nicknameTitle6: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
    marginTop: 16,
    marginLeft: 12,
  },
  arrowButton5: {
    width: 18,
    height: 18,
    marginTop: 20,
    marginLeft: 150,
  },
  nicknameContainer: {
    flexDirection: 'row',
  },
  nameContainer: {
    flexDirection: 'row',
  },
  myfamilyContainer: {
    flexDirection: 'row',
  },
  subscribeContainer: {
    flexDirection: 'row',
  },
  payContainer: {
    flexDirection: 'row',
  },
  snapshotContainer: {
    flexDirection: 'row',
  },
});
