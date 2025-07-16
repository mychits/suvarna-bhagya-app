import Colors from '@/constants/Colors'
import { General } from '@/data/Data'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const RegisterPassword = () => {
  return (
    <View>
    <Text style={styles.textFieldTitle}>{General.password}</Text>
    <TextInput
      style={styles.textField}
      placeholder={General.enterPassword}
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
export default RegisterPassword