import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, GestureResponderEvent, StyleSheet, TouchableOpacity } from "react-native";

interface CSingularButtonProps {
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
  iconName:any
  iconColor:string;
  onPressHandler:(event:GestureResponderEvent)=>void
}

const CSingularButton = ({ colors ,iconName,iconColor,onPressHandler}: CSingularButtonProps) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPressHandler}>
      <LinearGradient colors={colors} style={styles.gradient}>
       <AntDesign name={iconName} style={styles.icon} color={iconColor}/>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    borderTopColor:Colors.light.common.light.none,
    borderTopWidth:2
   
   
  },
  gradient:{
    height:40,
    justifyContent:"center",
   borderBottomLeftRadius:10,
   borderBottomRightRadius:10

  },
  icon:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:20
  }
});
export default CSingularButton;
