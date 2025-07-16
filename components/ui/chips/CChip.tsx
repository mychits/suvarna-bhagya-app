import Colors from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
interface CChipProps {
  title: string;
  icon: React.ReactNode;
  titleColor?: string;
  bgColor?: string;
}
const CChip = ({
  title,
  icon,
  titleColor = Colors.light.common.shadowColor,
  bgColor = Colors.light.primary.colorPrimaryVariant.colorFour,
}: CChipProps) => {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: bgColor }, styles.mainContainer]}
    >
      <View>{!!icon && icon}</View>
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginRight: 8,
    flexDirection: "row",
    gap: 3,
    borderRadius: 20,
    padding: 4,
    paddingRight: 8,
  },
  title: {},
});
export default CChip;
