import {BASE_URL} from '@/util/base_url';
import axios from 'axios';
import React from 'react';

export const getSendLoveCard = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/vi/lovecards`);
    return response.data.result.content;
  } catch (error) {
    console.log('get send loveCard failed ', error);
    return;
  }
};
