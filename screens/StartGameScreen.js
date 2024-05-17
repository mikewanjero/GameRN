import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import MainButton from "../components/MainButton";

export default function StartGameScreen() {
  return (
    <View style={Styles.inputContainer}>
      <TextInput
        style={Styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={Styles.buttonsPosition}>
        <View style={Styles.buttonPosition}>
          <MainButton>RESET</MainButton>
        </View>
        <View style={Styles.buttonPosition}>
          <MainButton>CONFIRM</MainButton>
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
    backgroundColor: "#72063c",
    elevation: 5,
  },
  numberInput: {
    height: 50,
    width: 75,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
