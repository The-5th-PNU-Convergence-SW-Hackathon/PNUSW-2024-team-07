import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import switchbtn from '@assets/images/button/switchbtn.png';
import arrowbtn from '@assets/images/button/arrowbtn.png';
import axios from 'axios';
import {BASE_URL} from '@/util/base_url';
import ChangeProfile from '@/components/common/ChangeProfile';
import {useFocusEffect} from '@react-navigation/native';

export default function MyPage({navigation}) {
  const [alertVisible, setAlertVisible] = useState(false);
  const [nickname, setNickname] = useState('');
  const [realname, setRealname] = useState('');
  const [profile, setProfile] = useState('');

  useFocusEffect(
    useCallback(() => {
      fetchUserData();
      fetchNickname();
    }, [profile]),
  );

  const fetchNickname = async () => {
    const storedNickname = await AsyncStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/user`);
      setNickname(response.data.result.nickname);
      setRealname(response.data.result.realname);
      setProfile(response.data.result.image_url);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>마이페이지</Text>
      </View>
      <TouchableOpacity
        style={styles.profileImageContainer}
        onPress={() => setAlertVisible(true)}>
        <Image style={styles.profileImage1} source={{uri: profile}} />
        <Image style={styles.profileImage2} source={switchbtn} />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <View style={styles.nicknameContainer}>
          <Text style={styles.nicknameTitle1}>닉네임</Text>
          <Text style={styles.nicknameText1}>{nickname}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('NicknameScreen')}>
            <Image style={styles.arrowButton1} source={arrowbtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.separator1} />
        <View style={styles.nameContainer}>
          <Text style={styles.nicknameTitle2}>이름</Text>
          <Text style={styles.nicknameText2}>{realname}</Text>
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

      <ChangeProfile
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        setImageSelected={setProfile}
      />
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
    borderRadius: 50,
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
    position: 'absolute',
    marginTop: 21,
    marginLeft: 10,
  },
  nicknameText1: {
    fontSize: 16,
    fontWeight: '400',
    color: '#B3B3B3',
    marginTop: 21,
    marginLeft: 220,
  },
  arrowButton1: {
    width: 18,
    height: 18,
    position: 'absolute',
    top: 23,
    left: 10,
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
