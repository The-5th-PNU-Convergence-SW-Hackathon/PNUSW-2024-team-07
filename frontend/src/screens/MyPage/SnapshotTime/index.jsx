import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Arrow from '@assets/images/register/arrowImg.png';
import {setSnapshotTime} from '@/api/setSnapshotTime';

export default function SnapshotTimeScreen({navigation}) {
  const [selectedTime, setSelectedTime] = useState('10:00');

  const times = [
    {label: '8:00', key: '08:00'},
    {label: '9:00', key: '09:00'},
    {label: '10:00', key: '10:00'},
    {label: '11:00', key: '11:00'},
    {label: '12:00', key: '12:00'},
    {label: '13:00', key: '13:00'},
    {label: '14:00', key: '14:00'},
    {label: '15:00', key: '15:00'},
    {label: '16:00', key: '16:00'},
    {label: '17:00', key: '17:00'},
  ];

  const handleTimePress = time => {
    setSelectedTime(time);
  };

  const handleChangeTime = () => {
    setSnapshotTime({selectedTime});
    navigation.navigate('MyPage');
  };

  const renderTimeButtons = timesArray => {
    return timesArray.map(time => (
      <TouchableOpacity
        key={time.key}
        style={[
          styles.timeButton,
          selectedTime === time.key && styles.selectedTime,
        ]}
        onPress={() => handleTimePress(time.key)}>
        <Text
          style={
            selectedTime === time.key
              ? styles.selectedTimeText
              : styles.defaultText
          }>
          {time.label}
        </Text>
      </TouchableOpacity>
    ));
  };

  const renderTimeRows = timesArray => {
    const rows = [];
    for (let i = 0; i < timesArray.length; i += 3) {
      rows.push(
        <View style={styles.timeRow} key={i}>
          {renderTimeButtons(timesArray.slice(i, i + 3))}
        </View>,
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Arrow} style={styles.arrowImage} />
        </TouchableOpacity>
        <Text style={styles.title}>스냅샷 시간 설정</Text>
      </View>
      <Text style={styles.subtitle}>주제 알림 받을 시간</Text>

      <ScrollView>
        <View style={styles.sectionBox1}>
          <Text style={styles.sectionTitle1}>• </Text>
          <Text style={styles.sectionTitle2}>오전</Text>
        </View>
        {renderTimeRows(times.slice(0, 4))}
        <View style={styles.sectionBox1}>
          <Text style={styles.sectionTitle1}>•</Text>
          <Text style={styles.sectionTitle2}>오후</Text>
        </View>
        {renderTimeRows(times.slice(4))}
      </ScrollView>
      <TouchableOpacity style={styles.changeButton} onPress={handleChangeTime}>
        <Text style={styles.buttonText}>변경하기</Text>
      </TouchableOpacity>
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
    gap: 75,
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
  subtitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#383838',
    marginTop: 50,
    marginLeft: 24,
  },
  sectionBox1: {
    flexDirection: 'row',
    gap: 4,
    marginTop: 10,
    marginLeft: 24,
  },
  sectionTitle1: {
    fontSize: 20,
    color: '#383838',
    lineHeight: 25,
  },
  sectionTitle2: {
    fontSize: 16,
    fontWeight: '700',
    color: '#383838',
  },
  sectionBox2: {
    width: 36,
    height: 20,
    flexDirection: 'row',
    gap: 4,
  },
  changeButton: {
    width: 312,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#4D83F4',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 24,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  timeButton: {
    width: 100,
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTime: {
    width: 100,
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4D83F4',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultTime: {
    fontSize: 16,
    fontWeight: '400',
    color: '#C5C5C5',
    textAlign: 'center',
  },
  selectedTimeText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4D83F4',
    textAlign: 'center',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    marginHorizontal: 25,
  },
});
