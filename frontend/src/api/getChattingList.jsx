import {BASE_URL} from '@/util/base_url';
import axios from 'axios';
import React from 'react';

export const getChatList = async () => {
  try {
    const response = await axios(`${BASE_URL}/api/v1/chatroom/message`);
    return response.data.result.chatList;
  } catch (error) {
    console.log('load chat list failed ', error);
  }
};
