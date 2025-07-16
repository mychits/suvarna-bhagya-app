import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const CSquareButton = () => {
  return (
    <View style={styles.mainContainer}>
      <TextInput placeholder="" inputMode="numeric" />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
});
export default CSquareButton;
