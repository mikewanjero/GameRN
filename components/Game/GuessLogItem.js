import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../defaults/colors";

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>#{roundNumber}</Text>
      <Text style={styles.listItem}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 10,
    backgroundColor: Colors.secondary200,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
  },
  listText: {
    fontFamily: "open-sans",
  },
});
