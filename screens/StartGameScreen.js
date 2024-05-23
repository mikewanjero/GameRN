import { StyleSheet, View, TextInput, Alert } from "react-native";
import MainButton from "../components/UI/MainButton";
import { useState } from "react";
import { Colors } from "../defaults/colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/card";
import Instructions from "../components/UI/Instructions";

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
    <View style={Styles.rootContainer}>
      <Title>Guess The Number!</Title>
      <Card>
        <Instructions>Enter a Number</Instructions>
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
      </Card>
    </View>
  );
}

const Styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
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
