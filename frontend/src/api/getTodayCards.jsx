import React from 'react';

export const getTodayCards = receiveCardsData => {
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);

  const todayFormatted = parseInt(`${year}${month}${day}`, 10);

  const todayCards = receiveCardsData.filter(card => {
    return parseInt(card.localDate.replace(/-/g, ''), 10) === todayFormatted;
  });

  return todayCards;
};
