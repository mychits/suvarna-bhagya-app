import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

const TabBar = () => {
  return (
    <LinearGradient
      colors={["#11354B", "#17435E"]}
      style={styles.mainContainer}
    />
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
export default TabBar;
