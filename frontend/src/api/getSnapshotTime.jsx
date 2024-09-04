import {BASE_URL} from '@/util/base_url';
import axios from 'axios';
import React from 'react';

export const getSnapshotTime = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/snapshots/alarm`);
    return response.data.result;
  } catch (error) {
    console.log('get snapshot time failed ', error);
    return;
  }
};
