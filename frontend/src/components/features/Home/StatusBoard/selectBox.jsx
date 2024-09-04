import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import selectArrow from '@assets/images/button/selectArrow.png';
import {getStatuses} from '@/api/getStatuses';
import axios from 'axios';
import {BASE_URL} from '@/util/base_url';

export default function DropdownSelectBox({
  myStatus,
  selectedItem,
  setSelectedItem,
}) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    //등록 가능 상태 조회
    getStatuses(setStatuses);
  }, []);

  const handleSelectItem = item => {
    //유저 상태변경
    axios
      .patch(`${BASE_URL}/api/v1/statuses/users`, {
        id: item.id,
      })
      .then(response => {
        console.log(response.data.result);
        setSelectedItem(item);
        setDropdownVisible(false);
      })
      .catch(error => {
        console.log('change user status failed', error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectBox}
        onPress={() => setDropdownVisible(!dropdownVisible)}>
        <View style={styles.textContainer}>
          <Text style={styles.selectedText}>{myStatus}</Text>
          <Image style={styles.arrowImg} source={selectArrow} />
        </View>
      </TouchableOpacity>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          {statuses.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.item,
                item.id === selectedItem.id && styles.selectedItem,
              ]}
              onPress={() => handleSelectItem(item)}>
              <Text
                style={[
                  styles.itemText,
                  item.id === selectedItem.id && styles.selectedItem,
                ]}>
                {item.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 100,
  },
  arrowImg: {
    width: 10,
    height: 6,
  },
  selectBox: {
    zIndex: 101,
    height: 28,
    width: 88,
    backgroundColor: '#4D83F4',
    borderRadius: 40,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  textContainer: {
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 12,
  },
  dropdown: {
    zIndex: 99,
    position: 'absolute',
    top: 14,
    width: 88,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingTop: 14,
    alignItems: 'center',
    //shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  item: {
    height: 16,
    width: 77,
    justifyContent: 'center',
    paddingVertical: 2,
    paddingLeft: 4,
    borderRadius: 2,
    marginVertical: 2,
  },
  selectedItem: {
    backgroundColor: '#DBE6FD',
  },
  itemText: {
    color: '#383838',
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 12.48,
  },
});
