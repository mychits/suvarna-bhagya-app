import Colors from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, StyleSheet, Text, TouchableOpacity } from "react-native";
type CDualButtonProps = {
  titleOne: string;
  titleTwo: string;
  readonly colors: [ColorValue, ColorValue, ...ColorValue[]];
  handleButtonOne:()=>void;
  handleButtonTwo:()=>void;
};
const CDualButton = ({ titleOne, titleTwo, colors ,handleButtonOne,handleButtonTwo}: CDualButtonProps) => {
  return (
    <LinearGradient colors={colors} style={styles.mainContainer} >
      <TouchableOpacity style={styles.buttonOne} onPress={handleButtonOne}>
        <Text style={styles.titleOne}>{titleOne}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonTwo} onPress={handleButtonTwo}>
        <Text style={styles.titleTwo}>{titleTwo}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    padding:10,
    borderBottomLeftRadius:8,
    borderBottomRightRadius:8,

  },
  buttonOne: {
    flex: 1,
    borderBottomLeftRadius: 8,
    borderRightWidth:1,
    borderRightColor:"white",
    fontWeight:"semibold"
  },
  buttonTwo: {
    flex: 1,
    borderLeftWidth:1,
    borderLeftColor:"white"
  },
  titleOne: {
    textAlign: "center",
    color:Colors.light.primary.colorPrimary.colorOne,
    fontWeight:"semibold"
    
  },
  titleTwo: {
    fontWeight: "bold",
    textAlign: "center",
    color:Colors.light.primary.colorPrimary.colorOne

  },
});
export default CDualButton;
