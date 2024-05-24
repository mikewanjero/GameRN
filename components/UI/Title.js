import { Text, StyleSheet } from "react-native";

export default function Title({ children }) {
  return <Text style={Styles.title}>{children}</Text>;
}

const Styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    padding: 12,
    textAlign: "center",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
  },
});
