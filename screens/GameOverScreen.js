import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

export default function GameOverScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.textView}>Game Over! Do you want to try again?</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textView: {
    marginLeft: 20,
    marginTop: 100,
  },
});
