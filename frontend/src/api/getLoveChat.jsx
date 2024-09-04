import {BASE_URL} from '@/util/base_url';
import axios from 'axios';
import React from 'react';

export const getLoveChat = async originMsg => {
  const response = await axios.post(`${BASE_URL}/api/v1/gpt/chat`, {
    message: originMsg,
  });
  const loveMsg = response.data.result.replace(/^["']|["']$/g, '');
  return loveMsg;
};
