import CButton from "@/components/ui/buttons/CButton";
import CSquareButton from "@/components/ui/buttons/CSquareButton";
import { ImagePaths } from "@/constants/Path";
import AuthPage from "@/layouts/AuthScreen";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
const screenWidth = Dimensions.get("window").width;
const Otp = () => {
  const [visible, setVisible] = useState(true);
 
  return (
    <AuthPage imageSource={ImagePaths.MobileIconPNG}>
        <Text>Enter Verification Code</Text>
        <View style={styles.buttonContainer}>
        <CSquareButton />
        <CSquareButton />
        <CSquareButton />
        <CSquareButton />
        </View>
       
        
   <CButton title="Verify Otp" onPressHandler={()=>console.log("first")}/>
    </AuthPage>
  );
};
const styles = StyleSheet.create({
 buttonContainer:{
    flexDirection:"row",
    gap:10
 }
});
export default Otp;