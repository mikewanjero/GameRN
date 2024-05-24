import { View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import MainButton from "../components/UI/MainButton";
import Card from "../components/UI/card";
import Instructions from "../components/UI/Instructions";
import { AntDesign } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Really now", "Of course it's wrong", [
        { Text: "Got You!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={Styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* Actual CPU Guess */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instructions style={Styles.instructionText}>
          Higher or Lower?
        </Instructions>
        <View style={Styles.buttonsPosition}>
          <View style={Styles.buttonPosition}>
            <MainButton onButtonPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="minuscircleo" size={20} color="white" />
            </MainButton>
          </View>
          <View style={Styles.buttonPosition}>
            <MainButton onButtonPress={nextGuessHandler.bind(this, "higher")}>
              <AntDesign name="pluscircleo" size={20} color="white" />
            </MainButton>
          </View>
        </View>
      </Card>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsPosition: {
    flexDirection: "row",
  },
  buttonPosition: {
    flex: 1,
  },
});
