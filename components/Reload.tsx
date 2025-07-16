import Colors from "@/constants/Colors";
import { General } from "@/data/Data";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, ToastAndroid, TouchableOpacity } from "react-native";

const Reload = ({ message }: { message: string }) => {
  if (message)
    ToastAndroid.show(message || "something went wrong", ToastAndroid.SHORT);
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Feather
        name="refresh-ccw"
        size={80}
        color={Colors.light.common.yellowGradientOne.colorOne}
      />
      <Text style={styles.titleTwo}>{General.tapToReload}</Text>
      <Text style={styles.titleOne}>{General.somethingWentWrong}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    gap: 8,
  },
  titleOne: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  titleTwo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default Reload;
