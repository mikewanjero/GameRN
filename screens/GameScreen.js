import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/Title";

export default function StartGameScreen() {
  return (
    <View style={Styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* + - */}
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
