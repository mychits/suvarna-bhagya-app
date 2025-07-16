import Colors from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

const AppBar = () => {
  return (
    <LinearGradient
      colors={["#11354B", "#17435E00"]}
      locations={[0.4, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.mainContainer}
    />
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.light.primary.colorPrimary.colorTwo,
  },
});
export default AppBar;
