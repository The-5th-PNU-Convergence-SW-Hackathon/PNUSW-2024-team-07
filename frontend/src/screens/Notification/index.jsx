import React, {useCallback, useState} from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Arrow from '@assets/images/register/arrowImg.png';
import {BASE_URL} from '@/util/base_url';
import {useFocusEffect} from '@react-navigation/native';

export default function NotificationPage({navigation}) {
  const [yesterdayNotifications, setYesterdayNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState([]);
  const [sevendayNotifications, setSevendayNotifications] = useState([]);

  useFocusEffect(
    useCallback(() => {
      fetchNotification();
    }, []),
  );

  const fetchNotification = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/alarms`);
      const data = response.data;
      // const unread = data.result.unread.filter(item => !item.is_read);
      // const yesterday = data.result.yesterday.filter(item => item.is_read);
      // const sevenday = data.result.sevenday.filter(item => item.is_read);

      setYesterdayNotifications(data.result.unread);
      setUnreadNotifications(data.result.yesterday);
      setSevendayNotifications(data.result.sevenday);
    } catch (error) {
      console.error(error);
    }
  };

  const renderNotificationItem = ({item}) => (
    <View style={styles.notificationItem}>
      <Image source={{uri: item.alarm_img}} style={styles.notificationImage} />
      <Text style={styles.notificationText}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Arrow} style={styles.arrowImage} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>알림</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>읽지 않음</Text>
      </View>
      <FlatList
        data={unreadNotifications}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id.toString()}
      />

      <View style={styles.separator} />

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>어제</Text>
      </View>
      <FlatList
        data={yesterdayNotifications}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id.toString()}
      />

      <View style={styles.separator} />

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>최근 7일</Text>
      </View>
      <FlatList
        data={sevendayNotifications}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    gap: 118,
    marginTop: 20,
  },
  arrowImage: {
    width: 20,
    height: 15,
    marginLeft: 24,
  },
  titleContainer: {
    marginBottom: 25,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#383838',
    textAlign: 'center',
  },
  separator: {
    width: 390,
    height: StyleSheet.hairlineWidth,
    borderTopWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: 10,
    marginBottom: 20,
    opacity: 1,
  },
  sectionContainer: {
    marginLeft: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
  },
  notificationItem: {
    marginLeft: 24,
    marginBottom: 5,
  },
  notificationImage: {
    width: 42,
    height: 42,
    marginRight: 5,
  },
  notificationText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#383838',
  },
});
