import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import Arrow from '@assets/images/register/arrowImg.png';
import premium from '@assets/images/mypage/premium.png';
import usual from '@assets/images/mypage/usual.png';
import free from '@assets/images/mypage/free.png';

export default function PayScreen({navigation}) {
  const [showType, setShowType] = useState(false);
  const [selected, setSelected] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeClick = () => {
    setShowType(true);
  };

  const handlePopupCancelClick = () => {
    setShowType(false);
  };

  const handlePress = imageType => {
    setSelected(imageType);
  };

  const handleConfirm = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Arrow} style={styles.arrowImage} />
        </TouchableOpacity>
        <Text style={styles.title}>결제 관리</Text>
      </View>
      <View style={styles.typeContainer}>
        <Text style={styles.subtitle}>이용중인 타입</Text>
        <TouchableOpacity style={styles.button} onPress={handleChangeClick}>
          <Text style={styles.buttonText}>타입 변경하기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.premiumContainer}>
        <Image source={premium} style={styles.premium} />
      </View>

      <View style={styles.typeContainer2}>
        <Text style={styles.subtitle}>결제 수단</Text>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>결제 수단 변경하기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>카드</Text>
        </View>
        <View style={styles.cardNumber}>
          <Text style={styles.cardText}>3xx4 - 4xx4 - xxxx -xxxx</Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>※ 다음 예상 결제일은 8월 17일 입니다.</Text>
      </View>

      <View style={styles.textContainer2}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.text2}>해지하기</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.changeButton}
        onPress={() => {
          navigation.navigate('MyPage');
        }}>
        <Text style={styles.changeButtonText}>변경하기</Text>
      </TouchableOpacity>

      {showType && (
        <View style={styles.showTypeContainer}>
          <TouchableOpacity
            style={styles.clearButtonContainer}
            onPress={handlePopupCancelClick}>
            <Image
              style={styles.clearButton}
              source={require('../../../assets/images/button/clearbtn.png')}
            />
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <View
              style={styles.freeContainer}
              onPress={() => handlePress('free')}>
              {selected === 'free' && <View style={styles.selectedBox} />}
              <Image source={free} style={styles.free} />
            </View>
            <View
              style={styles.usualContainer}
              onPress={() => handlePress('usual')}>
              {selected === 'usual' && <View style={styles.selectedBox} />}
              <Image source={usual} style={styles.usual} />
            </View>
            <View style={styles.premiumContainer2}>
              <Image source={premium} style={styles.premium2} />
            </View>
          </View>
        </View>
      )}

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle}>정말 해지하시겠습니까?</Text>
            </View>
            <Text style={styles.modalMessage}>
              해지하게 되면{'\n'}가족 모두가 앱을 사용할 수 없습니다.
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText1}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirm}>
                <Text style={styles.buttonText2}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  typeContainer: {
    width: 312,
    height: 68,
    flexDirection: 'row',
    gap: 153,
    marginTop: 59,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
    marginLeft: 24,
  },
  premiumContainer: {
    flexDirection: 'row',
    marginLeft: 24,
    marginTop: -40,
  },
  premium: {
    width: 80,
    height: 18,
  },
  typeContainer2: {
    flexDirection: 'row',
    gap: 153,
    marginTop: 35,
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 20,
    borderRadius: 40,
    //shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#FFFFFF',
    marginTop: -2,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 71,
    height: 20,
    borderRadius: 40,
    //shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#FFFFFF',
    marginTop: -2,
  },
  buttonText: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 12.48,
    color: '#383838',
  },
  changeButton: {
    width: 312,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#4D83F4',
    marginLeft: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  cardContainer: {
    width: 312,
    height: 48,
    borderRadius: 6,
    backgroundColor: '#F2F2F2',
    marginLeft: 24,
    marginTop: 20,
    flexDirection: 'row',
  },
  card: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
  },
  cardNumber: {
    marginLeft: 70,
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 5,
    marginLeft: 24,
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(197, 197, 197, 0.8)',
  },
  textContainer2: {
    marginTop: 130,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    fontSize: 16,
    fontWeight: '700',
    color: '#C5C5C5',
    textDecorationLine: 'underline',
  },
  showTypeContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 192,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8.4,
    elevation: 5,
  },
  clearButtonContainer: {
    marginTop: 8,
    marginRight: 8,
    alignSelf: 'flex-end',
    height: 24,
    width: 24,
  },
  clearButton: {
    height: 24,
    width: 24,
  },
  imageContainer: {
    marginTop: 20,
  },
  freeContainer: {
    marginLeft: 24,
    marginBottom: 24,
    position: 'relative',
  },
  free: {
    width: 100,
    height: 20,
  },
  usualContainer: {
    marginLeft: 24,
    marginBottom: 24,
    position: 'relative',
  },
  usual: {
    width: 50,
    height: 20,
  },
  premiumContainer2: {
    marginLeft: 24,
    marginBottom: 24,
  },
  premium2: {
    width: 78,
    height: 20,
  },
  selectedBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#DBE6FD',
    zIndex: -1,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 312,
    height: 228,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitleContainer: {
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF3434',
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 18,
    fontWeight: '500',
    color: '#383838',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },
  cancelButton: {
    width: 136,
    height: 40,
    borderRadius: 38,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText1: {
    fontSize: 18,
    fontWeight: '700',
    color: '#C5C5C5',
    textAlign: 'center',
  },
  confirmButton: {
    width: 136,
    height: 40,
    borderRadius: 38,
    backgroundColor: '#FF3434',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText2: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
