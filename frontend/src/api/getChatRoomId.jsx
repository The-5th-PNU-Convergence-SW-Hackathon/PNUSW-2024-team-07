import {BASE_URL} from '@/util/base_url';
import axios from 'axios';
import React from 'react';

export const getChatRoomId = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/chatroom/user`);
    return response.data.result.chatRoomId;
  } catch (error) {
    console.log('get chatroom id failed ', error);
    return;
  }
};
