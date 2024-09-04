import React, {useEffect, useRef, useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import CameraIcon from '@/components/icon/chatting/CameraIcon';
import AiIcon from '@/components/icon/chatting/AiIcon';
import SendIcon from '@/components/icon/chatting/SendIcon';
import SockJS from 'sockjs-client';
import {Stomp} from '@stomp/stompjs';
import {BASE_URL} from '@/util/base_url';
import {getChatRoomId} from '@/api/getChatRoomId';
import {getLoveChat} from '@/api/getLoveChat';

export const ChatInput = ({setReceiveMsg}) => {
  const [inputValue, setInputValue] = useState('');
  const [chatRoomId, setChatRoomId] = useState('');
  const client = useRef(null);

  useEffect(() => {
    connectWebSocket();
    return () => {
      if (client.current) {
        client.current.disconnect();
        console.log('websocket disconnected');
      }
    };
  }, []);

  //websocket 연결 & 채팅방 구독
  const connectWebSocket = async () => {
    try {
      const chatRoomIdData = await getChatRoomId();
      setChatRoomId(chatRoomIdData);
      const socket = new SockJS(`${BASE_URL}/ws`);
      const stompClient = Stomp.over(() => socket);

      stompClient.connect(
        {},
        () => {
          client.current = stompClient;

          client.current.subscribe(`/sub/${chatRoomIdData}`, message => {
            //var receive = JSON.parse(message.body);
            setReceiveMsg(message.body);
          });
        },
        error => {
          console.log('websocket connection error: ', error);
        },
      );
    } catch (error) {
      console.log('Error fetching chat room ID:', error);
    }
  };

  const sendMessage = inputValue => {
    if (inputValue && client.current) {
      const message = {
        contentType: 'text',
        content: inputValue,
        chatRoomId: chatRoomId,
      };

      client.current.send('/pub/message', {}, JSON.stringify(message));
      console.log('전송완료');
      setInputValue('');
    }
  };

  const handleAiToggle = async () => {
    const loveChat = await getLoveChat(inputValue);
    sendMessage(loveChat);
  };

  return (
    <View style={styles.mainContainer}>
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
          <TouchableOpacity onPress={() => sendMessage(inputValue)}>
            <SendIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 1,
  },

  container: {
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
