import SearchChatHeader from '@/components/features/Chatting/header/SearchChatHeader';
import {ChatInput} from '../../components/features/Chatting/ChatInput';
import {Message} from '../../components/features/Chatting/Message';
import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ChatHeader from '@/components/features/Chatting/header/ChatHeader';
import {getChatList} from '@/api/getChattingList';

export default function Chatting({navigation}) {
  const [isSearch, setIsSearch] = useState(false);
  const [messageList, setMessageList] = useState({});
  const [receiveMsg, setReceiveMsg] = useState();
  const flatListRef = useRef(null);

  useEffect(() => {
    fetchChatting();
  }, [receiveMsg]);

  const fetchChatting = async () => {
    const messages = await getChatList();
    setMessageList(messages);
  };

  return (
    <View style={styles.container}>
      {isSearch ? (
        <SearchChatHeader setIsSearch={setIsSearch} />
      ) : (
        <ChatHeader setIsSearch={setIsSearch} navigation={navigation} />
      )}
      <FlatList
        ref={flatListRef}
        data={messageList}
        renderItem={({item, index}) => (
          <Message
            message={item}
            showProfile={
              index === 0 || messageList[index - 1].senderId !== item.senderId
            }
            contentContainerStyle={{paddingBottom: 0}}
          />
        )}
        keyExtractor={item => item.id.toString()}
        style={styles.messageList}
        onContentSizeChange={() =>
          flatListRef.current.scrollToEnd({animated: false})
        }
        initialNumToRender={10}
        maxToRenderPerBatch={10}
      />
      <ChatInput setReceiveMsg={setReceiveMsg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  messageList: {
    flexGrow: 1,
    paddingHorizontal: 24,
    bottom: 61,
  },
});
