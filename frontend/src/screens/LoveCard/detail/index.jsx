import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  ScrollView,
} from 'react-native';
import SendInfo from '../../../components/features/LoveCard/detail/sendInfo';
import TodayReceiveCard from '../../../components/features/LoveCard/detail/todayReceiveCard';
import MonthReceiveCard from '../../../components/features/LoveCard/detail/monthReceiveCard';
import clearbtn2 from '@assets/images/button/clearbtn2.png';
import {BlurView} from '@react-native-community/blur';
import SaveBtn from '../../../components/icon/LoveCard/SaveBtn';
import Header from '../../../components/features/Layout/Header';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '@/util/base_url';
import {getTodayCards} from '@/api/getTodayCards';
import {getMonthCards} from '@/api/getMonthCards';

import * as RNFS from 'react-native-fs';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

export default function LoveCardDetailScreen({route, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');
  const [todayCards, setTodayCards] = useState([]);
  const [monthCards, setMonthCards] = useState([]);

  const {name, image, userId} = route.params;

  useFocusEffect(
    useCallback(() => {
      console.log('detail focus');

      axios
        .get(`${BASE_URL}/api/vi/lovecards/familys/${userId}`)
        .then(response => {
          const receiveCardsData = response.data.result.content;

          const todayCardsData = getTodayCards(receiveCardsData);
          const monthCardsData = getMonthCards(receiveCardsData);
          setTodayCards(todayCardsData);
          setMonthCards(monthCardsData);
        })
        .catch(error => {
          console.log('fetch receive cards failed', error);
        });
    }, []),
  );

  const handleCardClick = card => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const handleCancelClick = () => {
    setModalVisible(false);
  };

  const handleSaveClick = () => {
    handleSaveImage();
  };

  const handleSaveImage = async () => {
    try {
      const fileName = selectedCard.image_url.split('/').pop();
      const localFilePath = `file:///data/user/0/com.familing/cache/${new Date().getTime()}_${fileName}`;

      await RNFS.downloadFile({
        fromUrl: selectedCard.image_url,
        toFile: localFilePath,
      }).promise;

      await CameraRoll.saveAsset(localFilePath, {type: 'photo'});

      setConfirmationVisible(true);
      setTimeout(() => {
        setConfirmationVisible(false);
      }, 1000);
    } catch (error) {
      console.error('Failed to save image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="내가 받은 애정 카드" navigation={navigation} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <SendInfo image={image} name={name} />
        <TodayReceiveCard
          todayCards={todayCards}
          handleCardClick={handleCardClick}
        />
        <MonthReceiveCard
          monthCards={monthCards}
          handleCardClick={handleCardClick}
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
          <TouchableOpacity style={styles.button} onPress={handleCancelClick}>
            <Image style={styles.clearbtn2} source={clearbtn2} />
          </TouchableOpacity>

          <View>
            <TouchableOpacity onPress={handleSaveClick} style={styles.saveBtn}>
              <SaveBtn />
            </TouchableOpacity>
            <View style={styles.modalImage}>
              <Image
                style={styles.modalImage}
                source={{uri: selectedCard.image_url}}
              />
            </View>
          </View>
        </View>

        {confirmationVisible && (
          <View style={styles.confirmationContainer}>
            <Text style={styles.confirmationText}>
              <Text style={styles.boldText}>갤러리</Text>에
              <Text style={styles.boldText}>저장</Text>
              되었습니다.
            </Text>
          </View>
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  button: {
    position: 'absolute',
    top: 20,
    left: 24,
  },
  saveImg: {
    width: 38,
    height: 38,
  },
  saveBtn: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  clearbtn2: {
    width: 24,
    height: 24,
  },
  modalImage: {
    width: 264,
    height: 394,
  },
  confirmationContainer: {
    width: 312,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#383838',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    zIndex: 2,
    position: 'absolute',
    top: '50%',
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
  space: {
    height: 64,
    width: '100%',
  },
});
