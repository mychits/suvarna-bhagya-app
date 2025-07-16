import Colors from "@/constants/Colors";
import { LoginContext } from "@/context/LoginContext";
import useCContext from "@/hooks/useCContext";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const LoginPhoneNumber = () => {
  const { formData, setFormData } = useCContext(LoginContext);
  return (
    <View>
      <Text style={styles.textFieldTitle}>Phone Number</Text>
      <TextInput
        style={styles.textField}
        placeholder="Enter Phone Number"
        value={formData.phone_number}
        inputMode="numeric"
        onChangeText={(text) =>
          setFormData((prev) => ({ ...prev, phone_number: text }))
        }
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
    fontSize:16
  },
});
export default LoginPhoneNumber;
