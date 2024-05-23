import { Text, StyleSheet } from "react-native";
import { Colors } from "../../defaults/colors";

export default function Instructions({ children }) {
  return <Text style={Styles.instructionTxt}>{children}</Text>;
}

const Styles = StyleSheet.create({
  instructionTxt: {
    color: Colors.secondary300,
    fontSize: 24,
  },
});
