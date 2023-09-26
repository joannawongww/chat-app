# Chat-App

## Description

To build a chat app for mobile devices using React Native.  
App will provide users with a chat interface and options to share images and their location.

## Features

- Users can enter their name and choose a background color for chat screen before joining the chat.
- A page displaying conversation, as well as an input field and submit button.
- Provides 2 communication features: sending images and location data.
- Data gets stored both online and offline.

## Dependencies

- React Native
- Expo
- GiftedChat
- Google Firestore Database
- Firebase Cloud Storage
- AsyncStorage
- Expo ImagePicker & Expo Location

## Setting up development environment

1. Expo

- Set up an Expo account
- Install Expo CLI `npm install -g expo-cli`

2. Android Studio

- For Android simulator

## Database Configuration

1. Go to Firebase Console and create new project.
2. Under 'Rules' tab, change rule: "allow read write: if true"
3. Set up Firebase Authentication & Firebase Database - anonymous authentication used for this app
4. Obtain own firebase configuration object for project
5. In App.js, replace firebaseConfig object with own Firebase configuration obtained in Step 4.

## Running the app

`git clone https://github.com/joannawongww/chat-app`  
`cd [PROJECT_FOLDER_NAME]`  
`npm install @react-native-async-storage/async-storage @react-native-community/netinfo @react-navigation/native @react-navigation/native-stack expo firebase react-native react-native-gifted-chat react-native-safe-area-context react-native-screens expo-image-picker expo-location react-native-maps`
`expo start`
