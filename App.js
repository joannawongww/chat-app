import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './components/Start';
import ChatScreen from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// create navigator
const Stack = createNativeStackNavigator();

const App = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCMizStsZyvnRtJwmCT2EFxMIFtYtyaz30",
        authDomain: "chat-app-34b05.firebaseapp.com",
        projectId: "chat-app-34b05",
        storageBucket: "chat-app-34b05.appspot.com",
        messagingSenderId: "1045297354032",
        appId: "1:1045297354032:web:99b75365e3c61eb50d24f5"
    };

    // initialise firebase
    const app = initializeApp(firebaseConfig);

    // initial Cloud firestore and get reference to server
    const db = getFirestore(app);

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='StartScreen'>
        <Stack.Screen name='StartScreen' component={StartScreen} />
        <Stack.Screen name='ChatScreen'>
            {props => <ChatScreen db={db} {...props} />}
        </Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;