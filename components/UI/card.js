import { View, StyleSheet } from "react-native";
import { Colors } from "../../defaults/colors";

export default function Card({ children }) {
  return <View style={Styles.card}>{children}</View>;
}

const Styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 10,
    padding: 16,
    backgroundColor: Colors.primary700,
    elevation: 5,
  },
});
