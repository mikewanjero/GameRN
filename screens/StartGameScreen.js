import { StyleSheet, View, Text, Button, TextInput, Alert } from "react-native";
import MainButton from "../components/MainButton";
import { useState } from "react";
import { Colors } from "../defaults/colors";

export default function StartGameScreen({ onPickNumber }) {
  const [newNum, setNewNum] = useState("");

  function numInputHandler(inputText) {
    setNewNum(inputText);
  }

  function resetInputHandler() {
    setNewNum("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(newNum);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Number range of 1 and 99!", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={Styles.inputContainer}>
      <TextInput
        style={Styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numInputHandler}
        value={newNum}
      />
      <View style={Styles.buttonsPosition}>
        <View style={Styles.buttonPosition}>
          <MainButton>RESET</MainButton>
        </View>
        <View style={Styles.buttonPosition}>
          <MainButton onButtonPress={confirmInputHandler}>CONFIRM</MainButton>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 10,
    padding: 16,
    backgroundColor: Colors.primary700,
    elevation: 5,
  },
  numberInput: {
    height: 50,
    width: 75,
    fontSize: 32,
    borderBottomColor: Colors.primary800,
    borderBottomWidth: 2,
    color: Colors.primary800,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsPosition: {
    flexDirection: "row",
  },
  buttonPosition: {
    flex: 1,
  },
});
