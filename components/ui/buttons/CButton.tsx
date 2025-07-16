import Colors from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ActivityIndicator, GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";
interface CButtonProps {
  title: string;
  onPressHandler:(e:GestureResponderEvent)=>void;
  disabled?:boolean;
}

const CButton = ({ title,onPressHandler,disabled=false }: CButtonProps) => {
  return (
    <TouchableOpacity style={styles.touchableContainer} onPress={onPressHandler} disabled={disabled}>
      <LinearGradient
        colors={[
          Colors.light.secondary.colorSecondary.colorOne,
          Colors.light.secondary.colorSecondary.colorTwo,
        ]}
        style={styles.button}
      >
       {!disabled && <Text style={styles.title}>{title}</Text>}
      {disabled &&    <ActivityIndicator
          size={"small"}
          color={Colors.light.primary.colorOnPrimary.colorOne}
        />}
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    touchableContainer:{
        width:"100%",
        alignItems:"center",
   

    },
  title: {
    color: Colors.light.secondary.colorOnSecondary.colorOne,
    fontWeight:"bold",


  },
  button: {
    zIndex:10,
    width:"50%",
    height:50,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:Colors.light.common.white,
   boxShadow:[
    {
        offsetX:1,
        offsetY:1,
        spreadDistance:1,
        blurRadius:5,
        color:"grey"

    }
   ]
    
  },
});
export default CButton;
