import React from 'react';

export const getMonthCards = receiveCardsData => {
  const today = new Date();

  const oneMonthAgo = new Date(today);
  oneMonthAgo.setMonth(today.getMonth() - 1);

  const formatDate = date => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const day = ('0' + date.getDate()).slice(-2);
    return parseInt(`${year}${month}${day}`, 10);
  };

  const todayFormatted = formatDate(today);
  const oneMonthAgoFormatted = formatDate(oneMonthAgo);

  const monthCards = receiveCardsData.filter(card => {
    const cardDate = parseInt(card.localDate.replace(/-/g, ''), 10);
    return cardDate >= oneMonthAgoFormatted && cardDate < todayFormatted;
  });

  return monthCards;
};
