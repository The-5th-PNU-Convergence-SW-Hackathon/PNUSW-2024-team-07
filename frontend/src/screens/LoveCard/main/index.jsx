import React, {useState} from 'react';
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
import mom from '../../../assets/images/photocard/photocard2.png';
import son from '../../../assets/images/photocard/photocard4.png';
import daughter from '@assets/images/photocard/photocard3.png';
import {CustomHeader} from '../../../components/features/Layout/CustomHeader';

export default function LoveCardMainScreen({navigation}) {
  const [showAvatars, setShowAvatars] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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

  const handleAvatarClick = name => {
    setSelectedAvatar(name);
    setConfirmationVisible(true);
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <LoveCardBanner />
        <ReceiveCardSecton navigation={navigation} />
        <SendCardSection
          setSelectedCard={setSelectedCard}
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
          <Image source={selectedCard} style={styles.modalImage} />

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
                <SendProfile
                  name="익순여왕님"
                  image={mom}
                  handleAvatarClick={handleAvatarClick}
                />
                <SendProfile
                  name="민지공주"
                  image={daughter}
                  handleAvatarClick={handleAvatarClick}
                />
                <SendProfile
                  name="이민형"
                  image={son}
                  handleAvatarClick={handleAvatarClick}
                />
              </View>
            </ScrollView>
          </View>
        )}
      </Modal>

      {confirmationVisible && (
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>
            <Text style={styles.boldText}>{selectedAvatar}</Text>님께 전송이
            완료되었습니다.
          </Text>
        </View>
      )}
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
    borderRadius: 12,
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
    width: 312,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#383838',
  },
  confirmationText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  boldText: {
    fontWeight: '700',
  },
});
