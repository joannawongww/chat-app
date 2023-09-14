import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = ({ route, navigation }) => {
  const { name, color } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // brings name from StartScreen to ChatScreen
    navigation.setOptions({ title: name, });

    // set state with static message to see each element of UI displayed on screen
    setMessages([
      // User message to say hello
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
      // System message to inform user joined chat
      {
        _id: 2,
        text: 'You have joined the chat',
        createdAt: new Date(),
        system: true,
      },
    ]);

  }, []);

  {/* Function when user sends a message */ }
  const onSend = (newMessages) => {
    // append new message to original list of messages to be displayed in chat
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  }

  {/* Change speech bubble color */ }
  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#000'
        },
        left: {
          backgroundColor: '#FFF'
        }
      }}
    />
      ;
  }

  return (
    <View style={styles.container}>
      {/* Render chat interface */}
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
          name
        }}
      />
      {/* Fix android keyboard that hides message input field */}
      {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
    </View>
  )
};

const styles = StyleSheet.create({
    // allow outer view to expand 100% of screen
  container: {
    flex: 1
  }
});

export default ChatScreen;