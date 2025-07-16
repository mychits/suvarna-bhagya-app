import Colors from "@/constants/Colors";
import { IFormData, LoginContext } from "@/context/LoginContext";
import useCContext from "@/hooks/useCContext";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const LoginPassword = () => {
  const {formData,setFormData}= useCContext(LoginContext)
  return (
    <View>
      <Text style={styles.textFieldTitle}>Password</Text>
      <TextInput
        style={styles.textField}
        placeholder="Enter Password"
        value={formData.password}
        inputMode="numeric"
        onChangeText={(text)=>{setFormData((prev:IFormData)=>({...prev,password:text}))}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textFieldTitle: {
    color: Colors.light.primary.colorOnPrimary.colorOne,
    fontWeight: "bold",
    margin: 5,
    
  },

  textField: {
    backgroundColor: Colors.light.common.white,
    borderColor: Colors.light.primary.colorOnPrimary.colorOne,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    zIndex: 10,
    
  },
});
export default LoginPassword;
