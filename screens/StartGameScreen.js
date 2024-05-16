import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import MainButton from "../components/MainButton";

export default function StartGameScreen() {
  return (
    <View style={Styles.inputContainer}>
      <TextInput />
      <MainButton>RESET</MainButton>
      <MainButton>CONFIRM</MainButton>
    </View>
  );
}

const Styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 10,
    padding: 16,
    backgroundColor: "#72063c",
    elevation: 5,
  },
});
