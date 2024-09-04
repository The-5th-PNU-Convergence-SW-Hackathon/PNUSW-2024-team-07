import {BASE_URL} from '@/util/base_url';
import axios from 'axios';
import React from 'react';

export const getStatuses = setStatuses => {
  axios
    .get(`${BASE_URL}/api/v1/statuses`)
    .then(response => {
      const data = response.data.result;
      setStatuses(data);
    })
    .catch(error => {
      console.log('get statuses failed', error);
    });
};
