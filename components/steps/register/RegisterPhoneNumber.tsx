import Colors from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const RegisterPhoneNumber = () => {
  return (
    <View>
    <Text style={styles.textFieldTitle}>Phone Number</Text>
    <TextInput
      style={styles.textField}
      placeholder="Enter Phone Number"
      inputMode="numeric"
      
    />
  </View>
  )
}
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
  }
})
export default RegisterPhoneNumber