import Colors from "@/constants/Colors";
import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
interface CContainerProps {
  titleOne: string;
  titleTwo: string;
  valueOne: string;
  valueTwo: string;
  mainContainerStyle: StyleProp<ViewStyle>;
}
const CContainer = ({
  titleOne,
  titleTwo,
  valueOne,
  valueTwo,
  mainContainerStyle,
}: CContainerProps) => {
  return (
    <View style={[styles.mainBoxContainer, mainContainerStyle]}>
      <View style={styles.boxContainerOne}>
        <View style={[styles.titleContainer, styles.titleContainerOne]}>
          <Text style={styles.title}>{titleOne}</Text>
        </View>
        <View style={[styles.titleContainer, styles.titleContainerTwo]}>
          <Text style={styles.title}>{titleTwo}</Text>
        </View>
      </View>
      <View style={styles.boxContainerTwo}>
        <View style={[styles.valueContainer, styles.valueContainerOne]}>
          <Text style={styles.value}>{valueOne}</Text>
        </View>
        <View style={[styles.valueContainer, styles.valueContainerTwo]}>
          <Text style={styles.value}>{valueTwo}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainBoxContainer: {
    backgroundColor: Colors.light.primary.colorPrimary.colorOne,
    borderRadius: 10,
    borderColor: Colors.light.primary.colorPrimaryVariant.colorTwo,
    borderWidth: 2,
  },
  boxContainerOne: {
    width: "50%",
    flexDirection: "row",
    borderRightColor: Colors.light.common.light.eighty,
  },
  titleContainer: {
    backgroundColor: Colors.light.common.light.fifty,
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.light.common.light.eighty,
  },
  titleContainerOne: {
    borderRightColor: Colors.light.common.light.eighty,
    borderTopLeftRadius: 10,
    borderRightWidth: 2,
  },
  titleContainerTwo: {
    borderTopRightRadius: 10,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.light.primary.colorPrimaryVariant.colorThree,
    fontSize: 16,
  },
  boxContainerTwo: {
    flexDirection: "row",
  },
  value: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.light.common.light.none,

    fontWeight: "semibold",
  },
  valueContainer: {
    padding: 10,
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.light.common.light.eighty,
  },
  valueContainerOne: {
    borderRightColor: Colors.light.common.light.none,
    borderRightWidth: 1,
    borderBottomLeftRadius: 10,
  },
  valueContainerTwo: {
    borderBottomRightRadius: 10,
  },
});
export default CContainer;
