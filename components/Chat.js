import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = ({ route, navigation }) => {
  const { name, color } = route.params;
  const [messages, setMessages] = useState([]);

  {/* Function called when user sends a message */ }
  const onSend = (newMessages) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  }

  {/* Function called after mount Chat component */ }
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []),

    {/* Brings name from StartScreen to ChatScreen */ }
  useEffect(() => {
    navigation.setOptions({ title: name, });
  }, []);


  return (

    <View style={styles.container}>
      {/* Render chat interface */}
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{ _id: 1, }}
      />
      {/* Fix android keyboard that hides message input field */}
      {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ChatScreen;