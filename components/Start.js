import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";

const image = require("../img/background-image.png");

// 4 background color code
const backgroundColors = {
  a: "#6B6B6B",
  b: "#757083",
  c: "#8A95A5",
  d: "#B9C6AE",
};

const StartScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState(backgroundColors);

  // sign in anonymous
    const auth = getAuth();
    const signInUser = () => {
        signInAnonymously(auth)
            .then((result) => {
                navigation.navigate('ChatScreen', { userID: result.user.uid, name:name, color: color });
                Alert.alert("Signed in successfully");
            })
            .catch((error) => {
                Alert.alert("Unable to sign in, try later again.")
            })
    }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.appTitle}>Chat-App</Text>

        {/* For user to enter name */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Your Name"
          />

          {/* 4 background colors button */}
          <Text style={styles.textColorSelector}>Choose Background Color:</Text>
          <View style={styles.colorSelector}>
            <TouchableOpacity
              style={[
                styles.circle,
                color === backgroundColors.a && styles.selectedCircle,
                { backgroundColor: backgroundColors.a },
              ]}
              onPress={() => setColor(backgroundColors.a)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.circle,
                color === backgroundColors.b && styles.selectedCircle,
                { backgroundColor: backgroundColors.b },
              ]}
              onPress={() => setColor(backgroundColors.b)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.circle,
                color === backgroundColors.c && styles.selectedCircle,
                { backgroundColor: backgroundColors.c },
              ]}
              onPress={() => setColor(backgroundColors.c)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.circle,
                color === backgroundColors.d && styles.selectedCircle,
                { backgroundColor: backgroundColors.d },
              ]}
              onPress={() => setColor(backgroundColors.d)}
            ></TouchableOpacity>
          </View>

          {/* button to navigate to chatscreen */}
          <TouchableOpacity
            style={styles.button}
            onPress={signInUser}
          >
            <Text style={styles.buttonText}>Start Chatting!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Fix iOS keyboard that block name and background color picker */}
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  // background image
  image: {
    flex: 1,
    justifyContent: "space-between",
    padding: "6%",
  },
  appTitle: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFF",
    alignSelf: "center",
  },
  // outer view for user enter name
  inputContainer: {
    backgroundColor: "#FFF",
    padding: "6%",
    paddingBottom: 30,
  },
  textInput: {
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
  },
  // button navigate to ChatScreen
  button: {
    backgroundColor: "#757083",
    padding: 15,
    alignContent: "center",
  },
  // text of button navigate to ChatScreen
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    textAlign: "center",
  },
  // 4 background color circle
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  // when select background color
  selectedCircle: {
    borderWidth: 3,
    borderColor: "pink",
    padding: 3,
  },
  // text of 'choose background color'
  textColorSelector: {
    fontSize: 16,
    fontWeight: "300",
    color: "#8A95A5",
    marginBottom: 10,
  },
  // outer view of 4 background color circle
  colorSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 20,
  },
});

export default StartScreen;
