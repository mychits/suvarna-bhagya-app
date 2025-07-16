import Colors from "@/constants/Colors";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

interface AuthCardProps {
  headerTitle: string;
  children: React.ReactNode;
}

const CAuthCard = ({ headerTitle, children }: AuthCardProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
        <View style={styles.textFieldContainer}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: Colors.light.primary.colorPrimary.colorOne,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  cardContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 20,
    alignItems: "center",
  },
  textFieldContainer: {
    width: "100%",
  },
  textFieldTitle: {
    color: Colors.light.primary.colorOnPrimary.colorOne,
    fontWeight: "bold",
  },
  headerTitle: {
    color: Colors.light.primary.colorOnPrimary.colorOne,
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default CAuthCard;