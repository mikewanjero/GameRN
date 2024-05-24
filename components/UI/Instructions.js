import { Text, StyleSheet } from "react-native";
import { Colors } from "../../defaults/colors";

export default function Instructions({ children, style }) {
  return <Text style={[Styles.instructionTxt, style]}>{children}</Text>;
}

const Styles = StyleSheet.create({
  instructionTxt: {
    color: Colors.secondary300,
    fontSize: 24,
  },
});
