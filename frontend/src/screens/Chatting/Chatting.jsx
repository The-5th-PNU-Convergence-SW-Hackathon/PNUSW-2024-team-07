import SearchChatHeader from '@/components/features/Chatting/header/SearchChatHeader';
import {ChatInput} from '../../components/features/Chatting/ChatInput';
import {Message} from '../../components/features/Chatting/Message';
import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ChatHeader from '@/components/features/Chatting/header/ChatHeader';
import {getChatRoomId} from '@/api/getChatRoomId';

const messages = [
  {id: '1', text: '그럼 다음주 약속을 비워둘게요~', sender: 'son'},
  {id: '2', text: '그래, 멋진 아들', sender: 'mom'},
  {id: '3', text: '공주 스냅샷 찍은거 보니까 맛있는거 먹네.', sender: 'me'},
  {id: '4', text: '그러게요 ㅋㅋㅋㅋㅋ', sender: 'mom'},
  {id: '5', text: '너무 늦게 들어오지는 마렴', sender: 'me'},
  {id: '6', text: '위험하다.', sender: 'me'},
  {id: '7', text: '네!! 조금만 놀다가 들어갈게요.', sender: 'daughter'},
  {id: '8', text: '2024년 5월 14일 화요일', sender: 'date'},
  {
    id: '9',
    text: '오늘 학교갈려고 버스 기다리고 있는데 버스에 사람이 너무 많아서 못타고 지각 했어요ㅜㅜ',
    sender: 'son',
  },
  {
    id: '10',
    text: '하 근데 과제도 놓고와서 오늘 완전 최악이예요...',
    sender: 'son',
  },
  {
    id: '11',
    text: '아이고... 일찍 나갔는데도 못타서 속상했겠네ㅜㅜ',
    sender: 'mom',
  },
];

export default function Chatting({navigation}) {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <View style={styles.container}>
      {isSearch ? (
        <SearchChatHeader setIsSearch={setIsSearch} />
      ) : (
        <ChatHeader setIsSearch={setIsSearch} navigation={navigation} />
      )}
      <FlatList
        data={messages}
        renderItem={({item, index}) => (
          <Message
            message={item}
            key={item.key}
            showProfile={
              index === 0 || messages[index - 1].sender !== item.sender
            }
            contentContainerStyle={{paddingBottom: 56}}
          />
        )}
        keyExtractor={item => item.id}
        style={styles.messageList}
      />
      <ChatInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  messageList: {
    paddingHorizontal: 24,
  },
});
