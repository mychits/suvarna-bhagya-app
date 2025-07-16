import Colors from "@/constants/Colors"; // Using your color palette
import React from "react";
import { StyleSheet, Text, View } from "react-native";
interface TitlePanelProps {
  mainTitle: string;
  centeredTitle: string;
  trailingTitle: string;
}
const TitlePanel = ({
  mainTitle,
  centeredTitle,
  trailingTitle,
}: TitlePanelProps) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{mainTitle}</Text>
      <Text style={styles.centeredText}>{centeredTitle}</Text>
      <Text style={styles.subText}>{trailingTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.light.primary.colorPrimary.colorTwo,
    borderColor: Colors.light.common.light.none,
    borderWidth: 2,
    borderRadius: 16,
   padding:14,
    margin: 3,
    marginBottom:8,
    shadowColor: Colors.light.common.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.light.common.light.none,
    marginBottom: 8,
  },
  centeredText: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.light.primary.colorOnPrimary.colorOne,
    marginBottom: 6,
  },
  subText: {
    fontSize: 14,
    color: Colors.light.primary.colorPrimaryVariant.colorFour,
  },
});

export default TitlePanel;
