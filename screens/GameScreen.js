import { Text, View, StyleSheet, SafeAreaView, Alert } from "react-native";
import { useState } from "react";
import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import MainButton from "../components/UI/MainButton";

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

export default function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

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
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <MainButton onButtonPress={nextGuessHandler.bind(this, "higher")}>
            +
          </MainButton>
          <MainButton onButtonPress={nextGuessHandler.bind(this, "lower")}>
            -
          </MainButton>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
});
