import {BASE_URL} from '@/util/base_url';
import axios from 'axios';
import React from 'react';

export const setSnapshotTime = async ({selectedTime}) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/snapshots/alarm?time=${selectedTime}`,
    );
    console.log('snapshot time ', response.data.result);
  } catch (error) {
    console.log('get snapshot time failed ', error);
    return;
  }
};
