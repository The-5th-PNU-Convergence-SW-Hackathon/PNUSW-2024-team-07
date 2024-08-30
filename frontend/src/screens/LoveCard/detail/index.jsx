import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  ScrollView,
  // PermissionsAndroid,
  // Platform,
  // NativeModules,
} from 'react-native';
import SendInfo from '../../../components/features/LoveCard/detail/sendInfo';
import TodayReceiveCard from '../../../components/features/LoveCard/detail/todayReceiveCard';
import MonthReceiveCard from '../../../components/features/LoveCard/detail/monthReceiveCard';
import clearbtn2 from '@assets/images/button/clearbtn2.png';
import {BlurView} from '@react-native-community/blur';
import SaveBtn from '../../../components/icon/LoveCard/SaveBtn';
import Header from '../../../components/features/Layout/Header';
// import * as RNFS from 'react-native-fs';

export default function LoveCardDetailScreen({route, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const {name, image} = route.params;

  const handleCardClick = card => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const handleCancelClick = () => {
    setModalVisible(false);
  };

  const handleSaveClick = () => {
    setConfirmationVisible(true);
  };

  // const handleSaveImage = async selectedCard => {
  //   console.log('image url', selectedCard.toString());
  //   try {
  //     // 이미지를 로컬 파일로 다운로드합니다.

  //     const localFile = `${RNFS.DocumentDirectoryPath}/${selectedCard.toString()}.png`;
  //     const options = {
  //       fromUrl: selectedCard,
  //       toFile: localFile,
  //     };
  //     await RNFS.downloadFile(options).promise;

  //     // 갤러리에 저장하기 전에 권한 요청
  //     const {status} = await MediaLibrary.requestPermissionsAsync();
  //     if (status !== 'granted') {
  //       Alert.alert(
  //         'Permissions Not Granted',
  //         'Gallery access is needed to save the image.',
  //       );
  //       return;
  //     }

  //     // MediaLibrary를 사용하여 이미지 저장
  //     const asset = await MediaLibrary.createAssetAsync(localFile);
  //     const album = await MediaLibrary.getAlbumAsync('Download');
  //     if (album == null) {
  //       await MediaLibrary.createAlbumAsync('Download', asset, false);
  //     } else {
  //       await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
  //     }

  //     Alert.alert('Image Saved to Gallery');
  //   } catch (error) {
  //     console.error(error);
  //     Alert.alert('Failed to save image');
  //   }
  // };

  return (
    <View style={styles.container}>
      <Header title="내가 받은 애정 카드" />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <SendInfo image={image} name={name} />
        <TodayReceiveCard handleCardClick={handleCardClick} />
        <MonthReceiveCard handleCardClick={handleCardClick} />
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
              <Image style={styles.modalImage} source={selectedCard} />
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
