import Colors from "@/constants/Colors";
import React from "react";
import { StyleSheet, View } from "react-native";
interface CCardProps {
  componentOne: React.ReactNode;
  componentTwo?: React.ReactNode;
  enableShadow?: boolean;
  strokeWidth?:number;

  backgroundColor?: string;
  stroke: string;
}
const CCard = ({
  componentOne,
  componentTwo,
  backgroundColor = Colors.light.primary.colorPrimaryVariant.colorTwo,
  stroke,
  strokeWidth=2,
}: CCardProps) => {
  return (
    <View
      style={[
        styles.mainContainer,
        { borderColor: stroke, backgroundColor,borderWidth:strokeWidth},
      ]}
    >
      <View>{componentOne}</View>
     {!!componentTwo && <View>{componentTwo}</View>}
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    borderRadius: 10,
    zIndex:10000,
    boxShadow: [
      {
        offsetX: 0.5,
        offsetY: 0.5,
        color: Colors.light.common.shadowColor,
        spreadDistance: 0.5,
        blurRadius: 3,
      },
    ],

    marginBottom:20
  },
});
export default CCard;
