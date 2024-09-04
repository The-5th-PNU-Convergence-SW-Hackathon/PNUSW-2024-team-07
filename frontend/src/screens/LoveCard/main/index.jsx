import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import LoveCardBanner from '../../../components/features/LoveCard/main/Banner/LoveCardBanner';
import ReceiveCardSecton from '../../../components/features/LoveCard/main/ReceiveCardSection/ReceiveCardSecton';
import SendCardSection from '../../../components/features/LoveCard/main/SendCardSection/SendCardSection';
import {BlurView} from '@react-native-community/blur';
import SendProfile from '../../../components/features/LoveCard/main/SendCardSection/SendProfile';
import {CustomHeader} from '../../../components/features/Layout/CustomHeader';
import {BASE_URL} from '@/util/base_url';
import axios from 'axios';

export default function LoveCardMainScreen({navigation}) {
  const [showAvatars, setShowAvatars] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [familiy, setFamily] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/family`)
      .then(res => {
        const familiyData =
          res.data.result.family_users_dto.family_user_dto_list;
        setFamily(familiyData);
        console.log('가족 로드');
      })
      .catch(error => {
        console.log('get familiy list failed ', error);
      });
  }, []);

  const handleSendClick = () => {
    setShowAvatars(true);
  };

  const handleCancelClick = () => {
    setModalVisible(false);
    setShowAvatars(false);
  };

  const handlePopupCancelClick = () => {
    setShowAvatars(false);
  };

  //가족에게 전송
  const handleAvatarClick = (name, userId) => {
    setSelectedAvatar(name);

    axios
      .post(`${BASE_URL}/api/vi/lovecards/familys/${userId}`, {
        card_id: selectedCardId,
      })
      .then(response => {
        console.log(response.data.result);
        setConfirmationVisible(true);
      })
      .catch(error => {
        console.log('Lovecard send failed', error);
      });

    setTimeout(() => {
      setConfirmationVisible(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <LoveCardBanner />
        <ReceiveCardSecton familiy={familiy} navigation={navigation} />
        <SendCardSection
          setSelectedCard={setSelectedCard}
          setSelectedCardId={setSelectedCardId}
          setModalVisible={setModalVisible}
        />
        <View style={styles.space} />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={3}
            overlayColor="rgba(65, 65, 65, 0.7)"
          />
          <Image source={{uri: selectedCard}} style={styles.modalImage} />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleSendClick}
              style={styles.sendButton}>
              <Text style={styles.sendButtonText}>가족에게 보내기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCancelClick}
              style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>취소</Text>
            </TouchableOpacity>
          </View>

          {showAvatars && (
            <View style={styles.avatarContainer}>
              <TouchableOpacity
                style={styles.clearButtonContainer}
                onPress={handlePopupCancelClick}>
                <Image
                  style={styles.clearButton}
                  source={require('../../../assets/images/button/clearbtn.png')}
                />
              </TouchableOpacity>
              <ScrollView
                horizontal
                style={styles.profileContainer}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.avatarBox}>
                  {familiy.map(person => (
                    <SendProfile
                      key={person.username}
                      userId={person.username}
                      name={person.nickName}
                      image={person.profileImg}
                      handleAvatarClick={handleAvatarClick}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>
          )}

          {confirmationVisible && (
            <View style={styles.confirmationContainer}>
              <View style={styles.innerWrapper}>
                <Text style={styles.boldText}>{selectedAvatar}</Text>
                <Text style={styles.confirmationText}>
                  님께 전송이 완료되었습니다.
                </Text>
              </View>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  space: {
    height: 64,
    width: '100%',
  },
  container: {
    backgroundColor: '#fff',
  },
  profileContainer: {
    marginTop: 10,
  },
  modalContainer: {
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
  modalImage: {
    width: 264,
    height: 394,
    marginBottom: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 156,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#4D83F4',
  },
  sendButtonText: {
    fontSize: 14,
    lineHeight: 17.47,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 156,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
  },
  cancelButtonText: {
    fontSize: 14,
    lineHeight: 17.47,
    fontWeight: '700',
    color: '#383838',
  },
  avatarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 172,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
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
  avatarBox: {
    flexDirection: 'row',
    gap: 16,
    marginLeft: 24,
  },
  confirmationContainer: {
    position: 'absolute',
    bottom: 60,
    width: 312,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#383838',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWrapper: {
    flexDirection: 'row',
  },
  confirmationText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  boldText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
