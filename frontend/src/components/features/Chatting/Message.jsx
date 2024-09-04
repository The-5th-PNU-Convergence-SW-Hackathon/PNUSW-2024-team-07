import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const Message = ({message, showProfile}) => {
  if (message.senderId === 'date') {
    return (
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{message.sendDate}</Text>
      </View>
    );
  } else if (message.isMine) {
    return (
      <View key={message.id} style={[styles.bubbleContainer, styles.myBubble]}>
        <Text style={[styles.messageText, styles.myText]}>
          {message.content}
        </Text>
      </View>
    );
  } else if (!message.isMine) {
    return (
      <View key={message.id} style={styles.otherContainer}>
        {showProfile ? (
          <Image
            source={{uri: message.senderProfileImg}}
            style={styles.profileImg}
          />
        ) : (
          <View style={styles.profileImg} />
        )}

        <View
          key={message.id}
          style={[styles.bubbleContainer, styles.otherBubble]}>
          <Text style={[styles.messageText, styles.otherText]}>
            {message.content}
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  bubbleContainer: {
    display: 'flex',
    maxWidth: 273.72,
    borderRadius: 6,
    padding: 12.86,
  },
  profileImg: {
    zIndex: 99,
    width: 44,
    height: 44,
  },
  myBubble: {
    marginTop: 7.81,
    backgroundColor: '#4D83F4',
    alignSelf: 'flex-end',
  },
  otherBubble: {
    marginLeft: -6,
    backgroundColor: '#F8F8F8',
    alignSelf: 'flex-start',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  otherContainer: {
    marginTop: 12.28,
    display: 'flex',
    flexDirection: 'row',
  },
  messageText: {
    flexWrap: 'wrap',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14.98,
  },
  myText: {
    color: '#F8F8F8',
  },
  otherText: {
    color: '#383838',
  },
  dateContainer: {
    alignSelf: 'center',
    marginTop: 28.45,
    marginBottom: 16.17,
  },
  dateText: {
    color: '#B3B3B3',
    fontSize: 12,
    fontWeight: '600',
  },
});
