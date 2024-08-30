import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import infoIcon from '@assets/images/chatting/infoIcon.png';
import CameraIcon from '@/components/icon/chatting/CameraIcon';
import AiIcon from '@/components/icon/chatting/AiIcon';
import SendIcon from '@/components/icon/chatting/SendIcon';

export const ChatInput = () => {
  const [isSelectVisible, setisSelectVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('원문');

  const selectOriginal = () => {
    setSelected('원문');
  };

  const selectLovebot = () => {
    setSelected('애정 봇');
    setInputValue('우리 아들 괜찮아.');
  };

  const selectSympathybot = () => {
    setSelected('공감 봇');
  };

  const handleAiToggle = () => {
    setisSelectVisible(!isSelectVisible);
  };

  return (
    <>
      {isSelectVisible && (
        <View style={styles.selectContainer}>
          <View style={styles.btnFlex}>
            <Image style={styles.infoImage} source={infoIcon} />
            <View style={styles.btnWrapper}>
              <TouchableOpacity
                style={
                  selected === '원문' ? styles.selectedBtn : styles.grayBtn
                }
                onPress={selectOriginal}>
                <Text
                  style={
                    selected === '원문' ? styles.selectedText : styles.grayText
                  }>
                  원문
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  selected === '애정 봇' ? styles.selectedBtn : styles.grayBtn
                }
                onPress={selectLovebot}>
                <Text
                  style={
                    selected === '애정 봇'
                      ? styles.selectedText
                      : styles.grayText
                  }>
                  애정 봇
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  selected === '공감 봇' ? styles.selectedBtn : styles.grayBtn
                }
                onPress={selectSympathybot}>
                <Text
                  style={
                    selected === '공감 봇'
                      ? styles.selectedText
                      : styles.grayText
                  }>
                  공감 봇
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      <View style={styles.container}>
        <View style={styles.assetsContainer}>
          <TouchableOpacity>
            <CameraIcon />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={text => setInputValue(text)}
            placeholder="메세지를 입력해주세요."
            placeholderTextColor="#CBCBCB"
          />
        </View>
        <View style={styles.assetsContainer}>
          <TouchableOpacity onPress={handleAiToggle}>
            <AiIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <SendIcon />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  selectContainer: {
    position: 'absolute',
    flex: 1,
    alignSelf: 'center',
    bottom: 27,
    height: 60,
    width: 312,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#ffffff',
    // shadow
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 2,
  },
  btnFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginTop: 8,
    gap: 14,
  },
  btnWrapper: {
    flexDirection: 'row',
    gap: 6,
  },
  infoImage: {
    width: 16,
    height: 16,
  },
  selectedBtn: {
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#383838',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
  },
  selectedText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.98,
    color: '#383838',
  },
  grayBtn: {
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#EEEEEE',
  },
  grayText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.98,
    color: '#C5C5C5',
  },
  container: {
    position: 'relative',
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 312,
    height: 40,
    borderRadius: 35,
    backgroundColor: '#FDFDFD',
    paddingHorizontal: 4,
    paddingVertical: 3,
    //shadow
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: 3.77,
    elevation: 2,
  },
  assetsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  input: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14.98,
    color: '#383838',
  },
});
