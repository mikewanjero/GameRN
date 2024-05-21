import { Text, StyleSheet } from "react-native";
import { Colors } from "../defaults/colors";

export default function Title({ children }) {
  return <Text style={Styles.title}>{children}</Text>;
}

const Styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 12,
    textAlign: "center",
    color: Colors.primary800,
    borderWidth: 2,
    borderColor: Colors.primary800,
  },
});
