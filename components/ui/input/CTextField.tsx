import React from "react";
import { KeyboardTypeOptions, TextInput } from "react-native";
interface CTextFieldProps {
  keyboardType: KeyboardTypeOptions | undefined;
}
const CTextField: React.FC<CTextFieldProps> = (props) => {
  return <TextInput {...props} />;
};

export default CTextField;
