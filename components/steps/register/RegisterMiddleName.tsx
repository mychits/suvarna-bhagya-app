import Colors from '@/constants/Colors'
import { RegisterContext } from '@/context/RegisterContext'
import { General } from '@/data/Data'
import useCContext from '@/hooks/useCContext'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const RegisterMiddleName = () => {
  const  {setRFormData} = useCContext(RegisterContext)
  return (
    <View>
    <Text style={styles.textFieldTitle}>{General.middleName}</Text>
    <TextInput
      style={styles.textField}
      placeholder={General.enterYourMiddleName}
      inputMode="numeric"
      onChangeText={(text)=>(setRFormData(prev=>({...prev,middle_name:text})))}

      
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
export default RegisterMiddleName