import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Clipboard from '@react-native-clipboard/clipboard';
import Arrow from '@assets/images/register/arrowImg.png';
import CopyImage from '@assets/images/register/copyimage.png';
import PhotoCard1 from '@assets/images/photocard/photocard1.png';
import PhotoCard2 from '@assets/images/photocard/photocard2.png';
import PhotoCard3 from '@assets/images/photocard/photocard3.png';
import PhotoCard4 from '@assets/images/photocard/photocard4.png';
import {BASE_URL} from '@/util/base_url';

export default function MyFamilyScreen({navigation}) {
  const [inviteCode, setInviteCode] = useState(null);

  useEffect(() => {
    const fetchInviteCode = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/family`);
        setInviteCode(response.data.code);
        Clipboard.setString(response.data.inviteCode);
      } catch (error) {
        Alert.alert('초대 코드를 가져오는 데 실패했습니다.');
        console.error(error);
      }
    };
    fetchInviteCode();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Arrow} style={styles.arrowImage} />
        </TouchableOpacity>
        <Text style={styles.title}>우리 가족</Text>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.subtitle1}>가족 코드</Text>
      </View>

      <View style={styles.inviteContainer}>
        {/* <View style={styles.codeBox}>
          <Text style={styles.code}>YXKRN8QS</Text>
        </View> */}
        <Text style={styles.inviteTitle}>{inviteCode}</Text>
        <TouchableOpacity onPress={setInviteCode} style={styles.copyContainer}>
          <View style={styles.copyContainer}>
            <Image source={CopyImage} style={styles.copyImage} />
            <Text style={styles.copyText}>초대 코드 복사하기</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.subContainer2}>
        <Text style={styles.subtitle2}>가족 목록</Text>
      </View>

      <View style={styles.familylistContainer}>
        <View style={styles.list1}>
          <Image source={PhotoCard1} style={styles.listImage} />
          <View style={styles.listTextContainer}>
            <Text style={styles.listText}>행복한 부자아빠</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.list2}>
          <Image source={PhotoCard2} style={styles.listImage} />
          <View style={styles.listTextContainer}>
            <Text style={styles.listText}>익순여왕님</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.list3}>
          <Image source={PhotoCard3} style={styles.listImage} />
          <View style={styles.listTextContainer}>
            <Text style={styles.listText}>민지 공주</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.list4}>
          <Image source={PhotoCard4} style={styles.listImage} />
          <View style={styles.listTextContainer}>
            <Text style={styles.listText}>이민형</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  arrowImage: {
    width: 20,
    height: 15,
    marginLeft: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 90,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
  },
  subContainer: {
    marginLeft: 24,
    marginTop: 40,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
  },
  inviteContainer: {
    width: 312,
    height: 80,
    flexDirection: 'column',
    backgroundColor: '#E7E7E7',
    marginTop: 10,
    marginLeft: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviteTitle: {
    fontSize: 20,
    fontWieght: '800',
    color: '#383838',
  },
  codeBox: {
    marginBottom: 5,
  },
  code: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
  },
  copyContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  copyImage: {
    width: 10,
    height: 12,
    marginTop: 3,
  },
  copyText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(179, 179, 179, 0.6)',
  },
  subContainer2: {
    marginLeft: 24,
    marginTop: 30,
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
  },
  familylistContainer: {
    flexDirection: 'column',
    gap: 8,
    marginTop: 10,
    marginLeft: 24,
  },
  list1: {
    width: 143,
    height: 38,
    flexDirection: 'row',
    gap: 16,
  },
  listImage: {
    width: 38,
    height: 38,
  },
  listTextContainer: {
    marginTop: 8,
  },
  listText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#383838',
  },
  separator: {
    width: 310,
    height: StyleSheet.hairlineWidth,
    borderTopWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: 2,
    opacity: 1,
  },
  list2: {
    width: 116,
    height: 38,
    flexDirection: 'row',
    gap: 16,
  },
  list3: {
    flexDirection: 'row',
    gap: 16,
  },
  list4: {
    width: 91,
    height: 38,
    flexDirection: 'row',
    gap: 16,
  },
});
